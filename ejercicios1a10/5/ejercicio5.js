/**
 * @author Ruben Perblac
 * @description Conteo de Palabras en un texto
 */

/**
 * 
 * @param string texto 
 * @returns object
 */
const contarPalabras = texto => {
    if (typeof(texto) !== 'string')
        console.log('El argumento no es un texto');
    else {
        const arrayPalabras = texto.split(' ');
        const palabrasUnicas = new Set(arrayPalabras.map(str => str.toLowerCase()));
        let resultado = {};
        for (let palabra of palabrasUnicas) {
            let veces = arrayPalabras.filter(str => str.toLowerCase() === palabra).length;
            /*console.log("Palabra: " + palabra + " nº veces: " + veces);*/
            resultado[palabra] = veces;
        }
        return resultado;
    }
};

/* // old version, superada con Set()
function eliminarDuplicados(arr) {
    let arrayUnicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            arrayUnicos.push(arr[i]);
        }
    }
    return arrayUnicos;
}
*/

const contarPalabras2 = cadena => {

}