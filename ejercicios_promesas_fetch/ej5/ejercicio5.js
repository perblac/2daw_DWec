/* ---------------- Ejercicio 5: Simulación de Autenticación ---------------- */
/**
 * @author Rubén Perblac
 * @description Simula un proceso de inicio de sesión
 */

/* ------------------------ Declaración de variables ------------------------ */
let users = [];
const URL_JSONPLACEHOLDER_ENDPOINT = "https://jsonplaceholder.org/users";
const userField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const cardSubtitle = document.querySelector(".card-subtitle");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout-btn");
const formulario = document.querySelector("#formulario-login");

/* -------------------------------- Funciones ------------------------------- */
/**
 * Carga los usuarios desde el endpoint
 * @returns {Array}
 */
function loadUsers() {
  return new Promise((resolve, reject) => {
    fetch(URL_JSONPLACEHOLDER_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No fue ok la respuesta de la url");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error en el fetch: ", error);
      });
  });
}

/**
 * Manejador del login
 * @param {Event} event Evento keydown de los campos de entrada o click del botón
 */
function loginHandler(event) {
  // si es click, quitamos el comportamiento por defecto
  if ((event.type = "click")) {
    event.preventDefault();
  };

  // tomamos los valores de los campos y los pasamos al validador. Con el resultado mostramos la card o mostramos error
  const username = userField.value;
  const password = passwordField.value;
  validateCredentials(username, password)
    .then((user) => showCard(user))
    .catch((error) => rejectCredentials(error));
}

/**
 * Valida un par usuario / contraseña
 * @param {String} user nombre de usuario a validar
 * @param {String} pass contraseña a validar
 * @returns {Promise}
 */
function validateCredentials(user, pass) {
  return new Promise((resolve, reject) => {
    // comprobamos que los dos campos tienen algo
    if (user.length == 0 || pass.length == 0) {
      reject("Introduzca nombre de usuario y contraseña");
    };

    // filtramos los usuarios con user y pass
    const usr = users.filter(
      (userObject) =>
        userObject.login.username == user && userObject.login.password == pass,
    );

    // si el array está vacío, no existe el par user/pass
    if (usr.length < 1) {
      reject("Usuario o contraseña incorrectos");
    };

    // si hemos llegado aquí: user/pass existen, y extraemos los datos que necesitamos
    const {
      firstname,
      lastname,
      email,
      address: {
        geo: { lat, lng },
      },
    } = usr[0];

    // creamos la cookie 'usuario' que contiene nuestro objeto con los datos
    setCookie(
      "usuario",
      JSON.stringify({ firstname, lastname, email, lat, lng }),
      30,
    );

    // devolvemos el objeto con los datos
    resolve({ firstname, lastname, email, lat, lng });
  });
}

/**
 * Muestra un alert con un mensaje de error, y borra los campos si el error es de datos incorrectos
 * @param {String} error Mensaje del error
 */
function rejectCredentials(error) {
  alert(error);
  if (error == "Usuario o contraseña incorrectos") {
    userField.value = "";
    passwordField.value = "";
  }
}

/**
 * Oculta el formulario y muestra la card con los datos pasados a través del objeto
 * @param {Object} user Un objeto con los campos username, lastname, email, lat y lng
 */
function showCard(user) {
  // pasamos los datos a los campos correspondientes
  cardTitle.textContent = user.firstname + " " + user.lastname;
  cardSubtitle.textContent = user.email;

  // generamos el mapa con la latitud y la longitud
  generateMap(user.lat, user.lng);

  // añadimos un evento al boton de logout que "borra" la cookie y recarga la página
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setCookie('usuario', '', -1);
    location.reload();
  })

  // mostramos la card y ocultamos el formulario
  card.style.display = "block";
  formulario.style.display = "none";
}

/**
 * Genera un mapa con LeafLet y la api de OpenStreetMap para las coordenadas dadas
 * @param {Number} lat Latitud
 * @param {Number} lng Longitud
 */
function generateMap(lat, lng) {
  // constructor
  let map = L.map("map").setView([lat, lng], 13);

  // carga los Tiles del mapa
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // pone un marcador en las coordenadas
  L.marker([lat, lng]).addTo(map);

  // fix para mostrar el mapa correctamente con bootstrap. Cuando está cargado, llama al metodo invalidateSize() que repinta el mapa.
  map.whenReady(() => {
    console.log("Map ready");
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  });
}

/**
 * Crea una cookie con un nombre y una duración en dias
 * @param {String} name Nombre de la cookie
 * @param {String} value Contenido de la cookie
 * @param {Number} days Número de dias por los que será valida la cookie
 */
function setCookie(name, value, days) {
  // fecha de expiración
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  // contenido
  let cookieValue =
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";

  // genera la cookie
  document.cookie = name + "=" + cookieValue;
}

/**
 * Comprueba que existe la cookie 'usuario'
 * @returns {Boolean}
 */
function checkCookieExists() {
  // obtener todas las cookies presentes en la página actual
  let cookies = document.cookie.split(";");

  // verificar si la cookie 'usuario' existe
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("usuario=") === 0) {
      // la cookie 'usuario' existe
      return true;
    }
  }

  // la cookie 'usuario' no existe
  return false;
}

/**
 * Lee el valor de una cookie
 * @param {String} cookieName Nombre de la cookie 
 * @returns {String}
 */
function getCookieValue(cookieName) {
  const name = cookieName + "=";
  // parseamos las cookies
  const decodedCookie = decodeURIComponent(document.cookie);
  
  // las pasamos a un array
  const cookieArray = decodedCookie.split(";");

  // buscamos la cookie por su nombre y si existe devolvemos su contenido (lo que va después del nombre y el =)
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    // saltamos los espacios en blanco si los hubiera
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  // si no encontramos la cookie, devolvemos una cadena vacía
  return "";
}

/**
 * Función de inicio de la aplicación
 */
async function init() {
  // carga de usuarios
  users = await loadUsers();

  // chequeamos si ya está el usuario logeado
  if (checkCookieExists()) {
    let user = JSON.parse(getCookieValue("usuario"));
    showCard(user);
  }
  
  // añadimos la escucha de eventos al boton de login y a los campos de entrada
  loginBtn.addEventListener("click", (e) => {
    loginHandler(e);
  });
  userField.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && userField.value.length > 0) {
      if (passwordField.value.length < 1) {
        passwordField.focus();
      } else {
        loginHandler(e);
      }
    }
  });
  passwordField.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && passwordField.value.length > 0) {
      if (userField.value.length < 1) {
        userField.focus();
      } else {
        loginHandler(e);
      }
    }
  });
}

/* ------------------------- Inicio de la aplicación ------------------------ */
document.addEventListener("DOMContentLoaded", init);
