
/* -------------------------------- importar -------------------------------- */
import { mensajes, Usuario } from "./assets/modules.js";
/* --------------------------- declarar variables --------------------------- */
const user1 = new Usuario('Pepe');

/* -------------------------------- funciones ------------------------------- */
function init() {
    user1.addPublication(1);
    user1.addPublication(2);
    user1.addPublication(35);
    console.log(user1.getComentarios(mensajes));    
}
/* ---------------------------- inicio aplicacion --------------------------- */
document.addEventListener('DOMContentLoaded', init);