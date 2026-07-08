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

INSERT INTO operadores (nome, email, senha, telefone, ativo) VALUES
  ('Carlos Operador', 'operador@bat.com',
   '$2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.', '(34) 99999-0001', TRUE),
  ('Ana Operadora', 'ana@bat.com',
   '$2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.', '(34) 99999-0002', TRUE);

INSERT INTO tecnicos (nome, email, senha, especialidade, telefone, ativo) VALUES
  ('João Técnico', 'tecnico@bat.com',
   '$2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.', 'Mecânica', '(34) 98888-0001', TRUE),
  ('Marina Elétrica', 'marina@bat.com',
   '$2b$10$DGsR/fgDCjKIl8Gym1LL1OvX7BlAU9PdG2M1.Bp62qQ03by6nqoK.', 'Elétrica', '(34) 98888-0002', TRUE);

INSERT INTO setores (nome, descricao) VALUES
  ('Produção',       'Linha de produção principal'),
  ('Manutenção',     'Setor de manutenção industrial'),
  ('TI',             'Tecnologia da Informação'),
  ('Logística',      'Armazém e expedição');

INSERT INTO maquinas (codigo, nome, setor_id, status) VALUES
  ('MAQ-001', 'Prensa Hidráulica A', 1, 'ATIVA'),
  ('MAQ-002', 'Esteira Transportadora', 1, 'ATIVA'),
  ('MAQ-003', 'Compressor Central', 2, 'ATIVA'),
  ('MAQ-004', 'Servidor Rack 01', 3, 'ATIVA'),
  ('MAQ-005', 'Empilhadeira Elétrica', 4, 'MANUTENCAO');
