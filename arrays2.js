const numeros = [24, 43, 73, 23, 63, 76, 77, 22];

function buscarMenor(array) {
    let menor = array[0];
    for(let numero of array){
        if(numero < menor){
            menor = numero;
        }
    }

    return menor;
}

function buscarMayor(array) {
    let mayor = array[0];
    for(let numero of array){
        if(numero > mayor){
            mayor = numero;
        }
    }

    return mayor;
}

var menor = buscarMenor(numeros);
var mayor = buscarMayor(numeros);
console.log("El menor numero del array es: " + menor);
console.log("El mayor numero del array es: " + mayor);

function buscarValor(array, valor) {
    for(let i=0; i<array.length; i++){
        if(array[i] === valor){
            return i;
        }
    }

    return null;
}

var buscado = buscarValor(numeros, 23);
if(buscado){
    console.log("El valor ingresado esta en el índice " + buscado + " del array.");
}
else {
    console.log("El valor ingresado no existe en el array.");
}

const numeros2 = [10, 20, 10, 56, 30, 40, 30];

function eliminarDuplicados(array) {
    const arrayUnico = [];
    for(let i=0; i<array.length; i++){
        if(!arrayUnico.includes(array[i])){
            arrayUnico.push(array[i]);
        }
    }

    return arrayUnico;
}

console.log(eliminarDuplicados(numeros2));

function eliminarValor(array, valor) {
    const newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] !== valor){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(eliminarValor(numeros2, 10));

function combinarArrays(array1, array2){
    const newArray = [];
    const arrayA = array1.sort();
    const arrayB = array2.sort();
    for(let numero of arrayA){
        if(!newArray.includes(numero)){
            newArray.push(numero);
        }
    }
    for(let numero of arrayB){
        if(!newArray.includes(numero)){
            newArray.push(numero);
        }
    }

    return newArray;
}

const arrayUnido = combinarArrays(numeros, numeros2);
console.log(arrayUnido);

function contarPalabras(parrafo, palabra){
    const palabras = parrafo.split(" ");

    let contador = 0;

    for(const word of palabras){
        if(word === palabra){
            contador++;
        }
    }

    return contador;
}

const oracion1 = "La casa es naranja y las ventanas de la casa son del mismo color de la casa";
console.log(contarPalabras(oracion1, "casa"));

const jugadores = [{nombre: "Lionel Messi", edad: 36, equipo: "Inter Miami"}, {nombre: "Neymar", edad: 31, equipo: "PSG"}, {nombre: "Ehrling Haaland", edad: 22, equipo: "Manchester City"}];

//Ordenados por edad
jugadores.sort((a, b) => a.edad - b.edad);
console.log(jugadores);