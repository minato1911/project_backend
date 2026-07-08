package com.fixon.projeto.Enums;

/**
 * Enumeração com os papéis de usuário do sistema.
 */
public enum Role {
    ADMIN("Administrador"),
    OPERADOR("Operador"),
    TECNICO("Técnico");

    private final String descricao;

    Role(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    /**
     * Retorna o Role a partir de uma string.
     *
     * @param valor String com o nome do role
     * @return Role encontrado ou null se não existir
     */
    public static Role fromString(String valor) {
        try {
            return Role.valueOf(valor.toUpperCase());
        } catch (IllegalArgumentException e) {
            return null;
        }
    }
}
