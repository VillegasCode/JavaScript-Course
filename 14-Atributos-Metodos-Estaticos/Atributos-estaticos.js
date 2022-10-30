//ATRIBUTOS Y MÉTODOS ESTÁTICOS
class Mascota {
    //Atributo cola estático
    static cola = 'larga';
    //atributo pelaje normal
    pelaje = 'lacio';
    //atributo estático contadorMascota es para contar mascostas
    static contadorMascota = 0;
    constructor (nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
        this._numero = ++Mascota.contadorMascota;
    }
    get numeroCreacion() {
        return this._numero;
    }

    static saludo() {
        return 'mover la cola';
    }
}

let mascota1 = new Mascota('Bobby', 5);
let mascota2 = new Mascota('Lucas', 3);
let mascota3 = new Mascota('Laysha', 10);

console.log(Mascota.cola);
console.log(mascota1.pelaje);
console.log(Mascota.contadorMascota);

//Obteniendo el número de creación de cada objeto a través del método get 
//Que usa un atributo estático
console.log(mascota1.numeroCreacion);
console.log(mascota2.numeroCreacion);
console.log(mascota3.numeroCreacion);


//MÉTODOS ESTÁTICOS
console.log(Mascota.saludo());

//SUBCLASE HIJA DE LA CLASE PADRE MASCOTA
class Perro extends Mascota {
    //A los atributos de la clase padre le agregamos un atributo más o los que queramos
    constructor(nombre, edad, raza) {
        //Accedemos a los atributos de la clase padre con la palabra reservada super
        super(nombre, edad);
        //Agregamos el atributo adicional
        this._raza = raza;
    }
}

console.log(Perro.cola);
console.log(Perro.saludo());
console.log(Perro.contadorMascota);

let perro1 = new Perro('Rufus', 10, 'Dalmata');

console.log(Perro.contadorMascota);
console.log(perro1._nombre);
console.log(perro1._edad);
console.log(perro1._raza);