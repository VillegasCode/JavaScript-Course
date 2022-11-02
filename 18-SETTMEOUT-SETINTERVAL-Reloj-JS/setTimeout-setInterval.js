// setTimeout - Ejecuta una funcion DESPUÉS DE CIERTO TIEMPO
function saludo(nombre){
    console.log(`Hola ${nombre}, Buenos días amigos`);
}

//Ejecutar la función y mostrar en consola después de 5 segundos, si la función tiene argumentos hay que colocarlos después del tiempo separado por comas
//El setTimeout lo capturamos en una variable

let temporizadorID = setTimeout(saludo, 5000, 'David');

//Cancelar un setTimeout
clearTimeout(temporizadorID);



//setInterval(funcion, tiempo en ms, argumento1, argumento2)
//setInterval ejecuta una función CADA CIERTO TIEMPO
// function conteo(){
//     let numero = 5;
//     console.log(`Lanzamiento en ${numero} segundos`);
//     numero--;
//     if (numero == 0) {
//         clearInterval(lanzamiento);
//     }
// }

// let lanzamiento = setInterval(conteo, 1000);


// //Usando temporizados con funciones flecha
// let lanzamiento2 = setInterval(()=>{
//     let numero2 = 7;
//     console.log(`Lanzamiento 2 en ${numero2} segundos`);
//     numero2--;    
//     if (numero2 == 0) {
//         clearInterval(lanzamiento2);
//     }
// }, 1000);


//setTimeout anidado
let numero3 = 0;

let incrementoID = setTimeout(function incremento(){
    console.log(numero3);
    numero3++;
    incrementoID = setTimeout(incremento, 1000);
}, 1000);