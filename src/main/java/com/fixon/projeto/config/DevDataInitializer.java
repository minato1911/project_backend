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

            if (operadores.count() == 0) {
                Operador operador = new Operador();
                operador.setNome("Carlos Operador");
                operador.setEmail("operador@bat.com");
                operador.setSenha(senha);
                operador.setNomeUsuario("operador");
                operador.setTelefone("(34) 99999-0001");
                operadores.save(operador);
            }

            if (tecnicos.count() == 0) {
                Tecnico tecnico = new Tecnico();
                tecnico.setNome("Joao Tecnico");
                tecnico.setEmail("tecnico@bat.com");
                tecnico.setSenha(senha);
                tecnico.setNomeUsuario("tecnico");
                tecnico.setEspecialidade("Mecanica");
                tecnico.setTelefone("(34) 98888-0001");
                tecnicos.save(tecnico);
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
