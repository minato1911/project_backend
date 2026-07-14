package com.fixon.projeto.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fixon.projeto.dto.LoginRequest;
import com.fixon.projeto.dto.LoginResponse;
import com.fixon.projeto.config.AuthInterceptor;
import com.fixon.projeto.dto.AuthUser;
import com.fixon.projeto.service.AuthService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request, HttpSession session) {
        LoginResponse response = authService.login(request);
        session.setAttribute(AuthInterceptor.SESSION_USER,
                new AuthUser(response.id(), response.nome(), response.email(), response.perfil()));
        return response;
    }

    @GetMapping("/session")
    public AuthUser session(HttpSession session) {
        AuthUser user = (AuthUser) session.getAttribute(AuthInterceptor.SESSION_USER);
        if (user == null) {
            throw new RuntimeException("Não autenticado");
        }
        return user;
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
    }
    // Tratamento de erro centralizado em GlobalExceptionHandler (não duplicar handlers aqui).
}
