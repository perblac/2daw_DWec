/**
 * @author Ruben Perblac
 * @description Rota un array hacia izquierda o derecha un número de pasos dado
 */

/**
 * 
 * @param array arr 
 * @param number pasos Si es positivo rota a la derecha, y si es negativo a la izquierda. Si se omite, rota 1 hacia la derecha
 * @returns array
 */
// Versión que no modifica el array inicial y conserva los huecos vacíos:
const rotarArray = (arr, pasos = 1) => {
  // Creamos un filtro para marcar los huecos. 0: valor, 1: hueco
  const huecos = arr.map((x) => 0),
    filtro = [];
  for (let elem of huecos) {
    filtro.push(elem === 0 ? 0 : 1);
  }

  // Copiamos el array inicial
  const resultado = arr.slice();

  // Si pasos es positivo rotamos a la derecha
  if (pasos > 0) {
    for (let i = 0; i < pasos; i++) {
      const temp = resultado.pop();
      const tempF = filtro.pop();
      resultado.unshift(temp);
      filtro.unshift(tempF);
    }
  }
  // Si pasos es negativo rotamos a la izquierda
  else {
    for (let i = 0; i < Math.abs(pasos); i++) {
      const temp = resultado.shift();
      const tempF = filtro.shift();
      resultado.push(temp);
      filtro.push(tempF);
    }
  }

  // Definimos el array rotado del tamaño del filtro
  const arrayRotado = new Array(filtro.length);
  for (let i = 0; i < filtro.length; i++) {
    // Si hay valor (filtro[i] == 0) lo colocamos en su posición en el array rotado
    if (filtro[i] == 0) arrayRotado[i] = resultado[i];
  }

  return arrayRotado;
};

/*
// Versión que modifica el array inicial
const rotarArray = (arr, pasos = 1) => {
  // Si pasos es positivo rotamos a la derecha
  if (pasos > 0) {
    for (let i = 0; i < pasos; i++) {
      const temp = arr.pop();
      arr.unshift(temp);
    }
  }
  // Si pasos es negativo rotamos a la izquierda
  else {
    for (let i = 0; i < Math.abs(pasos); i++) {
      const temp = arr.shift();
      arr.push(temp);
    }
  }
};
*/
