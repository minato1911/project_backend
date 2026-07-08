package com.fixon.projeto.dto;

import com.fixon.projeto.Enums.StatusMaquina;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record MaquinaRequest(

        @NotBlank(message = "O código é obrigatório")
        @Size(max = 50, message = "O código deve ter no máximo 50 caracteres")
        String codigo,

        @NotBlank(message = "O nome é obrigatório")
        @Size(max = 150, message = "O nome deve ter no máximo 150 caracteres")
        String nome,

        @NotNull(message = "O setor é obrigatório")
        Long setorId,

        @NotNull(message = "O status é obrigatório")
        StatusMaquina status) {
}
