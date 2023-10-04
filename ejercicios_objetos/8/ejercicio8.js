/**
 * @author Ruben Perblac
 * @description Una función que toma un objeto como argumento. Dicho objeto tienen como argumento o valor
 *  dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Obtiene la propiedad 'b' del
 *  objeto 'a' en caso de que exista. Si no existe devolverá undefined
 */

function sacaPropiedadBdeA(objeto) {
    let resultado = objeto.a ?? undefined;
    return resultado;
}
