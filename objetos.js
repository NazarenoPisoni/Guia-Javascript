var persona = { nombre: "Nazareno", edad: 32, profesion: "Programador"};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

var consola = new Producto("PlayStation 5", 500000, 20);
console.log(consola.nombre);
console.log(consola.precio);
console.log(consola.stock);

class Pelicula {
    constructor(titulo, director, anio){
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }
}

var pelicula1 = new Pelicula("El Padrino", "Francis Ford Coppola", 1980);
console.log(pelicula1.titulo);
console.log(pelicula1.director);
console.log(pelicula1.anio);