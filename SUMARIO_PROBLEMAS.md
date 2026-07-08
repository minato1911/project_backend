# 📊 SUMÁRIO DE PROBLEMAS POR CATEGORIA

## 🔴 CRÍTICOS (5)

| # | Arquivo | Problema | Linha | Ação |
|----|---------|----------|-------|------|
| 1 | ChamadoService.java | Método exigirStatus() incompleto | 215 | Adicionar `}` |
| 2 | ChamadoService.java | Método isBlank() não existe | 210 | Criar método |
| 3 | dashbord.adm.html | `</head>` duplicado | 16 | Remover tag |
| 4 | WebConfig.java | CORS não configurado | - | Implementar |
| 5 | AuthInterceptor.java | Sem proteção CSRF | - | Implementar |

---

## 🟠 HIGH SEVERITY (12)

| # | Arquivo | Problema | Severidade |
|----|---------|----------|-----------|
| 6 | Controllers | Sem tratamento global de exceções | Duplicação |
| 7 | AuthService.java | Senhas não validadas após hash | Segurança |
| 8 | DTOs | Falta validação Jakarta Validation | Dados |
| 9 | tec/deshbord.tec.html | Typo no nome do arquivo | Nomeação |
| 10 | dashbord.adm.html | Tag HTML em uppercase | Padrão |
| 11 | WebConfig.java | Sem proteção CSRF | Segurança |
| 12 | MaquinaService.java | remover() sem validação | Lógica |
| 13 | MaquinaService.java | remover() sem @Transactional | Transação |
| 14 | PageController.java | Rota duplicada /tecnico/chamados-disponiveis | Conflito |
| 15 | AuthInterceptor.java | Erro não é JSON estruturado | API |
| 16 | ChamadoService.java | Validação de operador incompleta | Lógica |
| 17 | ChamadoController.java | Sem paginação em listagens | Performance |

---

## 🟡 MEDIUM SEVERITY (18)

| # | Categoria | Problema | Arquivos |
|----|----------|----------|----------|
| 18 | Código | Imports não utilizados | Múltiplos |
| 19 | Código | Método isBlank() duplicado em 3 services | 3 files |
| 20 | Código | Falta de logging | Todos services |
| 21 | HTML | Tag script não bem estruturada | adm/* |
| 22 | HTML | Falta Meta charset em alguns HTMLs | Alguns |
| 23 | JavaScript | Funções globais sem namespace | 20 arquivos JS |
| 24 | CSS | Nomes inconsistentes (uppercase/lowercase) | Múltiplos |
| 25 | DTO | AuthUser sem método hasRole() | AuthUser.java |
| 26 | Código | Sem enum de Roles | Projeto |
| 27 | SQL | Possível SQL injection em queries customizadas | Repositories |
| 28 | Database | Sem constraint unique em emails | Todos models |
| 29 | API | Sem versionamento (/api/ em vez de /api/v1/) | Controllers |
| 30 | Config | DataInitializer sem @Profile("dev") | DevDataInitializer.java |
| 31 | Docs | README ou documentação faltando | Projeto |
| 32 | Upload | Sem tratamento seguro de upload de arquivo | Projeto |
| 33 | Security | Sem rate limiting no login | AuthController.java |
| 34 | Testing | Testes de segurança incompletos | Testes |

---

## 🟢 LOW SEVERITY (14)

| # | Tipo | Problema |
|----|------|----------|
| 35 | Acentuação | Mensagens sem acento: "nao" em vez de "não" |
| 36 | i18n | Mensagens backend em português hard-coded |
| 37 | Padrão | Nomes variáveis mistos (português/inglês) |
| 38 | Docs | Falta JavaDoc em métodos públicos |
| 39 | Docs | TODO.md não atualizado |
| 40 | Nomes | Typo: op.meus-chmados.js deveria ser ...chamados.js |
| 41 | CSS | Colors hard-coded em charts, ignora tema |
| 42 | Tipo | Sem validação de instanceof antes de cast |
| 43 | Timezone | LocalDateTime sem specification de timezone |
| 44 | Validação | Sem @Size em campos string |
| 45 | Monitoring | Sem /health ou actuator endpoint |
| 46 | Version | Sem /api/version endpoint |
| 47 | DTO | MaquinaRequest sem validadores |
| 48 | Transação | Sem documentação de rollback policy |

---

## 📁 ARQUIVOS COM MAIS PROBLEMAS

| Arquivo | Críticos | High | Medium | Low | Total |
|---------|----------|------|--------|-----|-------|
| ChamadoService.java | 2 | 2 | 1 | 0 | **5** |
| dashbord.adm.html | 1 | 1 | 1 | 0 | **3** |
| WebConfig.java | 1 | 2 | 0 | 0 | **3** |
| PageController.java | 0 | 1 | 0 | 0 | **1** |
| DTOs (múltiplos) | 0 | 1 | 2 | 1 | **4** |
| Controllers | 0 | 1 | 1 | 0 | **2** |
| Múltiplos JS | 0 | 0 | 1 | 6 | **7** |
| Múltiplos CSS | 0 | 1 | 1 | 1 | **3** |
| Models | 0 | 0 | 1 | 1 | **2** |

---

## 📈 DISTRIBUIÇÃO POR TIPO

```
Segurança:        ████████░░ 18 problemas
Performance:      ███░░░░░░░  3 problemas
Código Limpo:     ██████░░░░ 12 problemas
Padrões:          ███████░░░ 14 problemas
Documentação:     ████░░░░░░  8 problemas
```

---

## 🔄 FLUXO DE CORREÇÃO RECOMENDADO

### Fase 1: IMEDIATO (1 hora)
```
[1] ChamadoService.exigirStatus() - Correção de sintaxe
[2] ChamadoService.isBlank() - Implementar método
[3] dashbord.adm.html - Remover tag duplicada
[4] WebConfig - Configurar CORS
```

**Resultado:** ✓ Projeto compila e executa

### Fase 2: HOJE (3 horas)
```
[5] AuthInterceptor - CSRF Protection
[6] DTOs - Adicionar validação Jakarta
[7] Rotas duplicadas - Renomear
[8] Tratamento exceções global - @ControllerAdvice
```

**Resultado:** ✓ Segurança básica implementada

### Fase 3: ESTA SEMANA (8 horas)
```
[9-15] Refatoração: Limpar código duplicado
[16-20] Adicionar testes de segurança
[21-25] Documentação API (Swagger)
[26-30] Setup logging centralizado
```

**Resultado:** ✓ Código mantível e bem documentado

### Fase 4: ESTE MÊS (20 horas)
```
[31-40] Implementar Spring Security completo
[41-45] Frontend: Migrar para TypeScript/React
[46-49] DevOps: Docker, CI/CD
[50] Audit de segurança externo
```

**Resultado:** ✓ Pronto para produção

---

## 🎯 MATRIZ DE IMPACTO vs ESFORÇO

```
QUADRANTE 1: FAZER PRIMEIRO (Alto impacto, Baixo esforço)
├─ Corrigir ChamadoService (2 min)
├─ Remover </head> duplicado (1 min)
├─ Configurar CORS (10 min)
└─ Rotas duplicadas (5 min)

QUADRANTE 2: FAZER EM PARALELO (Alto impacto, Alto esforço)
├─ Implementar CSRF (1 hora)
├─ Adicionar validação DTOs (1 hora)
├─ Spring Security (4 horas)
└─ Tratamento exceções global (1 hora)

QUADRANTE 3: MELHORIAS (Baixo impacto, Baixo esforço)
├─ Corrigir acentuação (30 min)
├─ Remover imports não usados (20 min)
└─ Renomear arquivos com typo (5 min)

QUADRANTE 4: NICE-TO-HAVE (Baixo impacto, Alto esforço)
├─ Migrar para TypeScript (40 horas)
├─ Implementar temas CSS variables (8 horas)
└─ Refatorar UI para framework (60 horas)
```

---

## 📞 CONTATO E ESCALAÇÃO

**Problemas críticos:**
- Backend Lead: Resolver ChamadoService hoje
- DevOps: Configurar CORS e segurança

**Problemas de segurança:**
- Security Officer: Revisar CSRF, SQL Injection, rate limiting

**Melhorias de código:**
- Tech Lead: Revisar refatorações e padrões

---

**Documento gerado:** 2026-07-02  
**Próxima atualização:** Após correções Phase 1
