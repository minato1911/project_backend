package com.fixon.projeto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixon.projeto.model.Observacao;

public interface ObservacaoRepository extends JpaRepository<Observacao, Long> {
    List<Observacao> findByChamadoIdOrderByDataDesc(Long chamadoId);
}
