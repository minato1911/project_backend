package com.fixon.projeto.model;

import java.time.LocalDateTime;

import com.fixon.projeto.Enums.PrioridadeChamado;
import com.fixon.projeto.Enums.StatusChamado;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "chamados")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Chamado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String protocolo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "operador_id")
    private Operador operador;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tecnico_id")
    private Tecnico tecnico;

    private String setor;

    private String maquina;

    private String categoria;

    @Enumerated(EnumType.STRING)
    private PrioridadeChamado prioridade;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    private String imagem;

    @Enumerated(EnumType.STRING)
    private StatusChamado status;

    private Integer tempoDeslocamento = 0;

    private Integer tempoAtendimento = 0;

    private Integer tempoExcedido = 0;

    private Integer slaMinutos = 30;

    private LocalDateTime dataAbertura;

    private LocalDateTime dataAceitacao;

    private LocalDateTime dataInicioDeslocamento;

    private LocalDateTime dataChegadaLocal;

    private LocalDateTime dataEncerramento;
}
