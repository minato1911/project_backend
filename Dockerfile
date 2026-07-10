# Stage 1: Build da aplicação usando Maven com Java 21
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copia o pom.xml e baixa as dependências (cache de camada Docker)
COPY pom.xml .
RUN mvn dependency:go-offline -B || true

# Copia o código-fonte e compila
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Imagem leve de runtime (JRE 21 Alpine)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Criação de usuário não-root por segurança
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copia o arquivo .jar gerado no primeiro stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
