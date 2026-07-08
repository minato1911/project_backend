package com.fixon.projeto.dto;

import java.time.LocalDateTime;

import com.fixon.projeto.model.Administrador;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Tecnico;

public record UsuarioResponse(
        Long id,
        String nome,
        String email,
        String perfil,
        String telefone,
        String especialidade,
        String foto,
        Boolean ativo,
        LocalDateTime criadoEm) {

    public static UsuarioResponse from(Administrador admin) {
        return new UsuarioResponse(admin.getId(), admin.getNome(), admin.getEmail(), "ADMIN", null, null,
                admin.getFoto(), admin.getAtivo(), admin.getCriadoEm());
    }

    public static UsuarioResponse from(Operador operador) {
        return new UsuarioResponse(operador.getId(), operador.getNome(), operador.getEmail(), "OPERADOR",
                operador.getTelefone(), null, operador.getFoto(), operador.getAtivo(), operador.getCriadoEm());
    }

    public static UsuarioResponse from(Tecnico tecnico) {
        return new UsuarioResponse(tecnico.getId(), tecnico.getNome(), tecnico.getEmail(), "TECNICO",
                tecnico.getTelefone(), tecnico.getEspecialidade(), tecnico.getFoto(), tecnico.getAtivo(),
                tecnico.getCriadoEm());
    }
}
