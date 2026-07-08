package com.fixon.projeto.dto;

import com.fixon.projeto.Enums.PrioridadeChamado;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ChamadoRequest(

        @NotNull(message = "O operador é obrigatório")
        Long operadorId,

        @NotBlank(message = "O setor é obrigatório")
        String setor,

        @NotBlank(message = "A máquina é obrigatória")
        String maquina,

        @NotBlank(message = "A categoria é obrigatória")
        String categoria,

        @NotNull(message = "A prioridade é obrigatória")
        PrioridadeChamado prioridade,

        @NotBlank(message = "A descrição é obrigatória")
        @Size(max = 2000, message = "A descrição deve ter no máximo 2000 caracteres")
        String descricao,

        @Size(max = 5_000_000, message = "Imagem excede o tamanho permitido")
        String imagem) {
}
