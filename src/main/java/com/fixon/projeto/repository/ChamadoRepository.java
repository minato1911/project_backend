package com.fixon.projeto.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixon.projeto.Enums.StatusChamado;
import com.fixon.projeto.model.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
    List<Chamado> findByStatus(StatusChamado status);

    List<Chamado> findByOperadorId(Long operadorId);

    List<Chamado> findByTecnicoId(Long tecnicoId);

    boolean existsByTecnicoIdAndStatusIn(Long tecnicoId, Collection<StatusChamado> status);

    boolean existsByProtocolo(String protocolo);
}
