package com.fixon.projeto.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixon.projeto.model.Maquina;

public interface MaquinaRepository extends JpaRepository<Maquina, Long> {
    Optional<Maquina> findByCodigo(String codigo);
}
