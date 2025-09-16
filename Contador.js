import { frases } from "./app.js";
let indice = 0;
let contador = 0;

const btn = document.getElementById("btn-frase");
const contenedor = document.getElementById("contenedor-frases");


const contadorElement = document.createElement("p");
contadorElement.id = "contador";
contadorElement.textContent = `Frases mostradas: ${contador}`;
contenedor.appendChild(contadorElement);

btn.addEventListener("click", () => {

  const frase = frases[indice];
  contenedor.querySelector("p").textContent = frase;

  
  contador++;
  contadorElement.textContent = `Frases mostradas: ${contador}`;


  indice = (indice + 1) % frases.length;
});
