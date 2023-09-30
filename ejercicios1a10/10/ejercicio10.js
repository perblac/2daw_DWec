/**
 * @author Ruben Perblac
 * @description Divide un array en fragmentos de un tamaño dado
 */

/**
 * 
 * @param array arr 
 * @param number tamano 
 * @returns array
 */
const dividirFragmento = (arr,tamano) => {
    if (!Array.isArray(arr))
        throw new Error(`El primer argumento no es un array (${arr})`);
    if (!typeof(tamano) === 'number')
        throw new Error('El segundo argumento no es un número');
    let tamanoArray = arr.length;
    let tamanoFragmentos = 0;
    let resultado = [];
    while(tamanoArray>tamanoFragmentos) {
        resultado.push(arr.slice(tamanoFragmentos, tamanoFragmentos + tamano));
        tamanoFragmentos += tamano;
    }
    return resultado;
};