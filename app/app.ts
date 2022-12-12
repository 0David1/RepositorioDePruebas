let message: string = "Hello world";
console.log(message);


class Persona{
    private nombre: string;
    private apellido: string;
    private añoNac: number;
  
    constructor(nombre: string, apellido: string, añoNac: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.añoNac = añoNac;
    }
  
    public toString() :string{
      return this.nombre +" "+ this.apellido;
    }
  
    public edad(añoActual: number){
      return (añoActual-this.añoNac);
    }
  }
  
  let persona = new Persona("Enzo", "Bautista", 2001)
  console.log(persona.toString())
  console.log(persona.edad(2022))