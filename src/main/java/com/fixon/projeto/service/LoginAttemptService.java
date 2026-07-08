package com.fixon.projeto.service;

import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

/**
 * Controle simples de tentativas de login (rate limiting) em memória.
 *
 * Não substitui uma solução robusta (ex: Bucket4j + Redis) em um ambiente
 * com múltiplas instâncias da aplicação, mas já evita ataques de força
 * bruta básicos em um cenário de instância única, como o deste TCC.
 */
@Service
public class LoginAttemptService {

    private static final int MAX_TENTATIVAS = 5;
    private static final Duration JANELA_BLOQUEIO = Duration.ofMinutes(15);

    private record Tentativas(int quantidade, Instant primeiraTentativa) {
    }

    private final ConcurrentHashMap<String, Tentativas> tentativasPorEmail = new ConcurrentHashMap<>();

    /**
     * Verifica se o e-mail está temporariamente bloqueado por excesso de tentativas.
     * Deve ser chamado ANTES de tentar autenticar.
     */
    public void verificarBloqueio(String email) {
        Tentativas atual = tentativasPorEmail.get(chave(email));
        if (atual == null) {
            return;
        }
        boolean janelaExpirou = Duration.between(atual.primeiraTentativa(), Instant.now())
                .compareTo(JANELA_BLOQUEIO) > 0;
        if (janelaExpirou) {
            tentativasPorEmail.remove(chave(email));
            return;
        }
        if (atual.quantidade() >= MAX_TENTATIVAS) {
            throw new IllegalStateException(
                    "Muitas tentativas de login. Tente novamente em alguns minutos.");
        }
    }

    /** Chamar quando o login falhar, para contabilizar a tentativa. */
    public void registrarFalha(String email) {
        tentativasPorEmail.compute(chave(email), (chaveEmail, existente) -> {
            if (existente == null) {
                return new Tentativas(1, Instant.now());
            }
            return new Tentativas(existente.quantidade() + 1, existente.primeiraTentativa());
        });
    }

    /** Chamar quando o login for bem-sucedido, para liberar o contador. */
    public void registrarSucesso(String email) {
        tentativasPorEmail.remove(chave(email));
    }

    private String chave(String email) {
        return email == null ? "" : email.trim().toLowerCase();
    }
}
