/**
 * @author Ruben Perblac
 * @description Encuentra los números de faltan de un rango dado en un array
 */

/**
 * 
 * @param array arr 
 * @param number inicio 
 * @param fin fin 
 * @returns array
 */
const numerosFaltantes = (arr, inicio, fin) => {
  // Generamos el rango de inicio a fin
  let rango = [];
  for (let i = inicio; i <= fin; i++) {
    rango.push(i);
  }
  // --- otra opcion para hacer el rango:
  // let rango = Array.from(/*objeto de longitud = rango*/{length:fin - inicio}, /*mapFn*/(valor,indice) => indice + inicio);

  // Devolvemos los numeros del array que no esten en el rango
  let resultado = [];
  let arrSet = new Set(arr);
  for (let numero of rango) {
    if (!arrSet.has(numero)) resultado.push(numero);
  }
  return resultado;
};
