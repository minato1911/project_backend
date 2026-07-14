package com.fixon.projeto.service;

import java.util.List;
import java.util.Locale;
import java.util.stream.Stream;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.fixon.projeto.dto.UsuarioRequest;
import com.fixon.projeto.dto.UsuarioResponse;
import com.fixon.projeto.model.Administrador;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Tecnico;
import com.fixon.projeto.repository.AdministradorRepository;
import com.fixon.projeto.repository.OperadorRepository;
import com.fixon.projeto.repository.TecnicoRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UsuarioService {

    private final AdministradorRepository administradores;
    private final OperadorRepository operadores;
    private final TecnicoRepository tecnicos;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UsuarioService(
            AdministradorRepository administradores,
            OperadorRepository operadores,
            TecnicoRepository tecnicos) {
        this.administradores = administradores;
        this.operadores = operadores;
        this.tecnicos = tecnicos;
    }

    public List<Administrador> listarAdministradores() {
        return administradores.findAll();
    }

    public List<Operador> listarOperadores() {
        return operadores.findAll();
    }

    public List<Tecnico> listarTecnicos() {
        return tecnicos.findAll();
    }

    public List<UsuarioResponse> listarUsuarios() {
        return Stream.concat(
                Stream.concat(
                        listarAdministradores().stream().map(UsuarioResponse::from),
                        listarOperadores().stream().map(UsuarioResponse::from)),
                listarTecnicos().stream().map(UsuarioResponse::from))
                .toList();
    }

    @Transactional
    public Object criar(UsuarioRequest request) {
        validar(request);
        String perfil = request.perfil() == null ? "OPERADOR" : request.perfil().toUpperCase(Locale.ROOT);
        String nomeUsuario = resolveNomeUsuario(request);
        Object usuario = switch (perfil) {
            case "ADMIN", "ADMINISTRADOR" -> criarAdministrador(request, nomeUsuario);
            case "TECNICO", "TÉCNICO" -> criarTecnico(request, nomeUsuario);
            default -> criarOperador(request, nomeUsuario);
        };
        log.info("Usuário criado: perfil={}, email={}, nomeUsuario={}", perfil, normalize(request.email()),
                nomeUsuario);
        return usuario;
    }

    private Administrador criarAdministrador(UsuarioRequest request, String nomeUsuario) {
        Administrador admin = new Administrador();
        admin.setNome(request.nome());
        admin.setEmail(normalize(request.email()));
        admin.setSenha(encoder.encode(request.senha()));
        admin.setNomeUsuario(nomeUsuario);
        return administradores.save(admin);
    }

    private Operador criarOperador(UsuarioRequest request, String nomeUsuario) {
        Operador operador = new Operador();
        operador.setNome(request.nome());
        operador.setEmail(normalize(request.email()));
        operador.setSenha(encoder.encode(request.senha()));
        operador.setNomeUsuario(nomeUsuario);
        operador.setTelefone(request.telefone());
        return operadores.save(operador);
    }

    private Tecnico criarTecnico(UsuarioRequest request, String nomeUsuario) {
        Tecnico tecnico = new Tecnico();
        tecnico.setNome(request.nome());
        tecnico.setEmail(normalize(request.email()));
        tecnico.setSenha(encoder.encode(request.senha()));
        tecnico.setNomeUsuario(nomeUsuario);
        tecnico.setTelefone(request.telefone());
        tecnico.setEspecialidade(request.especialidade());
        return tecnicos.save(tecnico);
    }

    private void validar(UsuarioRequest request) {
        // Nome, e-mail e tamanho mínimo da senha já são validados pelas
        // anotações Jakarta Validation em UsuarioRequest (ver @Valid no
        // UsuarioController). Aqui ficam só as regras que dependem do banco
        // (e-mail duplicado), que Bean Validation não consegue checar sozinho.
        if (request == null) {
            throw new IllegalArgumentException("Dados do usuario sao obrigatorios.");
        }
        String email = normalize(request.email());
        if (!StringUtils.hasText(email)) {
            throw new IllegalArgumentException("Email é obrigatório.");
        }
        if (administradores.findByEmail(email).isPresent()
                || operadores.findByEmail(email).isPresent()
                || tecnicos.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email já cadastrado.");
        }

        String nomeUsuario = resolveNomeUsuario(request);
        if (StringUtils.hasText(nomeUsuario)) {
            if (administradores.findByNomeUsuarioIgnoreCase(nomeUsuario).isPresent()
                    || operadores.findByNomeUsuarioIgnoreCase(nomeUsuario).isPresent()
                    || tecnicos.findByNomeUsuarioIgnoreCase(nomeUsuario).isPresent()) {
                throw new IllegalArgumentException("Nome de usuário já cadastrado.");
            }
        }
    }

    private String resolveNomeUsuario(UsuarioRequest request) {
        String nomeUsuario = request.nomeUsuario() == null ? "" : request.nomeUsuario().trim();
        if (!StringUtils.hasText(nomeUsuario)) {
            String emailLocal = request.email() == null ? "" : request.email().trim().split("@", 2)[0];
            nomeUsuario = StringUtils.hasText(emailLocal) ? emailLocal : "";
        }
        return normalizeUsuario(nomeUsuario);
    }

    private String normalizeUsuario(String valor) {
        return valor == null ? "" : valor.trim().toLowerCase(Locale.ROOT);
    }

    private String normalize(String email) {
        return email == null ? "" : email.trim().toLowerCase(Locale.ROOT);
    }
}
