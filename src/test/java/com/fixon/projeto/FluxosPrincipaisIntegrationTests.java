package com.fixon.projeto;

import static org.assertj.core.api.Assertions.assertThat;

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

    private final HttpClient http = HttpClient.newHttpClient();
    private String cookie;

    @Test
    void loginFuncionaParaTodosOsPerfisDeTeste() throws Exception {
        assertLogin("admin@bat.com", "ADMIN", "/adm/dashboard");
        assertLogin("operador@bat.com", "OPERADOR", "/operador/dashboard");
        assertLogin("tecnico@bat.com", "TECNICO", "/tecnico/dashboard");
    }

    @Test
    void apiProtegidaExigeLogin() throws Exception {
        cookie = null;
        HttpResponse<String> response = get("/api/maquinas");
        assertThat(response.statusCode()).isIn(302, 401);
    }

    @Test
    void listagemDeUsuariosNaoExpoeSenha() throws Exception {
        cookie = loginAndGetCookie("admin@bat.com");
        HttpResponse<String> response = get("/api/usuarios/operadores");
        assertOk(response);
        assertThat(response.body()).contains("\"perfil\":\"OPERADOR\"");
        assertThat(response.body()).doesNotContain("senha");
    }

    @Test
    void fluxoPrincipalDeChamadoFuncionaAteFinalizar() throws Exception {
        cookie = loginAndGetCookie("admin@bat.com");

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

    private String loginAndGetCookie(String email) throws Exception {
        String body = """
                {
                  "email": "%s",
                  "senha": "senha123"
                }
                """.formatted(email);

        HttpResponse<String> response = postJson("/api/auth/login", body);
        assertOk(response);
        return response.headers()
                .firstValue("Set-Cookie")
                .map(value -> value.split(";", 2)[0])
                .orElseThrow();
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
        if (cookie != null) {
            builder.header("Cookie", cookie);
        }
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
