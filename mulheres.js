const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    nome: "Marcia Barcelo",
    imagem: "https://www.linkedin.com/in/mpbarcelo/",
    minibio: "Desenvolvedora web front-end",
  },
  {
    nome: "Fabíola Rocha",
    imagem: "https://www.linkedin.com/in/fabiolagrocha/",
    minibio: "Qa",
  },
  {
    nome: "Sarah de Paula",
    imagem: "https://www.linkedin.com/in/sarahdepaula44/",
    minibio: "Desenvolvedora web front-end",
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}
function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
