package com.fixon.projeto.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.fixon.projeto.Enums.TipoObservacao;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "observacoes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Observacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "chamado_id")
    private Chamado chamado;

    @ManyToOne
    @JoinColumn(name = "tecnico_id")
    private Tecnico tecnico;

    @Enumerated(EnumType.STRING)
    private TipoObservacao tipo;

    @Column(columnDefinition = "TEXT")
    private String observacao;

    @CreationTimestamp
    private LocalDateTime data;
}
