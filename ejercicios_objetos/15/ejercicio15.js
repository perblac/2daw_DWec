/**
 * @author Ruben Perblac
 * @description Toma un objeto como argumento que contiene propiedades con información personal. Extre el
 *  nombre, el apellido, el tamaño y el peso, si están disponibles. Si se proporciona el tamaño o el peso,
 *  transforma el valor en una cadena. Adjunta la unidad cm al tamaño. Adjunta la unidad kg al peso. 
 *  Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan y sus modificaciones
 *  correspondientes.
 */

/**
 * 
 * @param {object} objeto 
 * @returns object
 */
function extraeInformacion(objeto) {
    const datos = ['nombre', 'apellido', 'tamano', 'peso'];
    const result = {};
    for (let dato of datos) {
        if (Object.hasOwn(objeto, dato)) {
            result[dato] = objeto[dato];
            if (dato == 'tamano') result[dato] += ' cm';
            if (dato == 'peso') result[dato] += ' kg';
        }
    }
    return result;
}