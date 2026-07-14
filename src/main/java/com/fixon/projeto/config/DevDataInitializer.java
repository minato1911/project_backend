package com.fixon.projeto.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fixon.projeto.Enums.StatusMaquina;
import com.fixon.projeto.model.Administrador;
import com.fixon.projeto.model.Maquina;
import com.fixon.projeto.model.Operador;
import com.fixon.projeto.model.Setor;
import com.fixon.projeto.model.Tecnico;
import com.fixon.projeto.repository.AdministradorRepository;
import com.fixon.projeto.repository.MaquinaRepository;
import com.fixon.projeto.repository.OperadorRepository;
import com.fixon.projeto.repository.SetorRepository;
import com.fixon.projeto.repository.TecnicoRepository;

@Configuration
@Profile("dev")
public class DevDataInitializer {

    @Bean
    CommandLineRunner seedDevData(
            AdministradorRepository administradores,
            OperadorRepository operadores,
            TecnicoRepository tecnicos,
            SetorRepository setores,
            MaquinaRepository maquinas) {
        return args -> {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String senha = encoder.encode("senha123");

            if (administradores.count() == 0) {
                Administrador admin = new Administrador();
                admin.setNome("Administrador");
                admin.setEmail("admin@bat.com");
                admin.setSenha(senha);
                admin.setNomeUsuario("admin");
                administradores.save(admin);
            }
        };
    }
}
