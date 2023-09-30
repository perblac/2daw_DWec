/**
 * @author Ruben Perblac
 * @description Ordena un array de objetos por una propiedad específica
 */

/**
 *
 * @param array arr
 * @param string propiedad
 * @returns array   
 */
const ordenarPorPropiedad = (arr, propiedad) => {
  // compareFn: A function that defines the sort order. The return value should be a number
  // whose sign indicates the relative order of the two elements: negative if a is less than b,
  // positive if a is greater than b, and zero if they are equal. NaN is treated as 0.
  return arr.toSorted(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });
};

/*
// En una línea:
// true - false; 1
// false - true; -1
// true - true; 0
// false - false; 0
const ordenarPorPropiedad = (arr, propiedad) =>
  arr.toSorted(
    (a, b) => (a[propiedad] > b[propiedad]) - (b[propiedad] > a[propiedad])
  );
*/
