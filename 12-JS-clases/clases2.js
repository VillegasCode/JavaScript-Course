//Clase Constructora de 3 personas y su mascota

//CLASE CONSTRUCTORA
class Jugadores {
    //ATRIBUTOS PARA NUESTRA CLASE CONSTRUCTORA
    constructor (nombre, genero, colorRopa, accesorios) {
        this._nombre = nombre;
        this._genero = genero;
        this._colorRopa = colorRopa;
        this._accesorios = accesorios;
    }

    //MÉTODOS (Acciones que pueden hacer nuestros Jugadores)
    bailar() {}
    correr() {}
    saltar() {}
    saludar() {
        return `Hola me llamo ${this._nombre}, mi género es ${this._genero}, mi color de ropa favorito es ${this._colorRopa} y me gusta usar principalmente ${this._accesorios}`;
    }

    //Usamos GET para llamar a los atributos de nuestra clase constructora como si fueran MÉTODOS del objeto creado
    get generoJugador() {
        return this._genero;
    }

    //Usamos SET para MODIFICAR el valor del atributo de nuestra clase constructora como si fuera un método del Objeto creado
    set generoJugador(nuevoGenero) {
        return this._genero = nuevoGenero;
    }
}

//Creamos Instancias de objetos a partir de la clase JUGADORES
let Carlos = new Jugadores('Carlos','Masculino','Vino','Collares, Pulseras, Medallitas y Anillos');
let Erick = new Jugadores('Erick','BI','Blanco','Reloj y collar');
let Princesa = new Jugadores('Amaranta','Femenino','Amarillo','Collares, pulseras, aretes y anillos');
let Mascota = new Jugadores('Lukas','Lesbiana','Azul','Collar');


//COMPROBAMOS QUE FUNCIONAN USANDO LA CONSOLA

//Usamos el método GET ya creado anteriormente
console.log(Carlos.generoJugador);
console.log(Erick.generoJugador);
console.log(Princesa.generoJugador);
console.log(Mascota.generoJugador);

//Usamos el método SET ya creado anteriormente para cambiar el valor de un atributo

//Haciendo la corrección respectiva del valor del atributo Genero
console.log(Erick.saludar());
console.log(Erick.generoJugador);
Erick.generoJugador = 'Masculino';
console.log(Erick.generoJugador);

//Haciendo la corrección respectiva del valor del atributo Genero
console.log(Mascota.saludar());
console.log(Mascota.generoJugador);
Mascota.generoJugador= 'Masculino';
console.log(Mascota.generoJugador);

console.log(Carlos.saludar());
console.log(Erick.saludar());
console.log(Princesa.saludar());
console.log(Mascota.saludar());