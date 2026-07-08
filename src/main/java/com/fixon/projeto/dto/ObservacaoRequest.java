package com.fixon.projeto.dto;

import com.fixon.projeto.Enums.TipoObservacao;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ObservacaoRequest(

        Long tecnicoId,

        TipoObservacao tipo,

        @NotBlank(message = "A observação é obrigatória")
        @Size(max = 2000, message = "A observação deve ter no máximo 2000 caracteres")
        String observacao) {
}
