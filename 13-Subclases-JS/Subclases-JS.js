//CLASES - JAVASCRIPT

//CLASE CONSTRUCTORA
class Player {
    constructor (nombre, colorSombrero) {
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    //MÉTODOS DE LA CLASE CONSTRUCTORA Player
    saltar() {}
    correr() {}
    saludar() {
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    //GET es un método que se usa para obtener el valor de un atributo de un objeto de la clase Player
    get nombre(){
        return this._nombre;
    }

    //SET es un método que usa para modificar el valor de un atributo de un objeto de la clase Player por un nuevo nombre
    set cambiarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

//Creamos instancias de objetos a partir de la clase Player
let player1 = new Player('MARIO','ROJO');
let player2 = new Player('LUIGI', 'VERDE');

//GET es un método que se usa para obtener valores del atributo de un objeto
console.log(player1.nombre);
console.log(player2.nombre);

//SET es un método que usa para modificar el valor de un atributo de un objeto
player1.nombre = 'ALBERTO';
console.log(player1.nombre);


//CREACIÓN DE UNA SUBCLASE

class Pet extends Player {
    constructor(nombre, colorSombrero, colorPiel) {
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }
    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }

    comer() {
        return 'Yo como manzanas';
    }

    //SOBREESCRIBIR UN MÉTODO DE LA CLASE PADRE EN LA CLASE HIJA
    saludar() {
        return super.saludar() + ' además soy una mascota';
    }
}

let pet1 = new Pet ('Yoshi', 'Invisible', 'Verde');
console.log(pet1);

console.log(pet1.nombre);
//USANDO SET PARA CAMBIAR DE NOMBRE
pet1.cambiarNombre = 'Rufus';
console.log(pet1.nombre);

//GET
console.log(pet1.colorPiel);
//SET
pet1.colorPiel = 'PURPURA';
console.log(pet1.colorPiel);

console.log(pet1.comer());
console.log(pet1.saludar());