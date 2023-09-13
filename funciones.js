function saludar(nombre) {
    return "Hola, buenos días " + nombre;
}

console.log(saludar("Nazareno"));

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(esPar(8));

function sumarArray(myArray) {
    let suma = 0;

    for(let i=0; i<myArray.length; i++){
        suma += myArray[i];
    }

    return suma;
}

const myArr = [10, 20, 30, 40, 50];
console.log(sumarArray(myArr));