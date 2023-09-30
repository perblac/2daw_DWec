/**
 * @author Ruben Perblac
 * @description Comprueba si una palabra es palídroma
 */

/**
 * 
 * @param string palabra 
 * @returns boolean
 */
const esPalindromo = (palabra) =>
  [...palabra.slice(0, palabra.length / 2)].join("") ===
  [...palabra]
    .reverse()
    .join("")
    .slice(0, palabra.length / 2);
