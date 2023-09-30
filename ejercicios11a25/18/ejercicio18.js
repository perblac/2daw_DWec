/**
 * @author Ruben Perblac
 * @description Combina los elementos de varios arrays ordenándolos
 */

/**
 * 
 * @param string orden Opcional. Si es 'decreciente' invierte el orden
 * @param  ...array arr 
 * @returns array
 */
const combinarArrays = (orden, ...arr) => {
  if (typeof orden !== "string") {
    arr = [orden, ...arr];
    orden = null;
  }
  const todosLosValores = [];
  for (const array of arr) {
    todosLosValores.push(...array);
  }
  const dec = orden == "decreciente" ? -1 : 1;
  let resultado = [...todosLosValores].sort((a, b) => dec * (a - b));
  return resultado;
};
