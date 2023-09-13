const estudiantes = [{nombre: "Nazareno", edad: 32, promedio:  8.66},
    {nombre: "Nicolás", edad: 33, promedio: 7.33},
    {nombre: "Rodrigo", edad: 28, promedio: 9}];

function buscarEstudiante(array, nombre){
    for(let i=0; i<array.length; i++){
        if(array[i].nombre === nombre){
            return array[i];
        }
    }

    return null;
}    

var estudianteEncontrado = buscarEstudiante(estudiantes, "Nazareno");
if(estudianteEncontrado){
    console.log(estudianteEncontrado);
}
else {
    console.log("No se encontró el estudiante buscado");
}

function promedioClase(array) {
    let suma = 0;
    for(let i=0; i<array.length; i++){
        suma += array[i].promedio;
    }

    return suma / array.length;
}

var promedio = promedioClase(estudiantes);
console.log("El promedio general de todos los estudiantes es: " + promedio);