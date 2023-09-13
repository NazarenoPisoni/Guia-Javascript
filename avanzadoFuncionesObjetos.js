class Calculadora {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar() {
        return this.num1 + this.num2;
    }

    restar() {
        return this.num1 - this.num2;
    }

    multiplicar() {
        return this.num1 * this.num2;
    }

    dividir() {
        return this.num1 / this.num2;
    }
}

function crearCalculadora(num1, num2){
    return new Calculadora(num1, num2);
}

const calculadora = crearCalculadora(4, 2);
console.log(calculadora.sumar());
console.log(calculadora.restar());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());

class CuentaBancaria {
    constructor(dinero) {
        this.dinero = dinero;
    }

    depositar(cantidad) {
        this.dinero += cantidad;
    }

    retirar(cantidad) {
        if(this.dinero >= cantidad){
            this.dinero -= cantidad;
        }
        else {
            console.log("No dispone de dinero suficiente para hacer el retiro");
        }
    }

    saldo() {
        return "Su saldo actual es de $" + this.dinero;
    }
}

function crearCuentaBancaria(saldo) {
    return new CuentaBancaria(saldo);
}

const cuenta1 = crearCuentaBancaria(100000);
cuenta1.depositar(50000);
console.log(cuenta1.saldo());
cuenta1.retirar(200000);
cuenta1.retirar(100000);
console.log(cuenta1.saldo());

class Libro {
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    detalles() {
        return "Titulo: " + this.titulo + " , Autor: " + this.autor + " , Páginas: " + this.paginas;
    }
}

const libro1 = new Libro("Cien Años de Soledad", "García Márquez", 590);
console.log(libro1.detalles());