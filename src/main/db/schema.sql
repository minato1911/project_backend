-- =====================================================================
--  BAT HELPDESK — Esquema do Banco de Dados (PostgreSQL)
--  Execução: psql -U postgres -d bat_helpdesk -f db/schema.sql
-- =====================================================================

-- Limpeza (ordem por dependência) ------------------------------------
DROP TABLE IF EXISTS observacoes      CASCADE;
DROP TABLE IF EXISTS chamados         CASCADE;
DROP TABLE IF EXISTS maquinas         CASCADE;
DROP TABLE IF EXISTS setores          CASCADE;
DROP TABLE IF EXISTS tecnicos         CASCADE;
DROP TABLE IF EXISTS operadores       CASCADE;
DROP TABLE IF EXISTS administradores  CASCADE;
DROP TABLE IF EXISTS configuracoes    CASCADE;

-- =====================================================================
--  USUÁRIOS
-- =====================================================================
CREATE TABLE administradores (
  id           SERIAL PRIMARY KEY,
  nome         VARCHAR(120) NOT NULL,
  email        VARCHAR(160) NOT NULL UNIQUE,
  nome_usuario VARCHAR(60) NOT NULL UNIQUE,
  senha        VARCHAR(255) NOT NULL,
  foto         VARCHAR(255),
  ativo        BOOLEAN NOT NULL DEFAULT TRUE,
  criado_em    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE operadores (
  id           SERIAL PRIMARY KEY,
  nome         VARCHAR(120) NOT NULL,
  email        VARCHAR(160) NOT NULL UNIQUE,
  nome_usuario VARCHAR(60) NOT NULL UNIQUE,
  senha        VARCHAR(255) NOT NULL,
  telefone     VARCHAR(40),
  foto         VARCHAR(255),
  ativo        BOOLEAN NOT NULL DEFAULT TRUE,
  criado_em    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE tecnicos (
  id            SERIAL PRIMARY KEY,
  nome          VARCHAR(120) NOT NULL,
  email         VARCHAR(160) NOT NULL UNIQUE,
  nome_usuario  VARCHAR(60) NOT NULL UNIQUE,
  senha         VARCHAR(255) NOT NULL,
  especialidade VARCHAR(80),
  telefone      VARCHAR(40),
  foto          VARCHAR(255),
  ativo         BOOLEAN NOT NULL DEFAULT TRUE,
  criado_em     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================================================================
--  CADASTROS BASE
-- =====================================================================
CREATE TABLE setores (
  id        SERIAL PRIMARY KEY,
  nome      VARCHAR(120) NOT NULL,
  descricao TEXT
);

CREATE TABLE maquinas (
  id        SERIAL PRIMARY KEY,
  codigo    VARCHAR(60) NOT NULL UNIQUE,
  nome      VARCHAR(120) NOT NULL,
  setor_id  INTEGER REFERENCES setores(id) ON DELETE SET NULL,
  status    VARCHAR(20) NOT NULL DEFAULT 'ATIVA'
            CHECK (status IN ('ATIVA','INATIVA','MANUTENCAO'))
);

-- =====================================================================
--  CHAMADOS
--  Status: aberto | assumido | deslocamento | no_local | atendimento | finalizado
--   aberto       -> criado pelo operador, sem técnico
--   assumido     -> técnico aceitou, ainda não saiu (alarme já parou)
--   deslocamento -> técnico a caminho (cronômetro de deslocamento ativo)
--   no_local     -> técnico chegou (inicia contagem regressiva do SLA)
--   atendimento  -> executando o serviço (mesma janela de SLA)
--   finalizado   -> encerrado
-- =====================================================================
CREATE TABLE chamados (
  id                      SERIAL PRIMARY KEY,
  protocolo               VARCHAR(30) NOT NULL UNIQUE,
  operador_id             INTEGER NOT NULL REFERENCES operadores(id) ON DELETE CASCADE,
  tecnico_id              INTEGER REFERENCES tecnicos(id) ON DELETE SET NULL,
  setor                   VARCHAR(120),
  maquina                 VARCHAR(120),
  categoria               VARCHAR(40) NOT NULL,
  prioridade              VARCHAR(10) NOT NULL CHECK (prioridade IN ('ALTA','MEDIA','BAIXA')),
  descricao               TEXT NOT NULL,
  imagem                  VARCHAR(255),
  status                  VARCHAR(20) NOT NULL DEFAULT 'ABERTO'
                          CHECK (status IN ('ABERTO','ASSUMIDO','DESLOCAMENTO','NO_LOCAL','ATENDIMENTO','FINALIZADO','CANCELADO')),
  tempo_deslocamento      INTEGER NOT NULL DEFAULT 0,  -- segundos
  tempo_atendimento       INTEGER NOT NULL DEFAULT 0,  -- segundos
  tempo_excedido          INTEGER NOT NULL DEFAULT 0,  -- segundos
  sla_minutos             INTEGER NOT NULL DEFAULT 30,
  data_abertura           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  data_aceitacao          TIMESTAMPTZ,
  data_inicio_deslocamento TIMESTAMPTZ,
  data_chegada_local      TIMESTAMPTZ,
  data_encerramento       TIMESTAMPTZ
);

-- REGRA DE NEGÓCIO: 1 chamado ativo por técnico (camada de banco) ------
-- Um técnico só pode estar vinculado a UM chamado não finalizado.
CREATE UNIQUE INDEX idx_tecnico_chamado_ativo
  ON chamados (tecnico_id)
  WHERE status IN ('ASSUMIDO','DESLOCAMENTO','NO_LOCAL','ATENDIMENTO')
        AND tecnico_id IS NOT NULL;

CREATE INDEX idx_chamados_status     ON chamados (status);
CREATE INDEX idx_chamados_operador   ON chamados (operador_id);
CREATE INDEX idx_chamados_tecnico    ON chamados (tecnico_id);
CREATE INDEX idx_chamados_abertura   ON chamados (data_abertura DESC);

-- =====================================================================
--  OBSERVAÇÕES / ATIVIDADES DO ATENDIMENTO
-- =====================================================================
CREATE TABLE observacoes (
  id         SERIAL PRIMARY KEY,
  chamado_id INTEGER NOT NULL REFERENCES chamados(id) ON DELETE CASCADE,
  tecnico_id INTEGER REFERENCES tecnicos(id) ON DELETE SET NULL,
  tipo       VARCHAR(20) NOT NULL DEFAULT 'OBSERVACAO'
             CHECK (tipo IN ('OBSERVACAO','PECA','ATIVIDADE','FOTO')),
  observacao TEXT NOT NULL,
  data       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_observacoes_chamado ON observacoes (chamado_id);

-- =====================================================================
--  CONFIGURAÇÕES DO SISTEMA (chave/valor)
-- =====================================================================
CREATE TABLE configuracoes (
  chave VARCHAR(60) PRIMARY KEY,
  valor TEXT
);

INSERT INTO configuracoes (chave, valor) VALUES
  ('sla_minutos', '30'),
  ('notificacoes_som', 'true'),
  ('idioma_padrao', 'pt'),
  ('logo', '');
