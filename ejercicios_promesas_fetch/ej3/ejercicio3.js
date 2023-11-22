/* ------------------- Ejercicio 3: Animación con Promesas ------------------ */

// Crea una función que realice una animación de desvanecimiento de un elemento HTML. La función debe aceptar el elemento y la duración de la animación, y devolver una promesa que se resuelva cuando la animación haya terminado.

const segundos = 2;
document.body.style.background = 'url("bg.jpg")';
const contenedor = document.querySelector(".container");

function desvanecer(elemento, segundos) {
    return new Promise((resolve, reject)=>{
        try {
            elemento.style.transitionDuration = `${segundos}s`;
            elemento.style.transitionProperty = 'opacity';
            setTimeout(()=>{
                elemento.style.opacity = 0;
            }, 1);
            setTimeout(()=> {
                resolve('Fin desvanecimiento');
            }, segundos * 1000);            
        } catch (error) {
            reject(error);
        }
    });
}

function init() {
    contenedor.innerHTML = `<h1>Desvanecimiento en ${segundos} segundos</h1>`;
    
    const cajaRoja = document.createElement("div");
    cajaRoja.style.width = '200px';
    cajaRoja.style.height = '200px';
    cajaRoja.style.margin = '100px auto';
    cajaRoja.style.backgroundColor = 'red';
    cajaRoja.style.opacity = 1;
    contenedor.appendChild(cajaRoja);

    desvanecer(cajaRoja,segundos)
    .then((respuesta) => contenedor.innerHTML = `<h1>${respuesta}</h1>`)
    .catch((error) => console.error(error));
}

document.addEventListener('DOMContentLoaded', init);