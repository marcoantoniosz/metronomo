# METRONOMO - RADARFIT CHALLENGE

Metronomo Discos é uma loja virtual de LPs.

## Tecnologias

## Backend = app/backend

#### Linguagem
A aplicação foi construída em JavaScript, através do ambiente de execução NodeJS na sintaxe TypeScript.

```bash
npm run build
````
* Script que transpila o código TypeScript em JavaScript, para produção.

#### Framework
Para construção do servidor foi utilizado o framework ExpressJS, com a biblioteca de desenvolvimento nodemon.

```bash
npm run dev
````
* Script que inicia o servidor e lida com as atualizações de código TypeScript em tempo real.

#### Banco de Dados

 Para o banco de dados a ferramenta utilizada foi o Postgres, integrado através da ORM *Sequelize*.

```bash
npm run db:reset
````
* Script que cria, migra e popula o banco de dados.

#### Lint

Para monitorar a qualidade do código foi utilizado o Eslint, baseado nas configurações de boas práticas do *Airbnb*.

```bash
npm run lint
````
* Script que analisa e aponta as más colocações de escrita de código.

#### Validações
As validações de entrada corpo da requisição foi feita através da biblioteca *Joi*.

#### HTTP STATUS
Os códigos HTTP foram facilitados através da biblioteca *https-status-codes*.
