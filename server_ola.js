// Servidor ola

const express = require("express")
const router = express.Router()

const app = express()
const porta = 1331

function mostraOla(request, response) {
    response.send("Olá, mundo")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)


// Execução:

// No terminal PowerShell => node server_ola.js
// No navegador cole: localhost:1331/ola

// erro: Cannot GET /ola
// correto: Olá, mundo