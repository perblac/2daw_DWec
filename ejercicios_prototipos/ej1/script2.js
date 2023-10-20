/* -------------------------------------------------------------------------- */
/*                 implementación usando Función Constructora                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------- importar -------------------------------- */
import { LibroFunction as Libro } from "./assets/modules.js";
/* -------------------------- declaracion variables ------------------------- */
const exitoG = document.getElementById('exitoGuardar');
const errorG = document.getElementById('errorGuardar');
const falloG = document.getElementById('falloGuardar');
const exitoB = document.getElementById('exitoBorrar');
const errorB = document.getElementById('errorBorrar');

/* -------------------------------- funciones ------------------------------- */

function handlerSaveBook(e) {
    e.preventDefault();

    const tituloFrm = document.getElementById('title').value;
    const autorFrm = document.getElementById('author').value;
    const precioFrm = document.getElementById('price').value;

    let libros = JSON.parse(localStorage.getItem('datosLibros')) ?? [];

    const Titulos = libros.map((libro) => libro._titulo);    
    const indice = Titulos.indexOf(tituloFrm);

    if (tituloFrm == '' || autorFrm == '' || precioFrm == '') {
        // formulario incompleto
        falloG.style.display = 'block';
        setTimeout(()=>{
            falloG.style.display = 'none';
        }, 5000);
    } else {
        if (indice < 0) {
            let newLibro = new Libro(tituloFrm, autorFrm, precioFrm);
            libros.push(newLibro);    
            localStorage.setItem('datosLibros', JSON.stringify(libros));
            // guardado correcto
            errorG.style.display = 'none';
            exitoG.style.display = 'block';
            setTimeout(()=>{
                exitoG.style.display = 'none';
            }, 5000);
        } else {
            // error al guardar
            exitoG.style.display = 'none';
            errorG.style.display = 'block';
            setTimeout(()=>{
                errorG.style.display = 'none';
            }, 5000);
        }
    }

}

function handlerDeleteBook(e) {
    e.preventDefault();

    const titulo = document.getElementById('titleDelete').value;
    let libros = JSON.parse(localStorage.getItem('datosLibros')) ?? [];
    let indice = -1;
    for (let libro of libros) {
        if (libro._titulo == titulo) {
            indice = libros.indexOf(libro);            
        }
    }
    if (indice < 0) {
        // error al borrar
        exitoB.style.display = 'none';
        errorB.style.display = 'block';
        setTimeout(()=>{
            errorB.style.display = 'none';
        }, 5000);
    } else {
        libros.splice(indice, 1);
        localStorage.setItem('datosLibros',JSON.stringify(libros));
        // borrado correcto
        errorB.style.display = 'none';
        exitoB.style.display = 'block';
        setTimeout(()=>{
            exitoB.style.display = 'none';
        }, 5000);
    }
    
}

function handlerCalculatePrices(e) {
    e.preventDefault();

    let libros = JSON.parse(localStorage.getItem('datosLibros')) ?? [];

    let area = document.getElementById('areaPrecios');
    area.value = "";
    area.rows = libros.length + 2;

    let total = 0;

    for (let libro of libros) {
        area.value += `${libro._precio} € - ${libro._titulo}\n`;
        total += parseFloat(libro._precio);
    }
    area.value += '-'.repeat(area.cols) + '\n';
    area.value += `${total} € - Total`;
}

function init() {
    document.getElementById('guardarLibro').addEventListener('click', handlerSaveBook);
    document.getElementById('borrarLibro').addEventListener('click', handlerDeleteBook);
    document.getElementById('calcularPrecios').addEventListener('click', handlerCalculatePrices);
}
/* ---------------------------- INICIO APLICACION --------------------------- */
document.addEventListener('DOMContentLoaded', init);