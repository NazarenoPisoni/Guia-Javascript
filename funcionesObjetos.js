class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

function crearPersona(nombre, edad){
    let persona = new Persona(nombre, edad);

    return persona;
}

var persona1 = crearPersona("Nazareno", 32);
console.log(persona1.nombre);
console.log(persona1.edad);

function obtenerInfo(Persona) {
    return "Nombre: " + Persona.nombre + " , Edad: " + Persona.edad;
}

console.log(obtenerInfo(persona1));


