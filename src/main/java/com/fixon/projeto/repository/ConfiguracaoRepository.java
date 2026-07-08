package com.fixon.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixon.projeto.model.Configuracao;

public interface ConfiguracaoRepository extends JpaRepository<Configuracao, String> {
}
