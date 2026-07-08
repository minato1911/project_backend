package com.fixon.projeto.dto;

import java.time.LocalDateTime;

import com.fixon.projeto.Enums.PrioridadeChamado;
import com.fixon.projeto.Enums.StatusChamado;
import com.fixon.projeto.model.Chamado;

public record ChamadoResponse(
        Long id,
        String protocolo,
        UsuarioResumo operador,
        UsuarioResumo tecnico,
        String setor,
        String maquina,
        String categoria,
        PrioridadeChamado prioridade,
        String descricao,
        String imagem,
        StatusChamado status,
        Integer tempoDeslocamento,
        Integer tempoAtendimento,
        Integer tempoExcedido,
        Integer slaMinutos,
        LocalDateTime dataAbertura,
        LocalDateTime dataAceitacao,
        LocalDateTime dataInicioDeslocamento,
        LocalDateTime dataChegadaLocal,
        LocalDateTime dataEncerramento) {

    public static ChamadoResponse from(Chamado chamado) {
        return new ChamadoResponse(
                chamado.getId(),
                chamado.getProtocolo(),
                chamado.getOperador() == null ? null
                        : new UsuarioResumo(chamado.getOperador().getId(), chamado.getOperador().getNome(),
                                chamado.getOperador().getEmail()),
                chamado.getTecnico() == null ? null
                        : new UsuarioResumo(chamado.getTecnico().getId(), chamado.getTecnico().getNome(),
                                chamado.getTecnico().getEmail()),
                chamado.getSetor(),
                chamado.getMaquina(),
                chamado.getCategoria(),
                chamado.getPrioridade(),
                chamado.getDescricao(),
                chamado.getImagem(),
                chamado.getStatus(),
                chamado.getTempoDeslocamento(),
                chamado.getTempoAtendimento(),
                chamado.getTempoExcedido(),
                chamado.getSlaMinutos(),
                chamado.getDataAbertura(),
                chamado.getDataAceitacao(),
                chamado.getDataInicioDeslocamento(),
                chamado.getDataChegadaLocal(),
                chamado.getDataEncerramento());
    }

    public record UsuarioResumo(Long id, String nome, String email) {
    }
}
