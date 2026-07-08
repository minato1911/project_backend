package com.fixon.projeto.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fixon.projeto.Enums.StatusMaquina;
import com.fixon.projeto.dto.MaquinaRequest;
import com.fixon.projeto.model.Maquina;
import com.fixon.projeto.model.Setor;
import com.fixon.projeto.repository.MaquinaRepository;
import com.fixon.projeto.repository.SetorRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MaquinaService {

    private final MaquinaRepository maquinas;
    private final SetorRepository setores;

    public MaquinaService(MaquinaRepository maquinas, SetorRepository setores) {
        this.maquinas = maquinas;
        this.setores = setores;
    }

    public List<Maquina> listar() {
        return maquinas.findAll();
    }

    @Transactional
    public Maquina salvar(MaquinaRequest request) {
        validar(request);
        Maquina maquina = request.codigo() == null
                ? new Maquina()
                : maquinas.findByCodigo(request.codigo()).orElseGet(Maquina::new);

        Setor setor = request.setorId() == null
                ? null
                : setores.findById(request.setorId())
                        .orElseThrow(() -> new IllegalArgumentException("Setor não encontrado."));

        maquina.setCodigo(request.codigo());
        maquina.setNome(request.nome());
        maquina.setSetor(setor);
        maquina.setStatus(request.status() == null ? StatusMaquina.ATIVA : request.status());
        maquina = maquinas.save(maquina);
        log.info("Máquina {} salva (setor {})", maquina.getCodigo(), request.setorId());
        return maquina;
    }

    @Transactional
    public void remover(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Id da máquina é obrigatório.");
        }
        maquinas.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Máquina não encontrada."));
        maquinas.deleteById(id);
        log.info("Máquina {} removida", id);
    }

    private void validar(MaquinaRequest request) {
        // codigo, nome, setorId e status já são validados pelas anotações
        // Jakarta Validation em MaquinaRequest (ver @Valid no MaquinaController).
        if (request == null) {
            throw new IllegalArgumentException("Dados da máquina são obrigatórios.");
        }
    }
}
