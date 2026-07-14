-- =====================================================================
-- Limpa todos os dados do banco, preservando apenas o administrador de login.
-- Execute em PostgreSQL com: psql -U <usuario> -d <database> -f src/main/db/clean_except_tecnico.sql
-- =====================================================================

-- Remover atividades relacionadas a chamados
DELETE FROM observacoes;

-- Remover chamados
DELETE FROM chamados;

-- Remover máquinas e setores
DELETE FROM maquinas;
DELETE FROM setores;

-- Limpar usuários administrativos e operadores, mantendo apenas o admin padrão
DELETE FROM administradores
WHERE nomeUsuario IS NULL
   OR nomeUsuario <> 'admin';
DELETE FROM operadores;

-- Remover configurações do sistema
DELETE FROM configuracoes;

-- Remover todos os técnicos
DELETE FROM tecnicos;

-- Opcional: ajustar sequência de ids se desejar reiniciar os contadores
SELECT setval(pg_get_serial_sequence('administradores', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('operadores', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('tecnicos', 'id'), (SELECT COALESCE(MAX(id), 1) FROM tecnicos), true);
SELECT setval(pg_get_serial_sequence('setores', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('maquinas', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('chamados', 'id'), 1, false);
SELECT setval(pg_get_serial_sequence('observacoes', 'id'), 1, false);
