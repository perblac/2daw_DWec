/**
 * @author Ruben Perblac
 * @description Suma dos matrices de igual número de filas y columnas
 */

const sumarMatrices = (arr1, arr2) => {
  const resultado = [];
  for (let indiceX in arr1) {
    let linea = [];
    for (let indiceY in arr1[indiceX]) {
      linea.push(arr1[indiceX][indiceY] + arr2[indiceX][indiceY]);
    }
    resultado.push(linea);
  }
  return resultado;
};
