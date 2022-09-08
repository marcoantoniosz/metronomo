# METRONOMO - RADARFIT CHALLENGE

Metronomo Discos é uma loja virtual de LPs.

# Backend = app/backend

## Tecnologias

### Linguagem
A aplicação foi construída em *JavaScript*, através do ambiente de execução *NodeJS* na sintaxe *TypeScript*.

```bash
npm run build
````
* Script que transpila o código *TypeScript* em *JavaScript*, para produção.

### Framework
Para construção do servidor foi utilizado o framework *ExpressJS*, com a biblioteca de desenvolvimento *Nodemon*.

```bash
npm run dev
````
* Script que inicia o servidor e lida com as atualizações de código *TypeScript* em tempo real.

### Banco de Dados

 Para o banco de dados a ferramenta utilizada foi o *Postgres*, integrado através da ORM *Sequelize*.

```bash
npm run db:reset
````
* Script que cria, migra e popula o banco de dados.

### Lint

Para monitorar a qualidade do código foi utilizado o *Eslint*, baseado nas configurações de boas práticas do *Airbnb*.

```bash
npm run lint
````
* Script que analisa e aponta as más colocações de escrita de código.

### Validações
As validações de entrada do corpo da requisição foram feitas através da biblioteca *Joi*.

### HTTP STATUS
Os códigos HTTP foram facilitados através da importação da biblioteca *https-status-codes*.
### Erros assíncronos
Os erros assíncronos foram tratados com o auxílio da biblioteca *express-async-errors*.

### Iniciação
O servidor pode ser iniciado através dos comandos:

```bash
npm start
npm run start
````

## Rotas

### Rotas GET:

#### /lps
Retorna todos os discos cadastrados na loja.

#### /lps/search
Retorna todos os discos por termo de busca (título, nome do artista ou gênero musical). Exemplos:
* /lps/search?q=frank
```python
[{
"id":3,
"title":"Blonde",
"artist":"Frank Ocean",
"genre":"R&B",
...
}]
````

* /lps/search?q=vespertine
```python
[{
"id":2,
"title":"Vespertine",
"artist":"Björk",
"genre":"Pop",
...
}]
````
* /lps/search?q=rock
```python
[{
"id":10,
"title":"In Rainbows",
"artist":"Radiohead",
"genre":"Rock",
...
}]
````
#### /lps/:id
Retorna um disco através da sua *primary key*.

### Rota POST:

#### /lps
Cadastra um novo disco através do seguinte corpo:

```python
{
"id": number,
"title": string,
"artist": string,
"genre":string,
"image": string,
"description": string,
"price": number, 
}
````

### Rota PUT:

#### /lps/:id
Atualiza todos os campos de um disco através do seguinte corpo:
```python
{
"id": number,
"title": string,
"artist": string,
"genre":string,
"image": string,
"description": string,
"price": number, 
}
````

### Rota PATCH:

#### /lps/:id
Atualiza o preço de um disco atraǘes do seguinte corpo:

```python
{
"price": number, 
}
````
### Rota DELETE:

#### /lps/:id
Deleta um item do banco de dados.

## Deployment/Produção

O deploy foi realizado através do *Heroku* e pode ser acessado através do link abaixo:

[METRONOMO BACKEND](https://metronomo-backend.herokuapp.com/)
