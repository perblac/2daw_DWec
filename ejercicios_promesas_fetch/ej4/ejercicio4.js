/* -------------------- Ejercicio 4: Llamadas Asíncronas -------------------- */

// Crea una secuencia de tres funciones asíncronas de 1 segundo cada una(paso1, paso2, paso3) que deben ejecutarse en orden. La primera función crea una etiqueta spam, la segunda le cambia el color al texto de dicho spam y la tercera muestra un Hola mundo dentro de dicho spam.

/* -------------------------------- variables ------------------------------- */
const contenedor = document.querySelector(".container");
contenedor.innerText = "0";

/* -------------------------------- funciones ------------------------------- */
/**
 * Crea una etiqueta span para el element, al cual se le cambia el texto a "1"
 * @param {HTMLElement} element Contenedor donde se insertará el elemento span
 * @returns {HTMLElement} elemento span
 */
const paso1 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const spam = document.createElement("span");
      spam.textContent = "spam";
      element.innerText = "1";
      resolve(spam);
    }, 1000);
  });
};

/**
 * Recibe un elemento span y le cambia el color de texto a verde. Cambia el texto del contenedor a "2"
 * @param {HTMLElement} element Elemento al que se le cambiará el color
 * @returns {HTMLElement} Elemento con el color cambiado
 */
const paso2 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.style.color = "#3f2";
      contenedor.childNodes[0].nodeValue = "2";
      resolve(element);
    }, 1000);
  });
};

/**
 * Recibe un elemento span y le cambia el texto a "Hola mundo". Cambia el texto del contenedor a "3"
 * @param {HTMLElement} element Elemento al que se le cambiará el texto
 * @returns {HTMLElement} Elemento con el texto cambiado
 */
const paso3 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.innerText = "Hola mundo";
      contenedor.childNodes[0].nodeValue = "3";
      resolve(element);
    }, 1000);
  });
};

/**
 * Ejecuta los tres pasos anteriores en el contenedor `element`
 * @param {HTMLElement} element Contenedor donde ocurriran los cambios
 */
function secuencia(element) {
  paso1(element)
    .then((resultado1) => {
      contenedor.appendChild(resultado1);
      return paso2(resultado1);
    })
    .then((resultado2) => {
      contenedor.querySelector("span").remove();
      contenedor.appendChild(resultado2);
      return paso3(resultado2);
    })
    .then((resultado3) => {
      contenedor.querySelector("span").remove();
      contenedor.appendChild(resultado3);
    })
    .catch((e) => console.log("Hubo error:" + e));
}

/**
 * Función de inicio
 */
function init() {
    secuencia(contenedor);
}

/* ------------------------- Inicio de la aplicación ------------------------ */
document.addEventListener("DOMContentLoaded", init);