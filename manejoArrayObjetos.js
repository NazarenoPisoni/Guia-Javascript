function ordenarNumeros(array) {
    return array.sort();
}

const numeros = [4, 6, 1, 7, 3];
console.log(ordenarNumeros(numeros));

function eliminarEstudiante(array, nombre) {
    const nuevoArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i].nombre != nombre){
            nuevoArray.push(array[i]);
        }
    }

    return nuevoArray;
} 

const estudiantes = [{nombre: "Nazareno", edad: 32}, {nombre: "Diego", edad: 30}, {nombre: "Laura", edad: 40}];
console.log(eliminarEstudiante(estudiantes, "Nazareno"));

class Carrito {
    constructor() {
        this.productos = [];
    }
}

function totalCarrito(array) {
    let total = 0;
    for(let i=0; i<array.length; i++){
        total += array[i].precio;
    }

    return total;
}

const productos = [{id: 1, nombre: "Televisor", precio: 240000}, {id: 2, nombre: "Lavarropas", precio: 300000}, {id: 3, nombre: "Impresora", precio: 60000}];
console.log("El total de la compra es de: $" + totalCarrito(productos));