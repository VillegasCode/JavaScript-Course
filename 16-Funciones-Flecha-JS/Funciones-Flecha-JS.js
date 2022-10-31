//FUNCIÓN CLÁSICA

function saludar(nombre) {
    return 'Hola ' + nombre;
}

console.log(saludar('David'));


//Función Anónima

let saludo = function(nombre) {
    return 'Saludos ' + nombre;
}

console.log(saludo('David'));


//FUNCIONES FLECHA () => {}

let saludo2 = nombre => 'Saludos ' + nombre;

let suma = (a,b) => a + b;

let obj = () => ({nombre: 'Bob', edad: 20});