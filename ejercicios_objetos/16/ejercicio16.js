/**
 * @author Ruben Perblac
 * @description Toma un Array de objetos y una cadena como argumentos. Agrega una propiedad con clave
 *  'continente' y valor igual a la cadena a cada uno de los objetos. Devuelve el nuevo arreglo de objetos.
 */

/**
 * 
 * @param {array} array 
 * @param {string} cadena 
 * @returns array
 */
const addContinente = (array,cadena) => array.map(objeto => Object.assign(objeto, {continente: cadena,}));