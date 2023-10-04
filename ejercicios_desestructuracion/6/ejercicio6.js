/**
 * @author Ruben Perblac
 * @description Utiliza la desestructuración para extraer las propiedades x y y en variables separadas
 *  y calcula la distancia euclidiana desde el origen (0,0).
 */

const punto = {
  x: 3,
  y: 4,
};

let { x, y } = punto;

//d(P,Q) = √((XQ – XP)^2 + (YQ – YP)^2 )
// para d(0,Q)  = √((XQ – 0)^2 + (YQ – 0)^2 )
//              = √(XQ^2 + YQ^2 )
function distanciaEuclidianaDesdeOrigen(x, y) {
  return (x ** 2 + y ** 2) ** (1 / 2);
}

console.log(distanciaEuclidianaDesdeOrigen(x, y));
