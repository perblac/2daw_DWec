/* ------------------ Ejercicio 2: Operaciones Aritméticas ------------------ */

// Crea una función que realice operaciones matemáticas de forma asíncrona. Debe aceptar dos números y una cadena que indique la operación ('sumar', 'restar', 'multiplicar', 'dividir'). La función debe devolver una promesa que se resuelva con el resultado de la operación o se rechace si ocurre un error, como la división por cero.

const operar = (num1, num2, operacion) => {
    const promesa = new Promise((resolve, reject) => {
        let result = 0;
        switch(operacion) {
            case 'sumar':
                result = num1 + num2;
                if (typeof(num1) !== "number" || typeof(num2) !== "number") {
                    reject("Error en la operación de suma: algún operando no es un número");
                }
                if (typeof(result) !== "number") {
                    reject("Error en la operación de suma");
                }
                resolve(result);
                break;
            case 'restar':
                result = num1 - num2;
                if (typeof(num1) !== "number" || typeof(num2) !== "number") {
                    reject("Error en la operación de resta: algún operando no es un número");
                }
                if (typeof(result) !== "number" || typeof(result) === NaN ) {
                    reject("Error en la operación de resta");
                }
                resolve(result);
                break;
            case 'multiplicar':
                result = num1 * num2;
                if (typeof(num1) !== "number" || typeof(num2) !== "number") {
                    reject("Error en la operación de multiplicación: algún operando no es un número");
                }
                if (typeof(result) !== "number" || typeof(result) === NaN ) {
                    reject("Error en la operación de multiplicación");
                }
                resolve(result);
                break;
            case 'dividir':
                result = num1 / num2;
                if (typeof(num1) !== "number" || typeof(num2) !== "number") {
                    reject("Error en la operación de división: algún operando no es un número");
                }
                if (num2 === 0) reject("División por cero");
                if (typeof(result) !== "number" || typeof(result) === NaN ) {
                    reject("Error en la operación de división");
                }
                resolve(result);
                break;
            default:
                reject("Operación desconocida (" + operacion + ")");
        }
    });
    return promesa;
}

const datos = [
    [5,7,'sumar'],
    [7,9,'restar'],
    [9,11,'multiplicar'],
    [11,13,'dividir'],
    ['5',7,'sumar'],
    [7,'a','restar'],
    [9,'patata','multiplicar'],
    [null,0,'dividir'],
    [9,0,'dividir'],
    [1,0,'potencia'],
]
datos.forEach(([num1,num2,operacion]) => operar(num1,num2,operacion)
                                         .then((result)=> console.log(`${operacion} ${num1} y ${num2} = ${result}`))
                                         .catch((error) => console.log(new Error(error)))
             );
