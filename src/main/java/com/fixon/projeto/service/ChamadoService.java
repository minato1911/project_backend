package com.fixon.projeto.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.fixon.projeto.Enums.StatusChamado;
import com.fixon.projeto.Enums.TipoObservacao;
import com.fixon.projeto.dto.ChamadoRequest;
import com.fixon.projeto.dto.ChamadoResponse;
import com.fixon.projeto.dto.ObservacaoRequest;
import com.fixon.projeto.dto.ObservacaoResponse;
import com.fixon.projeto.model.Chamado;
import com.fixon.projeto.model.Observacao;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Tecnico;
import com.fixon.projeto.repository.ChamadoRepository;
import com.fixon.projeto.repository.ObservacaoRepository;
import com.fixon.projeto.repository.OperadorRepository;
import com.fixon.projeto.repository.TecnicoRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * IMPORTANTE sobre Chamado.operador e Chamado.tecnico (FetchType.LAZY):
 *
 * Como "spring.jpa.open-in-view=false" está configurado (application.properties),
 * a sessão do Hibernate SÓ fica aberta durante o método @Transactional. Por isso,
 * a conversão de Chamado -> ChamadoResponse é feita AQUI DENTRO do service
 * (ainda dentro da transação), e não no controller. Se isso for movido pro
 * controller, vai estourar LazyInitializationException.
 */
@Slf4j
@Service
public class ChamadoService {

    private static final List<StatusChamado> STATUS_ATIVOS = List.of(
            StatusChamado.ASSUMIDO,
            StatusChamado.DESLOCAMENTO,
            StatusChamado.NO_LOCAL,
            StatusChamado.ATENDIMENTO);

    private final ChamadoRepository chamados;
    private final OperadorRepository operadores;
    private final TecnicoRepository tecnicos;
    private final ObservacaoRepository observacoes;

    public ChamadoService(
            ChamadoRepository chamados,
            OperadorRepository operadores,
            TecnicoRepository tecnicos,
            ObservacaoRepository observacoes) {
        this.chamados = chamados;
        this.operadores = operadores;
        this.tecnicos = tecnicos;
        this.observacoes = observacoes;
    }

    @Transactional(readOnly = true)
    public Page<ChamadoResponse> listarTodos(Pageable pageable) {
        return chamados.findAll(pageable).map(ChamadoResponse::from);
    }

    @Transactional(readOnly = true)
    public List<ChamadoResponse> listarDisponiveis() {
        return chamados.findByStatus(StatusChamado.ABERTO).stream()
                .map(ChamadoResponse::from)
                .toList();
    }

    @Transactional(readOnly = true)
    public ChamadoResponse buscarResponse(Long id) {
        return ChamadoResponse.from(buscar(id));
    }

    /**
     * Busca a entidade "crua". Uso interno (outros métodos deste service),
     * que já rodam dentro de uma transação própria. Não expor para o controller
     * sem antes converter para ChamadoResponse.
     */
    private Chamado buscar(Long id) {
        return chamados.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Chamado nao encontrado."));
    }

    @Transactional
    public ChamadoResponse criar(ChamadoRequest request) {
        validarCriacao(request);
        Operador operador = operadores.findById(request.operadorId())
                .orElseThrow(() -> new IllegalArgumentException("Operador n\u00e3o encontrado."));

        if (!operador.getAtivo()) {
            throw new IllegalArgumentException("Operador inativo n\u00e3o pode criar chamados.");
        }

        Chamado chamado = new Chamado();
        chamado.setOperador(operador);
        chamado.setProtocolo(gerarProtocolo());
        chamado.setSetor(request.setor());
        chamado.setMaquina(request.maquina());
        chamado.setCategoria(request.categoria());
        chamado.setPrioridade(request.prioridade());
        chamado.setDescricao(request.descricao());
        chamado.setImagem(request.imagem());
        chamado.setStatus(StatusChamado.ABERTO);
        chamado.setDataAbertura(LocalDateTime.now());

        chamado = chamados.save(chamado);
        log.info("Chamado {} criado pelo operador {}", chamado.getProtocolo(), operador.getId());
        return ChamadoResponse.from(chamado);
    }

    @Transactional
    public ChamadoResponse assumir(Long chamadoId, Long tecnicoId) {
        if (tecnicoId == null) {
            throw new IllegalArgumentException("Tecnico e obrigatorio.");
        }
        if (chamados.existsByTecnicoIdAndStatusIn(tecnicoId, STATUS_ATIVOS)) {
            throw new IllegalStateException("Tecnico ja possui chamado ativo.");
        }

        Chamado chamado = buscar(chamadoId);
        Tecnico tecnico = tecnicos.findById(tecnicoId)
                .orElseThrow(() -> new IllegalArgumentException("Tecnico nao encontrado."));

        if (chamado.getStatus() != StatusChamado.ABERTO) {
            throw new IllegalStateException("Chamado nao esta disponivel para assumir.");
        }

        chamado.setTecnico(tecnico);
        chamado.setStatus(StatusChamado.ASSUMIDO);
        chamado.setDataAceitacao(LocalDateTime.now());
        chamado = chamados.save(chamado);
        log.info("Chamado {} assumido pelo tecnico {}", chamado.getProtocolo(), tecnicoId);
        return ChamadoResponse.from(chamado);
    }

    @Transactional
    public ChamadoResponse iniciarDeslocamento(Long chamadoId, Long tecnicoId) {
        Chamado chamado = buscar(chamadoId);
        exigirDono(chamado, tecnicoId);
        exigirStatus(chamado, StatusChamado.ASSUMIDO, "Chamado precisa estar assumido para iniciar deslocamento.");
        chamado.setStatus(StatusChamado.DESLOCAMENTO);
        chamado.setDataInicioDeslocamento(LocalDateTime.now());
        return ChamadoResponse.from(chamados.save(chamado));
    }

    @Transactional
    public ChamadoResponse chegarLocal(Long chamadoId, Long tecnicoId) {
        Chamado chamado = buscar(chamadoId);
        exigirDono(chamado, tecnicoId);
        exigirStatus(chamado, StatusChamado.DESLOCAMENTO,
                "Chamado precisa estar em deslocamento para registrar chegada.");
        LocalDateTime agora = LocalDateTime.now();
        chamado.setStatus(StatusChamado.NO_LOCAL);
        chamado.setDataChegadaLocal(agora);
        if (chamado.getDataInicioDeslocamento() != null) {
            chamado.setTempoDeslocamento(
                    (int) Duration.between(chamado.getDataInicioDeslocamento(), agora).toSeconds());
        }
        return ChamadoResponse.from(chamados.save(chamado));
    }

    @Transactional
    public ChamadoResponse iniciarAtendimento(Long chamadoId, Long tecnicoId) {
        Chamado chamado = buscar(chamadoId);
        exigirDono(chamado, tecnicoId);
        exigirStatus(chamado, StatusChamado.NO_LOCAL, "Chamado precisa estar no local para iniciar atendimento.");
        chamado.setStatus(StatusChamado.ATENDIMENTO);
        return ChamadoResponse.from(chamados.save(chamado));
    }

    @Transactional
    public ChamadoResponse finalizar(Long chamadoId, Long tecnicoId) {
        Chamado chamado = buscar(chamadoId);
        exigirDono(chamado, tecnicoId);
        if (chamado.getStatus() != StatusChamado.ATENDIMENTO && chamado.getStatus() != StatusChamado.NO_LOCAL) {
            throw new IllegalStateException("Chamado precisa estar em atendimento para finalizar.");
        }
        LocalDateTime agora = LocalDateTime.now();
        chamado.setStatus(StatusChamado.FINALIZADO);
        chamado.setDataEncerramento(agora);
        if (chamado.getDataChegadaLocal() != null) {
            int atendimento = (int) Duration.between(chamado.getDataChegadaLocal(), agora).toSeconds();
            chamado.setTempoAtendimento(atendimento);
            chamado.setTempoExcedido(Math.max(0, atendimento - chamado.getSlaMinutos() * 60));
        }
        chamado = chamados.save(chamado);
        log.info("Chamado {} finalizado pelo tecnico {}", chamado.getProtocolo(), tecnicoId);
        return ChamadoResponse.from(chamado);
    }

    @Transactional
    public ObservacaoResponse adicionarObservacao(Long chamadoId, ObservacaoRequest request) {
        if (request == null || isBlank(request.observacao())) {
            throw new IllegalArgumentException("Observacao e obrigatoria.");
        }
        Chamado chamado = buscar(chamadoId);
        Tecnico tecnico = request.tecnicoId() == null
                ? null
                : tecnicos.findById(request.tecnicoId())
                        .orElseThrow(() -> new IllegalArgumentException("Tecnico nao encontrado."));

        Observacao observacao = new Observacao();
        observacao.setChamado(chamado);
        observacao.setTecnico(tecnico);
        observacao.setTipo(request.tipo() == null ? TipoObservacao.OBSERVACAO : request.tipo());
        observacao.setObservacao(request.observacao());
        return ObservacaoResponse.from(observacoes.save(observacao));
    }

    @Transactional(readOnly = true)
    public List<ObservacaoResponse> listarObservacoes(Long chamadoId) {
        return observacoes.findByChamadoIdOrderByDataDesc(chamadoId).stream()
                .map(ObservacaoResponse::from)
                .toList();
    }

    private String gerarProtocolo() {
        String protocolo;
        int tentativas = 0;
        do {
            protocolo = "CH-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
            tentativas++;
        } while (chamados.existsByProtocolo(protocolo) && tentativas < 5);
        return protocolo;
    }

    private void validarCriacao(ChamadoRequest request) {
        // Os campos obrigatórios (operadorId, categoria, prioridade, descrição)
        // já são validados pelas anotações Jakarta Validation em ChamadoRequest
        // (ver @Valid no ChamadoController). Esta checagem fica só como
        // salvaguarda defensiva caso o método seja chamado fora do controller.
        if (request == null) {
            throw new IllegalArgumentException("Dados do chamado sao obrigatorios.");
        }
    }

    private void exigirStatus(Chamado chamado, StatusChamado esperado, String mensagem) {
        if (chamado.getStatus() != esperado) {
            throw new IllegalStateException(mensagem);
        }
    }

    /**
     * Garante que só o técnico responsável pelo chamado possa avançar o status dele.
     * Evita que o técnico A finalize/movimente um chamado que é do técnico B.
     */
    private void exigirDono(Chamado chamado, Long tecnicoId) {
        if (tecnicoId == null) {
            throw new IllegalArgumentException("Tecnico e obrigatorio.");
        }
        if (chamado.getTecnico() == null || !chamado.getTecnico().getId().equals(tecnicoId)) {
            throw new IllegalStateException("Este chamado nao pertence a este tecnico.");
        }
    }

    private boolean isBlank(String valor) {
        return !StringUtils.hasText(valor);
    }
}
