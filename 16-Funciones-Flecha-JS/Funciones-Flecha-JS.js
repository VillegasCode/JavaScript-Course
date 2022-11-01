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
console.log(saludo2('Wendorf'));

let suma = (a,b) => a + b;
console.log(suma(5,9));

let obj = () => ({nombre: 'Bob', edad: 20});
console.log(obj());