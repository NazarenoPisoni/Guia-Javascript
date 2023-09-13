function duplicarArray(myArray) {
    const nuevoArray = [];
    for(let i=0; i<myArray.length; i++){
        nuevoArray.push(myArray[i] * 2);
    }

    return nuevoArray;
}

const arrayNumeros =  [1, 2, 3, 4, 5];
const arrayDuplicado = duplicarArray(arrayNumeros);
console.log(arrayDuplicado);

function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for(let i=cadena.length-1; i>=0; i--){
        cadenaInvertida += cadena[i];
    }

    return cadenaInvertida;
}

var cadena1 = "Hello World!";
console.log(invertirCadena(cadena1));

function filtrarPorLongitud(arrayPalabras, longitud) {
    const nuevoArray = [];
    for(let i=0; i<arrayPalabras.length; i++){
        if(arrayPalabras[i].length > longitud){
            nuevoArray.push(arrayPalabras[i]);
        }
    }

    return nuevoArray;
}

const paises = ["Argentina", "Brasil", "Paraguay", "Uruguay"];
console.log(filtrarPorLongitud(paises, 8));