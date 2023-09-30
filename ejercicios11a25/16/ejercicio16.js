/**
 * @author Ruben Perblac
 * @description Capitaliza la primera letra de cada palabra
 */

const capitalizarPalabras = (cadena) => {
    let palabras = cadena.split(' ');
    let array = [];
    for (let palabra of palabras) {
        palabra[0] = String(palabra[0]).toUpperCase[0];
        array.push(palabra.length > 1?:);
    }
    return array.join(' ');
};
