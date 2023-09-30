/**
 * @user Ruben Perblac
 * @description Combina dos objetos en uno solo
 * 
 */

/**
 * 
 * @param object obj1 
 * @param object obj2 
 * @returns object
 */
const combinarObjetos = (obj1,obj2) => {
    const resultado = {};
    Object.assign(resultado,obj1);
    Object.assign(resultado,obj2);
    return resultado;    
}