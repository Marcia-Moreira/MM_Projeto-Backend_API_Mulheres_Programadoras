// Servidor Mulheres Json

const express = require("express")
const router = express.Router()

const app = express()
// Conf Porta:
const porta = 1331


const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {

        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
     
      },
      {

        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
     
      }

]

function mostraMulheres(request, response) {
    response.json(mulheres)
}


// Conf Porta:
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulheres', mostraMulheres))

// Conf Porta:
app.listen(porta, mostraPorta)



// Execução:

// No terminal PowerShell => node server_mulheres_json.js
// No navegador cole: localhost:1331/mulheres

// Resposta no Navegador:
// [{"nome":"Simara Conceição","imagem":"https://github.com/simaraconceicao.png","minibio":"Desenvolvedora e instrutora"},{"nome":"Iana Chan","imagem":"https://bit.ly/3JCXBqP","minibio":"CEO & Founder da PrograMaria"},{"nome":"Luana Pimentel","imagem":"https://bit.ly/3FKpFaz","minibio":"Senior Staff Software Engineer"}]