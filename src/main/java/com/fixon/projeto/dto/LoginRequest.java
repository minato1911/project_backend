package com.fixon.projeto.dto;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(

        @NotBlank(message = "O e-mail ou nome de usuário é obrigatório")
        String email,

        @NotBlank(message = "A senha é obrigatória")
        String senha) {
}
