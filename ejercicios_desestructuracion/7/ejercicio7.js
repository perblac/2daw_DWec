/**
 * @author Ruben Perblac
 * @description Utiliza la desestructuración para extraer el nombre de la persona y el primer amigo de la lista.
 */

const persona = {
  nombre: "Carlos",
  amigos: ["Ana", "David", "Elena"],
};

let {
  nombre,
  amigos: [amigo],
} = persona;
