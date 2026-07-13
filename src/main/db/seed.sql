-- =====================================================================
--  BAT HELPDESK — Dados Iniciais (Seed)
--  Execução: psql -U postgres -d bat_helpdesk -f db/seed.sql
--
--  SENHA PADRÃO de todos os usuários abaixo: senha123
--  (hash bcrypt já gerado — gerado por scripts/setup-db.js também)
-- =====================================================================

-- Hash bcrypt de "senha123"
-- $2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.

INSERT INTO administradores (nome, email, senha, ativo) VALUES
  ('Administrador', 'admin@bat.com',
   '$2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.', TRUE);

