package com.fixon.projeto.dto;

import java.time.LocalDateTime;

import com.fixon.projeto.Enums.TipoObservacao;
import com.fixon.projeto.model.Observacao;

public record ObservacaoResponse(
        Long id,
        Long chamadoId,
        ChamadoResponse.UsuarioResumo tecnico,
        TipoObservacao tipo,
        String observacao,
        LocalDateTime data) {

    public static ObservacaoResponse from(Observacao observacao) {
        return new ObservacaoResponse(
                observacao.getId(),
                observacao.getChamado() == null ? null : observacao.getChamado().getId(),
                observacao.getTecnico() == null ? null
                        : new ChamadoResponse.UsuarioResumo(observacao.getTecnico().getId(),
                                observacao.getTecnico().getNome(), observacao.getTecnico().getEmail()),
                observacao.getTipo(),
                observacao.getObservacao(),
                observacao.getData());
    }
}
