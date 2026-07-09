package com.fixon.projeto.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record UsuarioRequest(

        @NotBlank(message = "O nome é obrigatório")
        @Size(max = 150, message = "O nome deve ter no máximo 150 caracteres")
        String nome,

        @NotBlank(message = "O e-mail é obrigatório")
        String email,

        @Size(max = 80, message = "O nome de usuário deve ter no máximo 80 caracteres")
        String nomeUsuario,

        @NotBlank(message = "A senha é obrigatória")
        @Size(min = 8, message = "A senha deve ter no mínimo 8 caracteres")
        String senha,

        String telefone,

        String especialidade,

        // Sem @NotBlank de propósito: quando vier nulo/vazio, o UsuarioService
        // assume "OPERADOR" como perfil padrão (ver UsuarioService.criar()).
        String perfil) {
}
