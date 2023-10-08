/**
 * @author Ruben Perblac
 * @description Toma un objeto como argumento. Reemplaza cadenas vacías y cadenas que contienen solo espacios
 *  en blanco con valores nulos. Devuelve el objeto resultante.
 */

/**
 *
 * @param {object} objeto
 * @returns object
 */
const empty2null = (objeto) =>
  Object.fromEntries(
    Object.entries(objeto).map((tupla) => [
      tupla[0],
      typeof tupla[1] == "string"
        ? tupla[1].trim() === ""
          ? null
          : tupla[1]
        : tupla[1],
    ])
  );

/*
function empty2null(objeto) {
    const result = {};
    Object.assign(result,objeto);
    for (let [clave, valor] of Object.entries(result)) {
        result[clave] = (typeof valor == 'string')?(valor.trim()==='')?null:valor:valor;
    }
    return result;
}
*/
