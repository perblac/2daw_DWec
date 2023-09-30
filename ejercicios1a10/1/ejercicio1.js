/**
 * @author Ruben Perblac
 * @description Suma de elementos de 2 arrays
 */

/**
 * 
 * @param array arr1 
 * @param array arr2 
 * @returns array
 */
const sumarArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1))
        throw new Error(`El primer argumento no es un array (${arr1})`);
    if (!Array.isArray(arr2))
        throw new Error(`El segundo argumento no es un array (${arr2})`);
    if (arr1.length !== arr2.length)
        throw new Error('Los arrays tienen distinto tamaño');
    else {
        let arraySuma = [];
        for (let i = 0; i < arr1.length ; i++) {
            arraySuma.push(arr1[i] + arr2[i]);
        }
        return arraySuma;
    }    
};

/* // Con otros for:

// for ... in
const sumarArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1))
        throw new Error(`El primer argumento no es un array (${arr1})`);
    if (!Array.isArray(arr2))
        throw new Error(`El segundo argumento no es un array (${arr2})`);
    if (arr1.length !== arr2.length)
        throw new Error('Los arrays tienen distinto tamaño');
    else {
        let arraySuma = [];
        for (const indice in arr1) {
            arraySuma.push(arr1[indice] + arr2[indice]);
        }
        return arraySuma;
    }    
};

// for ... of + .entries()
const sumarArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1))
        throw new Error(`El primer argumento no es un array (${arr1})`);
    if (!Array.isArray(arr2))
        throw new Error(`El segundo argumento no es un array (${arr2})`);
    if (arr1.length !== arr2.length)
        throw new Error('Los arrays tienen distinto tamaño');
    else {
        let arraySuma = [];
        for (const [indice1,valor1] of arr1.entries()) {
            for (const [indice2,valor2] of arr2.entries()) {
                if (indice1 === indice2) {
                    arraySuma.push(valor1 + valor2);
                }
            }            
        }
        return arraySuma;
    }    
};

*/