//Crear funciones
function saludoInicial(name = 'Carlos') {
    document.write(`Hola, mi nombre es ${name}<br>`);
}

saludoInicial('Steve');
saludoInicial('Rosa');
saludoInicial();
saludoInicial('Erick');

//Variable declara fuera de la función sumarNumeros
let variableEjemplo = 10;

function sumarNumeros(a, b) {
    //Variable repetida declarada dentro de la función sumarNumeros
    let variableEjemplo = 1;
    let suma = a + b + c;
    document.write(suma + "<br>");
}

sumarNumeros(8, 30);
document.write(variableEjemplo);

function restarNumeros(a, b) {
    let resta = a - b;
    return(resta); //Con return la función se finaliza y devuelve un resultado
}

restarNumeros(40, 15);
document.write(restarNumeros(40, 15));

let resultado = restarNumeros(52, 13);
document.write(resultado);