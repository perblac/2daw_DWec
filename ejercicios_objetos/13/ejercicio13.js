/**
 * @author Ruben Perblac
 * @description Intercambia claves y valores de objetos. Toma un objeto como argumento e intercambia la
 * clave del objeto Javascript con sus valores y devuelve el objeto resultante.
 */

/**
 *
 * @param {object} objeto
 * @returns object
 */
const intercambia = (objeto) =>
  Object.fromEntries(
    Object.entries(objeto).map((entrada) => [entrada[1], entrada[0]])
  );

/*
function intercambia(objeto) {
    const result = {};
    for (let clave in objeto) {
        result[objeto[clave]] = clave;
    }
    return result;
}
*/
