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
                administradores.save(new Administrador(null, "Administrador", "admin@bat.com", senha, null, true, null));
            }

            if (operadores.count() == 0) {
                operadores.save(new Operador(null, "Carlos Operador", "operador@bat.com", senha, "(34) 99999-0001", null, true, null));
            }

            if (tecnicos.count() == 0) {
                tecnicos.save(new Tecnico(null, "Joao Tecnico", "tecnico@bat.com", senha, "Mecanica", "(34) 98888-0001", null, true, null));
            }

            if (setores.count() == 0) {
                Setor producao = setores.save(new Setor(null, "Producao", "Linha de producao principal"));
                Setor manutencao = setores.save(new Setor(null, "Manutencao", "Setor de manutencao industrial"));
                setores.save(new Setor(null, "TI", "Tecnologia da Informacao"));

                maquinas.save(new Maquina(null, "MAQ-001", "Prensa Hidraulica A", producao, StatusMaquina.ATIVA));
                maquinas.save(new Maquina(null, "MAQ-002", "Esteira Transportadora", producao, StatusMaquina.ATIVA));
                maquinas.save(new Maquina(null, "MAQ-003", "Compressor Central", manutencao, StatusMaquina.ATIVA));
            }
        };
    }
}
