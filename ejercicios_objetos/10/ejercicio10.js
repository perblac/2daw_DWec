/**
 * @author Ruben Perblac
 * @description Función que toma un objeto como argumento. Devuelve un objeto con todas las propiedades
 * del objeto original. excepto la propiedad con clave 'b'
 */

function todoMenosB(objeto) {
  const resultado = {};
  Object.assign(resultado, objeto);
  delete resultado.b;
  return resultado;
}
