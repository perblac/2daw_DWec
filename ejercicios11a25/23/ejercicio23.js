/**
 * @author Ruben Perblac
 * @description Calcula el promedio de cada fila de una matriz bidimensional
 */

/**
 * 
 * @param array arr 
 * @returns array
 */
const promedioFilas = (arr) =>
  arr.forEach((linea) => linea.reduce((sum, a) => sum + a) / linea.length);
