package com.fixon.projeto.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fixon.projeto.dto.UsuarioRequest;
import com.fixon.projeto.dto.UsuarioResponse;
import com.fixon.projeto.model.Administrador;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Tecnico;
import com.fixon.projeto.service.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping("/administradores")
    public List<UsuarioResponse> administradores() {
        return usuarioService.listarAdministradores().stream().map(UsuarioResponse::from).toList();
    }

    @GetMapping("/operadores")
    public List<UsuarioResponse> operadores() {
        return usuarioService.listarOperadores().stream().map(UsuarioResponse::from).toList();
    }

    @GetMapping("/tecnicos")
    public List<UsuarioResponse> tecnicos() {
        return usuarioService.listarTecnicos().stream().map(UsuarioResponse::from).toList();
    }

    @GetMapping
    public List<UsuarioResponse> listarTodos() {
        return usuarioService.listarUsuarios();
    }

    @PostMapping
    public UsuarioResponse criar(@Valid @RequestBody UsuarioRequest request) {
        Object usuario = usuarioService.criar(request);
        if (usuario instanceof Administrador admin) {
            return UsuarioResponse.from(admin);
        }
        if (usuario instanceof Operador operador) {
            return UsuarioResponse.from(operador);
        }
        return UsuarioResponse.from((Tecnico) usuario);
    }

    // Tratamento de erro centralizado em GlobalExceptionHandler (não duplicar
    // handlers aqui).
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        usuarioService.excluir(id);
        return ResponseEntity.noContent().build();
    }
}
