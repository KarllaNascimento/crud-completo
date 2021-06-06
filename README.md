### Entregável da semana

1) Vocês irão criar um CRUD MongoDB para um sistema simples de cadastros de filmes. Ufaaa, já temos o MongoDB e MongoCompass instalados e prontinhos para usarmos. (Se espelhe totalmente pelo exemplo da sala que fizemos com cadastro de livros).


2) Passo a passo para entrega:
  - Crie um repositorio vazio no seu github
  - Clone para seu computador
  - Dentro dele inicialize um projeto node usando: o npm init -y
  - Instale todas as dependencias necessarias use: npm i express mongoose nodemon
  - Configure o script de start para o nodemon no seu package.json
  - Crie todas as pastas e arquivos conforme arquitetura de pastas abaixo
  - Crie toda a configuração necessária para o mongoose nos arquivos model, database e server
  - Crie e suba seu servidor
  - Nesse momento, você pode rodar seu projeto para receber no terminal as mensagens de sucesso para sua porta do servidor e também para a conexão do banco de dados use: npm run 
  - No Controller, crie toda lógica, interagindo com o mongoose para salvar as informações no mongodb. Não esqueça que isso é um processo assíncrono(use async/await)
  - Na Route, use os metodos HTTP e chame os controllers
  - Abra o MongoCompass para fazer a conexão usando a string e também para acessar a database e collection (se nao aparecer automaticamente, clique no botao create database e use o mesmo que colocou no arquivo database)
  - Tudo pronto? Teste com o Postman ou insomnia e verifique no MongoCompass se realmente tudo está sendo gravado no mongo!
  - Por fim, suba todas as mudanças para seu github e disponibilize o link do seu repositório aqui nessa planilha: https://docs.google.com/spreadsheets/d/1W1VE4MSeQ2OeFd_KHoTLbmzstMU-l9qJipaQNFXA9RI/edit?usp=sharing

`Arquitetura - vamos criar nossas pastinhas e arquivos assim:`
#### 📂repositorio-clonado
  #### Server.js
  > Sobe servidor nodejs, usa as rotas, converte os dados para Json e faz conexao com a importação do db.

  #### .gitignore
  > Ignora arquivos e pastas do node_modules

  #### 📂SRC

  #### 📂Routes
  >  Cria as rotas apenas com a responsabilidade dos metodos HTTP
  #### 📂Controllers
  > Cria a lógica e salva as informações do db.
  #### 📂Models
  > Modela o esquema de dados para o banco.
  #### 📂Data
  > Cria a configuração de conexão com o banco.

`Schema: template de como serão os dados nos nossos documentos`

Use o Mongoose para modelar o objeto, os campos serão conforme abaixo: 

* title
  - String
  - required 
* description
  - String
  - required
* type
  - String
  - required
* available_on
  - String
  - required
* created_at
  - Date
  - required
  - default

---
<br>
**CRUD:**
o endpoint será: localhost:3333/movies

<br>
<br>

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todos os filmes cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar um novo filme a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para deletá-lo.|
---

***Obs.: Todas as rotas deverão ser testadas no postman ou insomnia e verificar se as informações foram de fato persistidas no db***
