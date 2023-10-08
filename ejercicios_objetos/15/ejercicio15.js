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
const extraeInformacion = (objeto) =>
  Object.fromEntries(
    Object.entries(objeto)
      .filter(
        (parClaveValor) =>
          parClaveValor[0] == "nombre" ||
          parClaveValor[0] == "apellido" ||
          parClaveValor[0] == "tamano" ||
          parClaveValor[0] == "peso"
      )
      .map((parCV) =>
        parCV[0] == "peso"
          ? [parCV[0], parCV[1] + " kg"]
          : parCV[0] == "tamano"
          ? [parCV[0], parCV[1] + " cm"]
          : parCV
      )
  );

/*
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
*/
