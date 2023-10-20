
/* -------------------------------- importar -------------------------------- */
import { ComidaFunction as Comida, DietaFunction as Dieta } from "./assets/modules.js";
/* --------------------------- declarar variables --------------------------- */
const alimentoFrm = document.getElementById('alimento');
const caloriasFrm = document.getElementById('calorias')
let dieta = null;

/* -------------------------------- funciones ------------------------------- */
function handlerCreateDiet(e) {
    e.preventDefault();
    dieta = new Dieta();
    document.getElementById('formAlimentos').style.display = 'block';
    document.getElementById('crearDieta').setAttribute('disabled',1 );
}

function handlerEat(e) {
    e.preventDefault();
    const alimento = alimentoFrm.value;
    const calorias = caloriasFrm.value;
    if (alimento == '' ||
        calorias == '') {
        document.getElementById('mensajeExito').style.display = 'none';
        document.getElementById('mensajeError').style.display = 'block';
        setTimeout(()=> {
            document.getElementById('mensajeError').style.value = 'none';
        }, 5000);
    } else {
        let comida = new Comida(alimento,parseInt(calorias));
        dieta.agregarAlimento(comida);
        document.getElementById('mensajeError').style.display = 'none';
        document.getElementById('mensajeExito').innerHTML = `¡Ñam! +1 ${comida.nombre}`;
        document.getElementById('mensajeExito').style.display = 'block';
        setTimeout(()=> {
            document.getElementById('mensajeExito').style.value = 'none';
        }, 2000);
        alimentoFrm.value = "";
        caloriasFrm.value = "";
    }
}

function handlerCalculateCalories(e) {
    e.preventDefault();

    const area = document.getElementById('areaCalorias');
    area.value = "";
    area.value += dieta.listarAlimentosConsumidos();
    area.value += `total: ${dieta.calcularTotalCalorias()}`;
}

function init() {
    document.getElementById('crearDieta').addEventListener('click',handlerCreateDiet);
    document.getElementById('comer').addEventListener('click', handlerEat);
    document.getElementById('calcularCalorias').addEventListener('click', handlerCalculateCalories);
}
/* ---------------------------- INICIO APLICACION --------------------------- */
document.addEventListener('DOMContentLoaded', init);