/**
 * @author Ruben Perblac
 * @description Utiliza la desestructuración para extraer la propiedad ciudad en una variable llamada lugar
 */

const direccion = {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345",
};

let { ciudad: lugar } = direccion;
