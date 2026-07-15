package com.fixon.projeto.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fixon.projeto.model.Setor;
import com.fixon.projeto.repository.SetorRepository;

@RestController
@RequestMapping("/api/setores")
public class SetorController {

    private final SetorRepository setorRepository;

    public SetorController(SetorRepository setorRepository) {
        this.setorRepository = setorRepository;
    }

    @GetMapping
    public List<Setor> listar() {
        return setorRepository.findAll();
    }
}
