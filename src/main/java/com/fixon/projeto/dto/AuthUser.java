package com.fixon.projeto.dto;

public record AuthUser(Long id, String nome, String email, String perfil) {
    public boolean hasRole(String role) {
        return perfil != null && perfil.equalsIgnoreCase(role);
    }
}
