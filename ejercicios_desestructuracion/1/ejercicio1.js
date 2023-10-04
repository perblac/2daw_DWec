/**
 * @author Ruben Perblac
 * @description Utiliza la desestructuración para extraer las propiedades nombre y edad
 *  en variables separadas. Después crea un objeto con dichas propiedades y los valores obtenidos.
 */

const persona = {
    nombre: "Juan",
    edad: 30,
  };

  let {nombre, edad} = persona;

  const objeto = {
    nombre,
    edad,
  };