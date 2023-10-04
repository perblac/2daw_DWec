/**
 * @author Ruben Perblac
 * @description Una función que tome dos matrices (a y b) como argumentos. Crea un objeto que tenga propiedades
 *  con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el objeto.
 */

function creaDesdeArrays(a,b) {
    const result = {};
    for (let indice in a) {
        result[a[indice]] = b[indice];
    }
    return result;
}
