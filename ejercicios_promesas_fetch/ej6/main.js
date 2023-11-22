/* -------------- Ejercicio 6: Gestión del tiempo en una ciudad ------------- */

// Crear un proyecto en vite que permita gestionar el estado meteorológico de una ciudad a través de la api OpenWeatherMap

// El proyecto debe de cumplir las siguientes características:

//     Dispondremos de un input en la pantalla centrado horizontalmente y un botón de buscar ciudad. Al introducir el nombre de una ciudad, si existe, mostrará los siguientes datos en una tarjeta o "card":
//         El icono del tiempo(sol, nublado, lluvia…)
//         nombre de la Ciudad y pais.
//         Los iconos más relevantes(viento, presión atmosfética,...).
//     La búsqueda de la ciudad se realizará por la tecla enter o haciendo click en el botón de buscar.
//     Los iconos del tiempo han de estar almacenados en nuestra carpeta assets/images/
//     El icono del tiempo aparece con un retardo de 1,5 segundos y con transición en la opacity.
//     Es necesario el uso de promesas y Fetch api.

import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { searchCity } from './components/searchCity.js';
import { showError } from "./components/showError.js";
import { showCard } from "./components/showCard.js";

fillApp();
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function fillApp() {
  document.querySelector("#app").innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <input type="text" id="search-input" class="form-control col-3">
      <button id="search-btn" class="btn btn-primary">Buscar</button>
      <div class="container">
      </div>
    </div>
  `;
}

function searchHandler(e) {
  let city = searchInput.value;
  searchCity(city);
}

function init() {
  searchButton.addEventListener("click", searchHandler);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      searchHandler(e);
    }
  })
}

document.addEventListener("DOMContentLoaded", init);