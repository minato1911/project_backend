package com.fixon.projeto.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixon.projeto.model.Operador;

public interface OperadorRepository extends JpaRepository<Operador, Long> {
    Optional<Operador> findByEmail(String email);

    Optional<Operador> findByNomeUsuarioIgnoreCase(String nomeUsuario);
}
