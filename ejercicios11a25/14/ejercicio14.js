/**
 * @author Ruben Perblac
 * @description Devuelve todos los número entre dos numeros dados
 * 
 */

/**
 * 
 * @param number inicio 
 * @param number final 
 * @returns array 
 */
const rango = (inicio, final) => {
    const resultado = [];
    if (inicio <= final) {
        for (let i = inicio; i <= final; i++) {
            resultado.push(i);
        }
    } else {
        for (let i = inicio; i >= final; i--) {
            resultado.push(i);
        }
    }    
    return resultado;
};
