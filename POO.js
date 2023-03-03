class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, dpto){
        super(nombre,sueldo);
        this.dpto = dpto;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} dpto: ${this.dpto}`;
    }
}

function determinarTipo(tipo){
console.log(tipo.obtenerDetalles());
if(tipo instanceof Gerente){
    console.log('Es un objeto de tipo gerente');
}
else if(tipo instanceof Empleado){
    console.log('Es un objeto de tipo empleado');
}
}


let empleado1 = new Empleado('juan', 3000);
//console.log(empleado1);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
//console.log(gerente1.obtenerDetalles);

determinarTipo(empleado1);
determinarTipo(gerente1);