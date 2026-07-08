# FEEDBACK DO INSTRUTOR & GUIA DE FINALIZAÇÃO DO PROJETO
## Sistema de Gestão de Chamados de Manutenção Industrial & Dashboard Operacional (BAT-1)

---

**De:** Lucas Lopes  
**Data:** Julho de 2026  
**Status Atual:** Backend sólido e avançado | Frontend funcional pronto para inovações | Ajustes de Containerização pendentes

---

Olá! Parabéns pelo excelente trabalho desenvolvido até aqui no projeto **BAT-1 (Sistema de Gestão de Chamados de Manutenção Industrial & Dashboard Operacional)**.

Fiz uma análise técnica detalhada em todo o seu repositório — desde o modelo de domínio JPA, serviços e APIs REST no backend até os templates Thymeleaf e configurações de contêiner. O núcleo técnico do backend está **muito bem estruturado**, respeitando todas as regras industriais complexas (cálculo de MTBF, cronômetro líquido de reparo com desconto de pausas, monitoramento em *background* de chamados com mais de 30 minutos via `@Scheduled`, autenticação baseada em roles com Spring Security, exportação de relatórios em Excel via Apache POI e suporte a eventos em tempo real com SSE).

Para que você consiga **finalizar o projeto com nota máxima** e entregá-lo pronto para rodar no servidor em produção, preparei este documento contendo o que precisa ser **organizado, polido e implementado na reta final**, com destaque especial para a **inovação no frontend** e a **padronização do Dockerfile**.

---

## 1. Diagnóstico Geral do que Já Está Concluído

| Módulo / Requisito | Status Atual | Observações Técnicas do Instrutor |
| :--- | :---: | :--- |
| **Modelagem de Entidades (JPA)** | ✅ **Concluído** | Entidades `Setor`, `Maquina`, `Usuario`, `Chamado` e `Notificacao` completas e com Enums adequados. |
| **Regras de Negócio & Cronômetro** | ✅ **Concluído** | `ChamadoService` implementa corretamente cálculo de tempo líquido (`inicioPausa`, `tempoReparoAcumulado`) e SLA. |
| **KPIs e Métricas Industriais** | ✅ **Concluído** | Consultas agregadas e Projections calculando MTBF por Setor/Máquina e distribuição por motivo de falha. |
| **Alerta Automático de Gargalo** | ✅ **Concluído** | `AlertaService` e `@Scheduled` funcionais para notificar chamados abertos/em andamento há >30 min. |
| **Segurança e Papéis (Roles)** | ✅ **Concluído** | Spring Security configurado com perfis (`ADMIN`, `OPERADOR`, `TECNICO`, `LIDER`, `ESPECIALISTA`, `VISUALIZADOR`). |
| **Relatórios Excel (`.xlsx`)** | ✅ **Concluído** | `RelatorioController` integrado com **Apache POI** para exportação formatada. |
| **Seed de Dados Idempotente** | ✅ **Concluído** | `data.sql` utilizando `MERGE INTO` para evitar duplicidades ao reiniciar o banco H2. |
| **Limpeza e Organização de Código** | ⚠️ **Pendente** | Presença de arquivos residuais de teste e inconsistência nas configurações de porta. |
| **Diferenciais Visuais de Frontend** | ⚠️ **Pendente** | Layout funcional via Thymeleaf, porém carece de inovações visuais (Kanban, Mapa de Fábrica, UI Premium). |
| **Containerização (Docker/Deploy)** | ⚠️ **Ajustar** | `Dockerfile` e `docker-compose.yml` criados, mas necessitam alinhamento de portas e permissões de volume. |

---

## 2. O Que Falta Organizar e Limpar no Repositório (Débito Técnico)

Antes de focar nas novas features visuais, faça uma **limpeza técnica** para deixar seu projeto profissional:

1. **Remover Arquivos de Teste / Residuais:**
   * O arquivo `src/main/resources/templates/hello.html` foi usado para testes iniciais do Thymeleaf e não faz parte da aplicação final. **Pode removê-lo.**
   * Verifique a duplicidade de layouts: existe `src/main/resources/templates/layout.html` e `src/main/resources/templates/fragments/layout.html`. Mantenha apenas o layout principal dentro de `fragments/layout.html` e remova o arquivo solto não utilizado para evitar confusões de manutenção.
   * Em `src/main/resources/static/css/`, remova folhas de estilo antigas ou não referenciadas se tudo estiver centralizado em `dashboard.css`.

2. **Harmonizar Conflito de Portas HTTP:**
   * Atualmente, no arquivo `src/main/resources/application.properties`, a aplicação está configurada para rodar em `server.port=8088`.
   * Porém, no `Dockerfile` está `EXPOSE 8080` e `ENV SERVER_PORT=8080`, e no `docker-compose.yml` o mapeamento está `"8086:8080"`.
   * **Ação recomendada:** Em `application.properties`, defina `server.port=${SERVER_PORT:8080}` (padrão 8080, permitindo sobrescrita por variável de ambiente do Docker). Assim, o contêiner rodará consistentemente na porta 8080 interna e o professor poderá mapear para qualquer porta externa no servidor sem falhas.

---

## 3. O Que Falta Implementar e Inovar no Frontend (Liberdade Criativa)

Como especificado no escopo do projeto, você tem **total liberdade** para inovar na interface gráfica. O backend está pronto para sustentar ideias avançadas de UI/UX. Abaixo estão as implementações que recomendo para impressionar na apresentação final:

### 3.1. Quadro Kanban Interativo de Chamados (`chamado-lista.html`)
* Além da exibição em tabela tradicional, crie um **modo de visualização Kanban** (com botões alternadores no topo: *Tabela* | *Kanban*).
* Organize os cards dos chamados em 5 colunas por status:
  * **ABERTO** (borda azul/ícone de alerta)
  * **EM ANDAMENTO** (borda amarela/ícone de engrenagem)
  * **PAUSADO** (borda laranja/ícone de pausa)
  * **ESCALADO** (borda roxa/ícone de especialista)
  * **CONCLUIDO** (borda verde/ícone de check)
* Em cada card do Kanban, exiba: ID do chamado, máquina, tempo decorrido, badge de prioridade/motivo e um botão rápido de ação.

### 3.2. Mapa / Planta Baixa Visual do Chão de Fábrica (`maquinas.html`)
* Na tela de gestão de máquinas, transforme a listagem simples em uma **Planta Operacional Visual por Setor**.
* Exiba cada máquina como um painel ou card industrial contendo um **indicador de status em tempo real (LED luminoso)**:
  * 🟢 **OPERANDO:** Operação normal.
  * 🟡 **EM MANUTENÇÃO / ALERTA:** Equipamento em reparo ou com chamado aberto.
  * 🔴 **PARADA:** Equipamento inoperante com chamado crítico.
* Exiba o MTBF individual de cada máquina direto no card visual.

### 3.3. Cronômetro Dinâmico no Painel de Atendimento do Técnico (`chamado-detalhe.html`)
* Quando o chamado estiver `EM_ANDAMENTO`, implemente um script JavaScript simples no navegador (`setInterval`) que atualize o contador do tempo de reparo em tempo real (segundo a segundo), sem precisar recarregar a página.
* Se o tempo exceder **30 minutos (1800 segundos)**, altere a cor do cronômetro para **vermelho intermitente**, sinalizando o alerta de gargalo acionado pelo backend.

### 3.4. Refinamento de Design (Tema Dark Industrial / Glassmorphism)
* Capriche na estética visual da aplicação: utilize fontes tipográficas modernas (ex.: *Inter* ou *Outfit*), contrastes nítidos e transições suaves (*hover effects*).
* Crie destaques visuais especiais para o **Pódio (Top 3)** na tela de Ranking de Técnicos (`ranking.html`) com ícones para 1º, 2º e 3º lugares.

---

## 4. Guia Completo do Dockerfile & Docker Compose para Envio ao Professor

O professor irá colocar o seu projeto no servidor da instituição para rodar em produção e ficar disponível na web. Para que o deploy seja **100% confiável, leve e sem erros de permissão no banco H2 ou nos arquivos de upload**, siga a estrutura revisada abaixo:

### 4.1. `Dockerfile` Recomendado (Multi-stage Build Otimizado)

Substitua o conteúdo atual do seu `Dockerfile` pela versão otimizada abaixo. Ela garante o timezone correto do Brasil (`America/Sao_Paulo`), compila a aplicação sem depender de dependências pré-instaladas e cria os diretórios com permissões adequadas:

```dockerfile
# =====================================================================
# ETAPA 1: BUILD DA APLICAÇÃO (Maven + OpenJDK 17)
# =====================================================================
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copia apenas o pom.xml primeiro para aproveitar cache do Docker em dependências
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copia o código-fonte e realiza o build do arquivo JAR
COPY src ./src
RUN mvn package -DskipTests -B

# =====================================================================
# ETAPA 2: EXECUÇÃO LEVE EM PRODUÇÃO (JRE 17 Alpine)
# =====================================================================
FROM eclipse-temurin:17-jre-alpine

# Configuração de Fuso Horário Industrial (América/São Paulo)
RUN apk add --no-cache tzdata curl
ENV TZ=America/Sao_Paulo

WORKDIR /app

# Criação de diretórios para persistência do banco H2 e fotos anexadas
RUN mkdir -p /app/data /app/uploads && \
    chmod -R 777 /app/data /app/uploads

# Copia o artefato JAR gerado na etapa de build
COPY --from=build /app/target/*.jar /app/app.jar

# Configurações padrão de ambiente
ENV SERVER_PORT=8080
ENV SPRING_APPLICATION_JSON='{"server.port":8080}'

EXPOSE 8080

# Healthcheck para monitoramento no servidor do professor
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/dashboard || exit 1

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```

### 4.2. `docker-compose.yml` para Teste e Produção no Servidor

Para que o professor suba o contêiner e mantenha os dados salvos mesmo caso o contêiner seja reiniciado, certifique-se de que o seu `docker-compose.yml` esteja estruturado da seguinte forma:

```yaml
services:
  bat-dashboard:
    build:
      context: .
      dockerfile: Dockerfile
    image: bat-dashboard:latest
    container_name: bat-dashboard-app
    restart: unless-stopped
    ports:
      # O professor poderá alterar a porta à esquerda conforme a necessidade do servidor (ex.: 80:8080)
      - "8080:8080"
    environment:
      - TZ=America/Sao_Paulo
      - SERVER_PORT=8080
    volumes:
      # Persiste os arquivos do banco de dados H2
      - bat_data:/app/data
      # Persiste os anexos/fotos de evidência dos chamados
      - bat_uploads:/app/uploads

volumes:
  bat_data:
  bat_uploads:
```

### 4.3. Como Testar o Contêiner Localmente Antes de Enviar

Antes de empacotar e enviar o projeto, abra o terminal na pasta raiz e execute o teste de validação:

1. **Construir e subir o contêiner:**
   ```bash
   docker compose up --build -d
   ```
2. **Verificar os logs de inicialização:**
   ```bash
   docker compose logs -f
   ```
   *Certifique-se de que a mensagem `Started DashboardApplication in ... seconds` apareça no log.*
3. **Acessar no navegador:**
   * Abra `http://localhost:8080/dashboard`.
   * Faça login e verifique se o seed inicial (`data.sql`) carregou todos os setores, máquinas, usuários e chamados de demonstração.

---

## 5. Checklist Final do Aluno para a Entrega (TODO)

Use esta lista como seu guia final de verificação antes de enviar o projeto ao professor:

- [ ] **Limpeza de Código:**
  - [ ] Remover arquivos HTML de teste (`hello.html`) e layouts duplicados não utilizados.
  - [ ] Alinhar `application.properties` para usar a porta dinâmica/8080 compatível com o Docker.
- [ ] **Evolução Visual do Frontend:**
  - [ ] Adicionar alternador visual de **Kanban** na listagem de chamados (`chamado-lista.html`).
  - [ ] Enriquecer a visualização de máquinas com indicadores de **Status Operacional / LEDs** (`maquinas.html`).
  - [ ] Adicionar atualização contínua do cronômetro via JavaScript na tela do técnico (`chamado-detalhe.html`).
  - [ ] Revisar a responsividade e o acabamento visual do Dashboard principal.
- [ ] **Validação Docker & Entrega:**
  - [ ] Atualizar o `Dockerfile` com o multi-stage build otimizado e healthcheck.
  - [ ] Validar o build local executando `docker compose up --build`.
  - [ ] Testar a exportação do relatório Excel (`.xlsx`) de dentro do contêiner rodando.

---

**Sucesso na reta final do projeto!** Você já construiu uma base técnica excelente. Com esses refinamentos no visual e a containerização bem calibrada, seu projeto terá nível profissional de produção. Bom trabalho!
