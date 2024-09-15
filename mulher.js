const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;


function mostraMulher(request, response){
    response.json({
        nome: 'Marcia Barcelo',
        imagem: 'https://www.linkedin.com/in/mpbarcelo/',
        minibio: 'Desenvolvedora web front-end'
    })
}


function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);
