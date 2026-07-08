# 🚨 ERROS CRÍTICOS - AÇÕES IMEDIATAS

## Resumo: 5 Erros Críticos Encontrados

---

### 🔴 CRÍTICO #1: Método Incompleto em ChamadoService
**Status:** ❌ IMPOSSÍVEL COMPILAR  
**Arquivo:** `src/main/java/com/fixon/projeto/service/ChamadoService.java`  
**Linha:** ~215  
**Problema:** Método `exigirStatus()` não possui fechamento  
**Código atual:**
```java
private void exigirStatus(Chamado chamado, StatusChamado esperado, String mensagem) {
    if (chamado.getStatus() != esperado) {
        throw new IllegalStateException(mensagem);
    }
// FALTA AQUI: }
```
**Solução:** Adicionar `}` final

---

### 🔴 CRÍTICO #2: Método isBlank() Não Definido
**Status:** ❌ NullPointerException em runtime  
**Arquivo:** `src/main/java/com/fixon/projeto/service/ChamadoService.java`  
**Problema:** Método `isBlank()` é usado mas não existe  
**Solução:** Adicionar método:
```java
private boolean isBlank(String valor) {
    return valor == null || valor.trim().isEmpty();
}
```

---

### 🔴 CRÍTICO #3: HTML Duplicado
**Status:** ❌ PARSING QUEBRADO  
**Arquivo:** `src/main/resources/templates/adm/dashbord.adm.html`  
**Linha:** 16  
**Problema:** `</head></head>` duplicado  
**Solução:** Remover uma tag de fechamento

---

### 🔴 CRÍTICO #4: Sem CORS Configurado
**Status:** ⚠️ REQUISIÇÕES BLOQUEADAS  
**Arquivo:** `src/main/java/com/fixon/projeto/config/WebConfig.java`  
**Problema:** APIs não possuem CORS configurado  
**Solução:** Adicionar configuração ao WebConfig:
```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:8083")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);
        }
    };
}
```

---

### 🔴 CRÍTICO #5: Sem Proteção CSRF
**Status:** ⚠️ SEGURANÇA  
**Arquivo:** Toda aplicação  
**Problema:** POST/PUT/DELETE sem CSRF tokens  
**Impacto:** Ataques CSRF possíveis  
**Solução:** Implementar Spring Security ou middleware CSRF

---

## 📋 ORDEM DE CORREÇÃO

1. **Compile-time Fix** (Hoje - Deve compilar):
   ```
   [ ] Corrigir método exigirStatus() - 2 min
   [ ] Adicionar isBlank() - 2 min
   [ ] Remover </head> duplicado - 1 min
   ```

2. **Runtime Fix** (Hoje - Deve executar):
   ```
   [ ] Configurar CORS - 10 min
   ```

3. **Security Fix** (Esta semana):
   ```
   [ ] Implementar CSRF - 1h
   [ ] Adicionar validação Jakarta - 2h
   [ ] Setup HTTPS - 1h
   ```

---

## 🔧 QUICK FIXES

### Fix #1 - ChamadoService.java (Linha 215)
```diff
  private void exigirStatus(Chamado chamado, StatusChamado esperado, String mensagem) {
      if (chamado.getStatus() != esperado) {
          throw new IllegalStateException(mensagem);
      }
+ }

+ private boolean isBlank(String valor) {
+     return valor == null || valor.trim().isEmpty();
+ }
```

### Fix #2 - dashbord.adm.html (Linha 16)
```diff
  </head>
- </head>
  <body>
```

### Fix #3 - WebConfig.java
```diff
  @Configuration
  public class WebConfig implements WebMvcConfigurer {
  
      private final AuthInterceptor authInterceptor;
      
      public WebConfig(AuthInterceptor authInterceptor) {
          this.authInterceptor = authInterceptor;
      }
  
+     @Bean
+     public WebMvcConfigurer corsConfigurer() {
+         return new WebMvcConfigurer() {
+             @Override
+             public void addCorsMappings(CorsRegistry registry) {
+                 registry.addMapping("/api/**")
+                     .allowedOriginPatterns("*")
+                     .allowedMethods("*")
+                     .allowCredentials(true);
+             }
+         };
+     }
  
      @Override
      public void addInterceptors(InterceptorRegistry registry) {
          registry.addInterceptor(authInterceptor).addPathPatterns("/**");
      }
  }
```

---

## ⏱️ TEMPO ESTIMADO

- **Compile Fixes:** 5 minutos
- **Runtime Fixes:** 15 minutos
- **Security Baseline:** 3-4 horas

**TOTAL PARA PRODUÇÃO:** ~4 horas

---

**Prioridade:** 🔴 MÁXIMA - Impede compilação e segurança básica
**Owner:** DevOps/Backend Lead
**Deadline:** Hoje
