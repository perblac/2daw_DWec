/* -------------------------------- importar -------------------------------- */
import { Calculadora } from "./assets/modules.js";

/* ---------------------------- definir variables --------------------------- */
const screen = document.getElementById("entrada");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multi = document.getElementById("divid");
const divid = document.getElementById("divid");
const raiz = document.getElementById("raiz");
const elev = document.getElementById("elev");
const igual = document.getElementById("igual");

const calc = new Calculadora();

let operacion = null;
let valorA = 0;
let valorB = 0;

/* -------------------------------- funciones ------------------------------- */

function handlerAddition(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "suma";
  screen.value = 0;
}
function handlerSubstracion(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "resta";
  screen.value = 0;
}
function handlerMultiplication(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "multiplicacion";
  screen.value = 0;
}
function handlerDivision(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "division";
  screen.value = 0;
}
function handlerSquareRoot(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "raiz";
  screen.value = calc.raizCuadrada(valorA);
  valorA = parseInt(screen.value);
}
function handlerPower(e) {
  e.preventDefault();

  valorA = parseInt(screen.value);
  operacion = "potencia";
  screen.value = 0;
}

function handlerEqual(e) {
  e.preventDefault();

  if (operacion != null) {
    valorB = parseInt(screen.value);
    switch (operacion) {
      case "suma":
        screen.value = calc.sumar(valorA, valorB);
        valorA = parseInt(screen.value);
        break;
      case "resta":
        screen.value = calc.restar(valorA, valorB);
        valorA = parseInt(screen.value);
        break;
      case "multiplicacion":
        screen.value = calc.multiplicar(valorA, valorB);
        valorA = parseInt(screen.value);
        break;
      case "division":
        screen.value = calc.dividir(valorA, valorB);
        valorA = parseInt(screen.value);
        break;
    }
  }
}

function init() {
  igual.addEventListener("click", handlerEqual);
  suma.addEventListener("click", handlerAddition);
  resta.addEventListener("click", handlerSubstracion);
  multi.addEventListener("click", handlerMultiplication);
  divid.addEventListener("click", handlerDivision);
  raiz.addEventListener("click", handlerSquareRoot);
  elev.addEventListener("click", handlerPower);
}
/* ---------------------------- INICIO APLICACION --------------------------- */
document.addEventListener("DOMContentLoaded", init);
