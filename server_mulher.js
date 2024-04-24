// Servidor ola

const express = require("express")
const router = express.Router()

const app = express()
// Conf Porta:
const porta = 1331

function mostraMulher(request, response) {

    response.json({
   
       nome: 'Simara Conceição',
   
       imagem: 'https://github.com/simaraconceicao.png',
   
       minibio: 'Desenvolvedora e instrutora'
   
    })
   
   }


// Conf Porta:
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulher', mostraMulher))

// Conf Porta:
app.listen(porta, mostraPorta)



// Execução:

// No terminal PowerShell => node server_ola.js
// No navegador cole: localhost:1331/mulher

// Resposta no Navegador:
// {"nome":"Simara Conceição","imagem":"https://github.com/simaraconceicao.png","minibio":"Desenvolvedora e instrutora"}