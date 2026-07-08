package com.fixon.projeto.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.fixon.projeto.dto.LoginRequest;
import com.fixon.projeto.dto.LoginResponse;
import com.fixon.projeto.model.Administrador;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Tecnico;
import com.fixon.projeto.repository.AdministradorRepository;
import com.fixon.projeto.repository.OperadorRepository;
import com.fixon.projeto.repository.TecnicoRepository;

@Service
public class AuthService {

    private final AdministradorRepository administradores;
    private final OperadorRepository operadores;
    private final TecnicoRepository tecnicos;
    private final LoginAttemptService loginAttemptService;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(
            AdministradorRepository administradores,
            OperadorRepository operadores,
            TecnicoRepository tecnicos,
            LoginAttemptService loginAttemptService) {
        this.administradores = administradores;
        this.operadores = operadores;
        this.tecnicos = tecnicos;
        this.loginAttemptService = loginAttemptService;
    }

    public LoginResponse login(LoginRequest request) {
        if (request == null) {
            throw new IllegalArgumentException("Informe email e senha.");
        }
        String email = normalize(request.email());
        String senha = request.senha() == null ? "" : request.senha();

        if (email.isBlank() || senha.isBlank()) {
            throw new IllegalArgumentException("Informe email e senha.");
        }

        // Bloqueia por excesso de tentativas ANTES de gastar tempo validando a senha.
        loginAttemptService.verificarBloqueio(email);

        LoginResponse resposta = administradores.findByEmail(email)
                .filter(admin -> Boolean.TRUE.equals(admin.getAtivo()))
                .filter(admin -> senhaConfere(senha, admin.getSenha()))
                .map(this::adminResponse)
                .or(() -> operadores.findByEmail(email)
                        .filter(operador -> Boolean.TRUE.equals(operador.getAtivo()))
                        .filter(operador -> senhaConfere(senha, operador.getSenha()))
                        .map(this::operadorResponse))
                .or(() -> tecnicos.findByEmail(email)
                        .filter(tecnico -> Boolean.TRUE.equals(tecnico.getAtivo()))
                        .filter(tecnico -> senhaConfere(senha, tecnico.getSenha()))
                        .map(this::tecnicoResponse))
                .orElse(null);

        if (resposta == null) {
            loginAttemptService.registrarFalha(email);
            throw new IllegalArgumentException("Email ou senha invalidos.");
        }

        loginAttemptService.registrarSucesso(email);
        return resposta;
    }

    private LoginResponse adminResponse(Administrador admin) {
        return new LoginResponse(admin.getId(), admin.getNome(), admin.getEmail(), "ADMIN", "/adm/dashboard");
    }

    private LoginResponse operadorResponse(Operador operador) {
        return new LoginResponse(operador.getId(), operador.getNome(), operador.getEmail(), "OPERADOR", "/operador/dashboard");
    }

    private LoginResponse tecnicoResponse(Tecnico tecnico) {
        return new LoginResponse(tecnico.getId(), tecnico.getNome(), tecnico.getEmail(), "TECNICO", "/tecnico/dashboard");
    }

    private boolean senhaConfere(String senhaDigitada, String senhaSalva) {
        if (senhaSalva == null) {
            return false;
        }
        if (senhaSalva.startsWith("$2a$") || senhaSalva.startsWith("$2b$") || senhaSalva.startsWith("$2y$")) {
            return encoder.matches(senhaDigitada, senhaSalva);
        }
        return false;
    }

    private String normalize(String email) {
        return email == null ? "" : email.trim().toLowerCase();
    }
}
