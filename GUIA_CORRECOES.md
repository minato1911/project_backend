# 🛠️ GUIA DE CORREÇÃO - COMANDOS E SCRIPTS

## 1️⃣ CORREÇÕES AUTOMÁTICAS

### Script para Remover Imports Não Utilizados
```bash
# No VS Code, instale a extensão "Code Cleanup"
# Ou use Maven plugin:
mvn spotless:apply
```

### Renomear Arquivos com Typo
```bash
# Linux/Mac
mv src/main/resources/static/js/op.meus-chmados.js src/main/resources/static/js/op.meus-chamados.js
mv src/main/resources/templates/tec/deshbord.tec.html src/main/resources/templates/tec/dashboard.tec.html

# Windows PowerShell
Rename-Item -Path "src\main\resources\static\js\op.meus-chmados.js" -NewName "op.meus-chamados.js"
Rename-Item -Path "src\main\resources\templates\tec\deshbord.tec.html" -NewName "dashboard.tec.html"
```

### Padronizar Nomes de CSS
```bash
# Converter para lowercase
for f in src/main/resources/static/css/*.css; do
    mv "$f" "$(echo "$f" | tr A-Z a-z)"
done
```

---

## 2️⃣ CORREÇÕES SEMI-AUTOMÁTICAS (Find & Replace)

### Problema #35: Acentuação em Mensagens
**Usar Find & Replace no VS Code:**

| Encontrar | Substituir |
|-----------|-----------|
| `"nao encontrado"` | `"não encontrado"` |
| `"obrigatorio"` | `"obrigatório"` |
| `"ja cadastrado"` | `"já cadastrado"` |
| `"e obrigatorio"` | `"é obrigatório"` |
| `"Dados do usuario"` | `"Dados do usuário"` |
| `"Dados da maquina"` | `"Dados da máquina"` |

**VS Code: Ctrl+H (Find and Replace)**
```
Find: nao encontrado
Replace All: não encontrado
```

### Problema #40: Typo em Arquivo HTML
```bash
# Corrigir referência em PageController.java
# Mudar de: tec/deshbord.tec
# Para: tec/dashboard.tec
```

### Problema #10: Tag HTML em Uppercase
```html
<!-- Antes -->
<LINK REL="STYLESHEET" href="/css/dashbord.ADM.css"/>

<!-- Depois -->
<link rel="stylesheet" href="/css/dashbord.adm.css"/>
```

---

## 3️⃣ CORREÇÕES MANUAIS (Com Código)

### CRÍTICO #1: Corrigir ChamadoService.java

**Arquivo:** `src/main/java/com/fixon/projeto/service/ChamadoService.java`

Adicione no final da classe (antes do último `}`):

```java
private boolean isBlank(String valor) {
    return valor == null || valor.trim().isEmpty();
}

private void exigirStatus(Chamado chamado, StatusChamado esperado, String mensagem) {
    if (chamado.getStatus() != esperado) {
        throw new IllegalStateException(mensagem);
    }
}
```

**Verificar:** O arquivo deve terminar com `}`

---

### CRÍTICO #2: Corrigir dashbord.adm.html

**Arquivo:** `src/main/resources/templates/adm/dashbord.adm.html`

Linha 16 - Remover duplicação:

```diff
  </head>
- </head>
  <body>
```

---

### CRÍTICO #3: Configurar CORS

**Arquivo:** `src/main/java/com/fixon/projeto/config/WebConfig.java`

Substitua o conteúdo da classe:

```java
package com.fixon.projeto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final AuthInterceptor authInterceptor;

    public WebConfig(AuthInterceptor authInterceptor) {
        this.authInterceptor = authInterceptor;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOriginPatterns("*")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true)
                    .maxAge(3600);
            }
        };
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor).addPathPatterns("/**");
    }
}
```

---

### HIGH #6: Tratamento Global de Exceções

**Arquivo:** `src/main/java/com/fixon/projeto/controller/GlobalExceptionHandler.java` (CRIAR NOVO)

```java
package com.fixon.projeto.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "Validação");
        error.put("message", ex.getMessage());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<Map<String, String>> handleIllegalState(IllegalStateException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "Estado Inválido");
        error.put("message", ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneric(Exception ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", "Erro Interno");
        error.put("message", "Ocorreu um erro inesperado");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
```

Depois remova os `@ExceptionHandler` dos controllers individuais.

---

### HIGH #8: Adicionar Validação em DTOs

**Arquivo:** `src/main/java/com/fixon/projeto/dto/LoginRequest.java`

```java
package com.fixon.projeto.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email deve ser válido")
    String email,
    
    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 8, message = "Senha deve ter mínimo 8 caracteres")
    String senha) {
}
```

Aplique o mesmo padrão para outros DTOs:
- `UsuarioRequest.java`
- `ChamadoRequest.java`
- `MaquinaRequest.java`

---

### HIGH #14: Corrigir Rotas Duplicadas

**Arquivo:** `src/main/java/com/fixon/projeto/controller/PageController.java`

Problema: Duas rotas para `/tecnico/chamados-disponiveis`

**Solução:**

```java
@GetMapping("/tecnico/chamados-disponiveis")
public String tecnicoChamadosDisponiveis() {
    return "tec/tec.Chdisponivel";
}

// Mudar para rota diferente:
@GetMapping("/tecnico/chamado-atual")
public String tecnicoChamadoAtual() {
    return "tec/tec.Chdisponivel";  // ou outra página
}
```

E atualizar referências em JavaScript/HTML.

---

### MEDIUM #19: Centralizar Método Duplicado

**Arquivo:** `src/main/java/com/fixon/projeto/util/StringUtils.java` (CRIAR NOVO)

```java
package com.fixon.projeto.util;

public class StringUtils {
    
    public static boolean isBlank(String valor) {
        return valor == null || valor.trim().isEmpty();
    }
    
    public static String normalize(String email) {
        return email == null ? "" : email.trim().toLowerCase();
    }
    
    public static String normalizeWithLocale(String valor) {
        return valor == null ? "" : valor.trim().toLowerCase(java.util.Locale.ROOT);
    }
}
```

Depois em cada service, substituir:
```java
// Antes
private boolean isBlank(String valor) { ... }

// Depois
import com.fixon.projeto.util.StringUtils;

// Usar: StringUtils.isBlank(valor)
```

---

### MEDIUM #23: Criar Namespace para Funções JS

**Arquivo:** `src/main/resources/static/js/app.js` (CRIAR NOVO)

```javascript
const App = {
    // Theme management
    toggleTheme: function() {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    },
    
    // Language management
    setLang: function(lang) {
        localStorage.setItem('lang', lang);
        location.reload();
    },
    
    // Modal operations
    openModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
    },
    
    closeModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('open');
    },
    
    // API calls wrapper
    api: {
        get: async function(url) {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        },
        
        post: async function(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        }
    }
};

// Use assim:
// App.toggleTheme();
// App.setLang('en');
// App.openModal('myModal');
```

---

## 4️⃣ TESTES PARA VERIFICAR CORREÇÕES

### Teste Compilação
```bash
mvn clean compile
```

✅ Sucesso: Sem erros

### Teste de Startup
```bash
mvn spring-boot:run
```

✅ Sucesso: Log sem stacktrace

### Teste de CORS
```bash
curl -H "Origin: http://localhost:3000" \
     -H "Access-Control-Request-Method: POST" \
     http://localhost:8083/api/chamados -v
```

✅ Sucesso: Response inclui `Access-Control-Allow-Origin`

### Teste de Validação DTOs
```bash
curl -X POST http://localhost:8083/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"","senha":""}'
```

✅ Sucesso: Retorna JSON com erro de validação

---

## 5️⃣ CHECKLIST DE IMPLEMENTAÇÃO

### Dia 1 (Hoje)
- [ ] Corrigir método ChamadoService.exigirStatus()
- [ ] Adicionar StringUtils.isBlank()
- [ ] Remover `</head>` duplicado
- [ ] Compilar projeto sem erros
- [ ] Configurar CORS

### Dia 2
- [ ] Adicionar GlobalExceptionHandler
- [ ] Validação em DTOs (LoginRequest, UsuarioRequest, etc)
- [ ] Rotas duplicadas
- [ ] Testes de integração

### Dia 3-5
- [ ] Implementar CSRF protection
- [ ] Renomear arquivos com typo
- [ ] Padronizar CSS e HTML
- [ ] Adicionar logging (SLF4J)
- [ ] Criar StringUtils centralizado

### Próximas 2 Semanas
- [ ] Spring Security completo
- [ ] Testes de segurança
- [ ] Documentação API (Swagger)
- [ ] Rate limiting

---

## 6️⃣ COMANDOS ÚTEIS

```bash
# Verificar problemas de linting
mvn checkstyle:check

# Analisar qualidade de código
mvn sonar:sonar

# Executar testes
mvn test

# Gerar relatório de cobertura de testes
mvn test jacoco:report

# Build para produção
mvn clean package -DskipTests

# Verificar dependências vulneráveis
mvn org.owasp:dependency-check-maven:check

# Atualizar versões de dependências
mvn versions:display-dependency-updates

# Formatar código
mvn fmt:format
```

---

## 7️⃣ PRÓXIMOS PASSOS APÓS CORREÇÕES

1. **Code Review:** Submeter PR com as correções
2. **Testes:** Executar suite de testes completa
3. **Staging:** Deploy em ambiente de staging
4. **QA:** Testes funcionais e de segurança
5. **Production:** Deploy em produção

---

**Documento criado:** 2026-07-02  
**Última atualização:** 2026-07-02  
**Status:** Pronto para implementação
