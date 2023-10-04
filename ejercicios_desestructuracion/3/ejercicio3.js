/**
 * @author Ruben Perblac
 * @description utiliza la desestructuración para extraer las propiedades primerNumero y segundoNumero
 *  en variables separadas. Además a la vez, la variable segundoNumero se debe llamar secondNumber.
 */

const numeros = {
  data: {
    primerNumero: 10,
    segundoNumero: 20,
  },
};

let {
  data: { primerNumero, segundoNumero: secondNumber },
} = numeros;
