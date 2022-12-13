"use strict";
let message = "Hello world";
console.log(message);
class Persona {
    constructor(nombre, apellido, añoNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
    edad(añoActual) {
        return (añoActual - this.añoNac);
    }
}
let persona = new Persona("Enzo", "Bautista", 2001);
console.log(persona.toString());
console.log(persona.edad(2022));