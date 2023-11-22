/* -------------------------------- importar -------------------------------- */
// import { mensajes, UsuarioFunction as Usuario } from "./assets/modules.js";
// import { mensajes, UsuarioClass as Usuario } from "./assets/modules.js";
import { mensajes, UsuarioLiteral as Usuario } from "./assets/modules.js";
/* --------------------------- declarar variables --------------------------- */
// Para funcion y clase:
// const user1 = new Usuario("Pepe");
// Para objeto literal
const user1 = Object.create(Usuario);
user1.init("Pepe");

/* -------------------------------- funciones ------------------------------- */

function init() {
  user1.printComentarios();
  user1.addPublication(1);
  user1.printComentarios();
  user1.addPublication(2);
  user1.addPublication(35);
  user1.addPublication(56);
  user1.printComentarios();
}
/* ---------------------------- inicio aplicacion --------------------------- */
document.addEventListener("DOMContentLoaded", init);
