
# ✅ ORIENTAÇÕES PARA EXECUÇÃO DO SISTEMA

Este documento contém as instruções necessárias para instalar, configurar e executar o sistema desenvolvido em NestJS com Prisma ORM e banco de dados MySQL.

---

## 🧱 Tecnologias Utilizadas

- **NestJS** – Framework Node.js para construção de APIs robustas.
- **Prisma ORM** – ORM para manipulação do banco de dados com suporte a TypeScript.
- **MySQL** – Banco de dados relacional.
- **Swagger** – Documentação automática da API.
- **TypeScript** – Linguagem principal do projeto.
- **@nestjs/config** – Gerenciamento de variáveis de ambiente.

---

## 💾 Banco de Dados

- **Tipo**: MySQL
- **ORM**: Prisma
- **Modelo**: O projeto possui modelos para `Cliente`, `Plano` e `Assinatura`.

Você deve configurar sua variável `DATABASE_URL` no `.env` com a string de conexão do MySQL. Exemplo:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

---

## 🚀 Passo a Passo para Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Daaaiii/servico-gestao.git
   cd servico-gestao
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o ambiente**:
   Crie um arquivo `.env` na raiz com o seguinte conteúdo:
   ```env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
   ```



4. **Crie a migração e gere o client**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Popule o banco com o seed (clientes, planos e assinaturas)**:
   ```bash
   npx prisma db seed
   ```

6. **Execute a aplicação**:
   ```bash
   npm run start:dev
   ```

---

## 📄 Acesso ao Swagger

Após iniciar a aplicação, acesse a documentação da API via Swagger:

```
http://localhost:3000/api
```

---

## 📚 Referência

Tutorial utilizado como base:  
[Prisma + NestJS REST API](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)

[NestJS Fundamentos](https://www.udemy.com/share/107OzE3@jzLQ48Itk8nHwwIvNlMV5O_XTUY2yxz5IrSGaHpt6QlY7yxAn4svzYDglNgvqbVE7Q==/)