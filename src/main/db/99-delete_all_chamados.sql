-- =====================================================================
-- Remove todos os chamados registrados no banco de dados.
-- Execute em PostgreSQL com: psql -U <usuario> -d <database> -f src/main/db/delete_all_chamados.sql
-- =====================================================================

DELETE FROM observacoes;
DELETE FROM chamados;
