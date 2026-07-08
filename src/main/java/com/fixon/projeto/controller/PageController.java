package com.fixon.projeto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping({ "/", "/login" })
    public String login() {
        return "login";
    }

    @GetMapping("/adm/dashboard")
    public String adminDashboard() {
        return "adm/dashbord.adm";

    }

    @GetMapping("/adm/chamados")
    public String adminChamados() {
        return "adm/bat-brasil-chamados";
    }

    @GetMapping("/adm/maquinas")
    public String adminMaquinas() {
        return "adm/maquinas.adm";
    }

    @GetMapping("/adm/usuarios")
    public String adminUsuarios() {
        return "adm/Usarios.adm";
    }

    @GetMapping("/adm/perfil")
    public String adminPerfil() {
        return "adm/bat-brasil-perfil";
    }

    @GetMapping("/adm/configuracoes")
    public String adminConfiguracoes() {
        return "adm/bat-brasil-configuracoes";
    }

    @GetMapping("/operador/dashboard")
    public String operadorDashboard() {
        return "operador/Dashbord-operador";
    }

    @GetMapping("/operador/novo-chamado")
    public String operadorNovoChamado() {
        return "operador/op.novo-chamado";
    }

    @GetMapping("/operador/meus-chamados")
    public String operadorMeusChamados() {
        return "operador/op.meus-chamados";
    }

    @GetMapping("/operador/historico")
    public String operadorHistorico() {
        return "operador/op.historico-operador";
    }

    @GetMapping("/operador/perfil")
    public String operadorPerfil() {
        return "operador/op.meu-perfil-operador";
    }

    @GetMapping("/operador/configuracoes")
    public String operadorConfiguracoes() {
        return "operador/op.configuracoes";
    }

    @GetMapping("/tecnico/dashboard")
    public String tecnicoDashboard() {
        return "tec/dashboard.tec";
    }

    @GetMapping("/tecnico/chamados-disponiveis")
    public String tecnicoChamadosDisponiveis() {
        return "tec/tec.Chdisponivel";
    }

    @GetMapping("/tecnico/historico")
    public String tecnicoHistorico() {
        return "tec/tec.historicAtende";
    }

    @GetMapping("/tecnico/perfil")
    public String tecnicoPerfil() {
        return "tec/tec.perfil";
    }

    @GetMapping("/tecnico/configuracoes")
    public String tecnicoConfiguracoes() {
        return "tec/tec.config";
    }
}
