package com.fixon.projeto;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.CookieManager;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, properties = "spring.profiles.active=dev")
class FluxosPrincipaisIntegrationTests {

    private static final Pattern ID_PATTERN = Pattern.compile("\"id\"\\s*:\\s*(\\d+)");

    @LocalServerPort
    private int port;

    private final CookieManager cookieManager = new CookieManager();
    private final HttpClient http = HttpClient.newBuilder().cookieHandler(cookieManager).build();

    @Test
    void loginFuncionaParaTodosOsPerfisDeTeste() throws Exception {
        assertLogin("admin@bat.com", "ADMIN", "/adm/dashboard");
        assertLogin("operador@bat.com", "OPERADOR", "/operador/dashboard");
        assertLogin("tecnico@bat.com", "TECNICO", "/tecnico/dashboard");
    }

    @Test
    void apiProtegidaExigeLogin() throws Exception {
        cookieManager.getCookieStore().removeAll();
        HttpResponse<String> response = get("/api/maquinas");
        assertThat(response.statusCode()).isIn(302, 401);
    }

    @Test
    void cadastroComNomeUsuarioPermiteLoginPorUsuarioERedirecionaPeloPerfil() throws Exception {
        cookieManager.getCookieStore().removeAll();
        loginAndGetCookie("admin@bat.com");

        String novoOperador = """
                {
                  "nome": "Maria Operadora",
                  "email": "maria.operadora@bat.com",
                  "nomeUsuario": "mariaop",
                  "senha": "senha1234",
                  "perfil": "OPERADOR"
                }
                """;

        HttpResponse<String> operadorCriado = postJson("/api/usuarios", novoOperador);
        assertOk(operadorCriado);
        assertThat(operadorCriado.body()).contains("\"perfil\":\"OPERADOR\"");

        String loginOperador = """
                {
                  "email": "mariaop",
                  "senha": "senha1234"
                }
                """;

        HttpResponse<String> loginResponse = postJson("/api/auth/login", loginOperador);
        assertOk(loginResponse);
        assertThat(loginResponse.body()).contains("\"perfil\":\"OPERADOR\"");
        assertThat(loginResponse.body()).contains("\"redirectUrl\":\"/operador/dashboard\"");

        cookieManager.getCookieStore().removeAll();
        loginAndGetCookie("admin@bat.com");

        String novoTecnico = """
                {
                  "nome": "Joao Tecnico",
                  "email": "joao.tecnico@bat.com",
                  "nomeUsuario": "joaotec",
                  "senha": "senha1234",
                  "perfil": "TECNICO"
                }
                """;

        HttpResponse<String> tecnicoCriado = postJson("/api/usuarios", novoTecnico);
        assertOk(tecnicoCriado);
        assertThat(tecnicoCriado.body()).contains("\"perfil\":\"TECNICO\"");

        String loginTecnico = """
                {
                  "email": "joaotec",
                  "senha": "senha1234"
                }
                """;

        HttpResponse<String> loginTecnicoResponse = postJson("/api/auth/login", loginTecnico);
        assertOk(loginTecnicoResponse);
        assertThat(loginTecnicoResponse.body()).contains("\"perfil\":\"TECNICO\"");
        assertThat(loginTecnicoResponse.body()).contains("\"redirectUrl\":\"/tecnico/dashboard\"");
    }

    @Test
    void cadastroComEmailDeDominioSimplesEhAceito() throws Exception {
        cookieManager.getCookieStore().removeAll();
        loginAndGetCookie("admin@bat.com");

        String novoUsuario = """
                {
                  "nome": "Ana Interna",
                  "email": "ana.interna@empresa",
                  "nomeUsuario": "anainterna",
                  "senha": "senha1234",
                  "perfil": "OPERADOR"
                }
                """;

        HttpResponse<String> response = postJson("/api/usuarios", novoUsuario);
        assertOk(response);
        assertThat(response.body()).contains("\"email\":\"ana.interna@empresa\"");
    }

    @Test
    void listagemDeUsuariosNaoExpoeSenha() throws Exception {
        cookieManager.getCookieStore().removeAll();
        loginAndGetCookie("admin@bat.com");
        HttpResponse<String> response = get("/api/usuarios/operadores");
        assertOk(response);
        assertThat(response.body()).contains("\"perfil\":\"OPERADOR\"");
        assertThat(response.body()).doesNotContain("senha");
    }

    @Test
    void fluxoPrincipalDeChamadoFuncionaAteFinalizar() throws Exception {
        cookieManager.getCookieStore().removeAll();
        loginAndGetCookie("admin@bat.com");

        HttpResponse<String> maquinas = get("/api/maquinas");
        assertOk(maquinas);
        assertThat(maquinas.body()).contains("MAQ-001", "MAQ-002", "MAQ-003");

        String novoChamado = """
                {
                  "operadorId": 1,
                  "setor": "Producao",
                  "maquina": "MAQ-001",
                  "categoria": "Mecanica",
                  "prioridade": "ALTA",
                  "descricao": "Equipamento parou durante operacao de teste automatizado.",
                  "imagem": ""
                }
                """;

        HttpResponse<String> criado = postJson("/api/chamados", novoChamado);
        assertOk(criado);
        assertThat(criado.body()).contains("\"status\":\"ABERTO\"");
        long chamadoId = extractId(criado.body());

        HttpResponse<String> disponiveis = get("/api/chamados/disponiveis");
        assertOk(disponiveis);
        assertThat(disponiveis.body()).contains("\"status\":\"ABERTO\"");

        assertStatus(postJson("/api/chamados/" + chamadoId + "/assumir?tecnicoId=1", ""), "ASSUMIDO");
        assertStatus(postJson("/api/chamados/" + chamadoId + "/deslocamento?tecnicoId=1", ""), "DESLOCAMENTO");
        assertStatus(postJson("/api/chamados/" + chamadoId + "/chegada?tecnicoId=1", ""), "NO_LOCAL");
        assertStatus(postJson("/api/chamados/" + chamadoId + "/atendimento?tecnicoId=1", ""), "ATENDIMENTO");
        assertStatus(postJson("/api/chamados/" + chamadoId + "/finalizar?tecnicoId=1", ""), "FINALIZADO");
    }

    private void assertLogin(String email, String perfil, String redirectUrl) throws Exception {
        String body = """
                {
                  "email": "%s",
                  "senha": "senha123"
                }
                """.formatted(email);

        HttpResponse<String> response = postJson("/api/auth/login", body);
        assertOk(response);
        assertThat(response.body()).contains("\"perfil\":\"" + perfil + "\"");
        assertThat(response.body()).contains("\"redirectUrl\":\"" + redirectUrl + "\"");
    }

    private void loginAndGetCookie(String email) throws Exception {
        String body = """
                {
                  "email": "%s",
                  "senha": "senha123"
                }
                """.formatted(email);

        HttpResponse<String> response = postJson("/api/auth/login", body);
        assertOk(response);
    }

    private void assertStatus(HttpResponse<String> response, String status) {
        assertOk(response);
        assertThat(response.body()).contains("\"status\":\"" + status + "\"");
    }

    private void assertOk(HttpResponse<String> response) {
        assertThat(response.statusCode()).isBetween(200, 299);
    }

    private HttpResponse<String> get(String path) throws Exception {
        HttpRequest.Builder builder = HttpRequest.newBuilder(uri(path)).GET();
        addCookie(builder);
        HttpRequest request = builder.build();
        return http.send(request, HttpResponse.BodyHandlers.ofString());
    }

    private HttpResponse<String> postJson(String path, String body) throws Exception {
        HttpRequest.Builder builder = HttpRequest.newBuilder(uri(path))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(body == null ? "" : body));
        addCookie(builder);
        HttpRequest request = builder.build();
        return http.send(request, HttpResponse.BodyHandlers.ofString());
    }

    private void addCookie(HttpRequest.Builder builder) {
        // The CookieManager handles session cookies automatically for the test client.
    }

    private URI uri(String path) {
        return URI.create("http://localhost:" + port + path);
    }

    private long extractId(String json) {
        Matcher matcher = ID_PATTERN.matcher(json);
        assertThat(matcher.find()).isTrue();
        return Long.parseLong(matcher.group(1));
    }
}
