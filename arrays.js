const frutas = ["Manzana", "Pera", "Uva", "Durazno"];
console.log(frutas[2]);

frutas.push("Sandía");
console.log(frutas);

function filtrarPares(myArray) {
    const pares = [];
    for(let i=0; i<myArray.length; i++){
        if(myArray[i] % 2 === 0){
            pares.push(myArray[i]);
        }
    }

    return pares;
}

const arrayNumeros = [3, 43, 2, 58, 23, 56, 88];
console.log(filtrarPares(arrayNumeros));
