package com.fixon.projeto.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fixon.projeto.dto.AuthUser;

import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    public static final String SESSION_USER = "AUTH_USER";

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String path = request.getRequestURI();

        if (isPublic(path)) {
            return true;
        }

        HttpSession session = request.getSession(false);
        AuthUser user = session == null ? null : (AuthUser) session.getAttribute(SESSION_USER);
        if (user == null) {
            if (path.startsWith("/api/")) {
                sendJsonError(response, HttpStatus.UNAUTHORIZED.value(), "Login necessário.");
            } else {
                response.sendRedirect("/login");
            }
            return false;
        }

        if (!isAllowed(path, user)) {
            if (path.startsWith("/api/")) {
                sendJsonError(response, HttpStatus.FORBIDDEN.value(), "Acesso negado.");
            } else {
                response.sendError(HttpStatus.FORBIDDEN.value(), "Acesso negado.");
            }
            return false;
        }

        return true;
    }

    private void sendJsonError(HttpServletResponse response, int status, String message) throws IOException {
        response.setStatus(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");

        String jsonResponse = objectMapper.writeValueAsString(Map.of("status", status, "message", message));
        response.getWriter().write(jsonResponse);
    }

    private boolean isPublic(String path) {
        return path.equals("/") || path.equals("/login") || path.equals("/api/auth/login")
                || path.startsWith("/css/") || path.startsWith("/js/") || path.startsWith("/images/")
                || path.startsWith("/webjars/") || path.equals("/favicon.ico");
    }

    private boolean isAllowed(String path, AuthUser user) {
        if (path.startsWith("/adm/")) {
            return user.hasRole("ADMIN");
        }
        if (path.startsWith("/operador/")) {
            return user.hasRole("OPERADOR");
        }
        if (path.startsWith("/tecnico/")) {
            return user.hasRole("TECNICO");
        }
        if (path.startsWith("/api/usuarios") || path.startsWith("/api/maquinas")) {
            return user.hasRole("ADMIN");
        }
        return true;
    }
}
