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
    set nombre(nuevoNombre){
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

console.log(player1); 
console.log(player2);

console.log(player1.saludar());
console.log(player2.saludar());