/**
 * @author Ruben Perblac
 * @description Encuentra la diferencia entre dos arrays
 */

const diferenciaArrays = (arr1, arr2) => {
  const resultado = [];
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // Si suponemos arr1 - arr2:
  /*
    for (let valor of set1) {
      if (!set2.has(valor)) {
        resultado.push(valor);
      }
    }
    */
  // Si suponemos arr1 xor arr2:
  const union = new Set(
    [...set1, ...set2].filter((valor) => set1.has(valor) && set2.has(valor))
  );
  resultado.push(...[...set1, ...set2].filter((valor) => !union.has(valor)));
  return resultado;
};
