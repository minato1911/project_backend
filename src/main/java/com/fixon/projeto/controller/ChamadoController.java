package com.fixon.projeto.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fixon.projeto.dto.ChamadoRequest;
import com.fixon.projeto.dto.ChamadoResponse;
import com.fixon.projeto.dto.ObservacaoRequest;
import com.fixon.projeto.dto.ObservacaoResponse;
import com.fixon.projeto.service.ChamadoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/chamados")
public class ChamadoController {

    private final ChamadoService chamadoService;

    public ChamadoController(ChamadoService chamadoService) {
        this.chamadoService = chamadoService;
    }

    @GetMapping
    public Page<ChamadoResponse> listar(Pageable pageable) {
        return chamadoService.listarTodos(pageable);
    }

    @GetMapping("/disponiveis")
    public List<ChamadoResponse> disponiveis() {
        return chamadoService.listarDisponiveis();
    }

    @GetMapping("/{id}")
    public ChamadoResponse buscar(@PathVariable Long id) {
        return chamadoService.buscarResponse(id);
    }

    @PostMapping
    public ChamadoResponse criar(@Valid @RequestBody ChamadoRequest request) {
        return chamadoService.criar(request);
    }

    @PostMapping("/{id}/assumir")
    public ChamadoResponse assumir(@PathVariable Long id, @RequestParam Long tecnicoId) {
        return chamadoService.assumir(id, tecnicoId);
    }

    @PostMapping("/{id}/deslocamento")
    public ChamadoResponse iniciarDeslocamento(@PathVariable Long id, @RequestParam Long tecnicoId) {
        return chamadoService.iniciarDeslocamento(id, tecnicoId);
    }

    @PostMapping("/{id}/chegada")
    public ChamadoResponse chegarLocal(@PathVariable Long id, @RequestParam Long tecnicoId) {
        return chamadoService.chegarLocal(id, tecnicoId);
    }

    @PostMapping("/{id}/atendimento")
    public ChamadoResponse iniciarAtendimento(@PathVariable Long id, @RequestParam Long tecnicoId) {
        return chamadoService.iniciarAtendimento(id, tecnicoId);
    }

    @PostMapping("/{id}/finalizar")
    public ChamadoResponse finalizar(@PathVariable Long id, @RequestParam Long tecnicoId) {
        return chamadoService.finalizar(id, tecnicoId);
    }

    @GetMapping("/{id}/observacoes")
    public List<ObservacaoResponse> observacoes(@PathVariable Long id) {
        return chamadoService.listarObservacoes(id);
    }

    @PostMapping("/{id}/observacoes")
    public ObservacaoResponse adicionarObservacao(@PathVariable Long id,
            @Valid @RequestBody ObservacaoRequest request) {
        return chamadoService.adicionarObservacao(id, request);
    }
    // Tratamento de erro centralizado em GlobalExceptionHandler (não duplicar handlers aqui).
}
