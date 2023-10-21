
/* -------------------------------- importar -------------------------------- */
import { CocheFunction as Coche, MotoFunction as Moto } from "./assets/modules";
/* ---------------------------- definir variables --------------------------- */


/* -------------------------------- funciones ------------------------------- */
// test objeto coche
const coche = new Coche('seat', 'leon', 2005);
console.log(coche);
console.log('coche parado, vel =',coche.velocidad);
coche.arrancar();
console.log('coche arranca, vel =', coche.velocidad);
coche.acelerar();
console.log('coche acelera, vel =', coche.velocidad);
coche.velocidad = 50;
console.log('coche set vel = 50 (MAX = 30), vel =', coche.velocidad);
coche.acelerar();
console.log('coche acelera, vel =', coche.velocidad);
coche.frenar();
console.log('coche frena, vel =', coche.velocidad);
console.log(coche.MAXVEL, coche.constructor.MAXVEL);


function init() {

}
/* ---------------------------- INICIO APLICACION --------------------------- */
document.addEventListener('DOMContentLoaded', init);