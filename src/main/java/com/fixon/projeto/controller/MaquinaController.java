package com.fixon.projeto.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fixon.projeto.dto.MaquinaRequest;
import com.fixon.projeto.model.Maquina;
import com.fixon.projeto.service.MaquinaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/maquinas")
public class MaquinaController {

    private final MaquinaService maquinaService;

    public MaquinaController(MaquinaService maquinaService) {
        this.maquinaService = maquinaService;
    }

    @GetMapping
    public List<Maquina> listar() {
        return maquinaService.listar();
    }

    @PostMapping
    public Maquina salvar(@Valid @RequestBody MaquinaRequest request) {
        return maquinaService.salvar(request);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id) {
        maquinaService.remover(id);
    }
    // Tratamento de erro centralizado em GlobalExceptionHandler (não duplicar handlers aqui).
}
