
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Descrição

Este é um projeto de backend desenvolvido com [NestJS](https://nestjs.com/), utilizando o ORM [Prisma](https://www.prisma.io/) para integração com banco de dados MySQL. O sistema é uma API RESTful que gerencia **clientes**, **planos** e **assinaturas**, incluindo um script de _seeding_ para popular o banco de dados com informações iniciais.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Swagger](https://swagger.io/) para documentação da API
- [Class Validator](https://github.com/typestack/class-validator) para validação de DTOs
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration) para gerenciamento de variáveis de ambiente

## Orientações para Execução do Projeto

### 1. Instalação

Clone o projeto e acesse o diretório:

```bash
git clone https://github.com/Daaaiii/servico-gestao.git
cd servico-gestao
```

Instale as dependências:

```bash
npm install
```

### 2. Configure o `.env`

Crie um arquivo `.env` na raiz com o seguinte conteúdo (ajuste conforme seu ambiente):

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

### 3. Prisma: Migrations e Seed

Inicialize o banco de dados com os comandos:

```bash
npx prisma migrate dev
npm run seed
```

### 4. Executar o Projeto

```bash
npm run start:dev
```

A aplicação será executada em: [http://localhost:3000](http://localhost:3000)

### 5. Documentação da API (Swagger)

Acesse a documentação Swagger em:

```
http://localhost:3000/api
```

## Scripts Úteis

- `npm run start:dev`: Inicia o projeto em modo desenvolvimento
- `npx prisma generate`: Gera os clientes Prisma após alteração no schema
- `npx prisma studio`: Interface gráfica para visualizar o banco
- `npx prisma db seed`: Executa o script de seed




## Stay in touch

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/daiane-deponti-bolzan/">
        <img src="https://github.com/Daaaiii.png" width="100px;" alt="Foto da Dai"/><br>
        <sub>
          <b>Daiane Bolzan</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## License

Nest is [MIT licensed](LICENSE).
