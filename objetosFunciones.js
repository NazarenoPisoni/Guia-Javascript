class Coche {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}

Coche.prototype.arrancar = function() {
    return "El " + this.marca + " " + this.modelo + " " + this.anio + " se ha puesto en marcha...";
}

Coche.prototype.detener = function() {
    return "El " + this.marca + " " + this.modelo + " " + this.anio + " se detuvo...";
}

var auto1 = new Coche("Audi", "A4", 2010);
console.log(auto1.arrancar());
console.log(auto1.detener());

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola soy " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

var persona1 = new Persona("Nazareno", 32);
console.log(persona1.saludar());

class Carrito {
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }
}

var compra1 = new Carrito();
compra1.agregarProducto({id: 1, nombre: "Impresora", precio: 50000});
compra1.agregarProducto({id: 2, nombre: "Notebook", precio: 250000});
compra1.agregarProducto({id: 3, nombre: "Monitor", precio: 70000});
console.log(compra1.productos);