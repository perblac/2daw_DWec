/**
 * @author Ruben Perblac
 * @description Eliminar duplicados de un array
 */

/**
 * 
 * @param array arr 
 * @returns array
 */

const eliminarDuplicados = (arr) => {
    if (!Array.isArray(arr))
        throw new Error(`El argumento no es un array (${arr})`);
    const arrayUnicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            arrayUnicos.push(arr[i]);
        }
    }
    return arrayUnicos;
};

/* // Otras opciones
function eliminarDuplicados(arr) {
    const arrayUnicos = []; // const arrayUnicos = new Array();
    for (const num of arr) {
        if (!arrayUnicos.includes(num)) {
            arrayUnicos.push(num);
        }
    }
    return arrayUnicos;
}

// El anterior en una linea:
function eliminarDuplicados(arr) {
    const arrayUnicos = []; // const arrayUnicos = new Array();
    for (const num of arr) !arrayUnicos.includes(num)?arrayUnicos.push(num):0;    
    return arrayUnicos;
}

// Con Set
const eliminarDuplicados = arr => [...new Set(arr)];
*/