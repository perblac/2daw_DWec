/**
 * @author Ruben Perblac
 * @description Una función que toma dos objetos como argumentos. Lamentablemente, la propiedad 'b' del
 *  segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusiona ambos objetos y
 *  corrije el nombre de propiedad incorrecto. Devuelve el objeto resultante, con las propiedades
 *  'a', 'b', 'c', 'd' y 'e'.
 */

/**
 * 
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns object
 */
function fusionaObjetos(obj1,obj2) {
    const resultado = {};
    obj2.d = obj2.b;
    delete obj2.b;
    Object.assign(resultado, obj1, obj2);    
    return resultado;
}
