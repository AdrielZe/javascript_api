const express = require('express')
const app = express();
const data = require('./data.json')

// Verbos HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atualizar dados de um Resource.
// DELETE: Deletar um Resource.

// http://localhost:3000/clients

// Boas práticas:
// Utilizar verbos HTTP para as requisições. (X)
// Sempre tenha respostas em todos os endpoints. (X)

//req = a requisição que emito
//res = a resposta que recebo

app.use(express.json()) // Configurando o Express para que ele consiga utilizar o JSON


app.get("/clients", function(req, res) { //https://jsonplaceholder.typicode.com/users
     res.json(data) //retorna os dados(data) em formato json
})

app.get("/clients/:id", function(req, res){
    const { id } = req.params
    const cliente = data.find(cli => cli.id == id) //procure nos dados o cliente cujo id é igual ao id da requisição
})

app.post("/clients", function(req, res){})

app.put("/clients/:id", function(req, res){})

app.delete("/clients/:id", function(req, res){})
 
app.listen(3000, function() { //Inicia servidor na porta 3000
    console.log("Server is running")
})