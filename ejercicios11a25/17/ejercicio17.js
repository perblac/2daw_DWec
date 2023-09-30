/**
 * @author Ruben Perblac
 * @description Multiplica una matriz por un escalar
 */

/**
 *
 * @param array matriz
 * @param number escalar
 * @returns array
 */
const multiplicarMatrizPorEscalar = (matriz, escalar) => {
  const resultado = [];
  for (const xs of [...matriz]) {
    const linea = [];
    for (const ys of [...xs]) {
      linea.push(ys * escalar);
    }
    resultado.push(linea);
  }
  return resultado;
};
