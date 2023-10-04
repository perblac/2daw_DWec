/**
 * @author Ruben Perblac
 * @description Devuelve el valor de la propiedad cuya clave sea pais. Si no existiese dicha clave devolver : "No se encuentra"
 *
 */

// Objeto: { continente: "Europa", pais: "España"}

function dePais({ pais = "No se encuentra" }) {
  return pais;
}
