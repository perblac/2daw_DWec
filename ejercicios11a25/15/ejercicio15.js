/**
 * @author Ruben Perblac
 * @description Invierte los caracteres de una cadena y los devuelve en una nueva cadena
 * 
 */

/**
 * 
 * @param string cadena 
 * @returns string
 */
const invertirCadena = (cadena) => {
    let resultado = '';
    for (let caracter of cadena) {
        resultado = caracter + resultado;
    }
    return resultado;
};
