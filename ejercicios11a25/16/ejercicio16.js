/**
 * @author Ruben Perblac
 * @description Capitaliza la primera letra de cada palabra de una cadena dada
 */

/**
 *
 * @param string cadena
 * @returns string
 */
const capitalizarPalabras = (cadena) => {
  const palabras = cadena.split(" ");
  const resultado = [];
  for (let palabra of palabras) {
    resultado.push(String(palabra[0]).toUpperCase() + palabra.slice(1));
  }
  return resultado.join(" ");
};
