class ListaDeTareas {
    constructor(){
        this.lista = [];
    }

    agregarTarea(tarea) {
        this.lista.push(tarea);
    }

    verTareas() {
        return this.lista;
    }

    completarTarea(nombreTarea){
        for(let tarea of this.lista){
            if(tarea.nombre === nombreTarea){
                tarea.completada = true;
            }
        }
    }

    listarTareasPendientes(){
        let listaPendientes = [];
        for(let tarea of this.lista){
            if(tarea.completada === false){
                listaPendientes.push(tarea);
            }
        }
        return listaPendientes;
    }
}

const lista = new ListaDeTareas();
const tarea1 = {nombre: "Comprar Verduras", completada: false};
const tarea2 = {nombre: "Limpiar Heladera", completada: false};
const tarea3 = {nombre: "Barrer Living", completada: false};
lista.agregarTarea(tarea1);
lista.agregarTarea(tarea2);
lista.agregarTarea(tarea3);
console.log(lista.verTareas());
lista.completarTarea("Comprar Verduras");
console.log(lista.verTareas());
console.log("Tareas pendientes: ");
console.log(lista.listarTareasPendientes());