//02. OPERADORES DE ASIGNACIÓN

//Un solo signo igual se usa para asignar un valor pero nunca para comparar igualdad
let resultado = 5;
console.log(resultado);

//La variable "resultado" se suma así misma con el número 3
resultado += 3;
console.log(resultado);

//La variable resultado se resta así misma con el número 3
resultado -= 3;
console.log(resultado);


//Compara las variables o números
//2 es MAYOR QUE 3
console.log(2 > 3);

//3 es MAYOR QUE 2
console.log(3 > 2);

//3 es MENOR o IGUAL a 3
console.log(3 <= 3);

//3 es MAYOR o IGUAL a 3
console.log(3 >= 3);

//3 es igual a 3 como string comparando valores sin ser estrictos con el tipo de dato
console.log(3 == '3');

//3 es igual a 3 comparando de forma estricta que tanto el valor como el tipo de dato sean iguales
console.log(3 === 3);

//3 es DIFERENTE a 3 como string
console.log(3 != '3');

//3 es ESTRICTAMENTE DIFERENTE porque tiene otro tipo de dato
console.log(3 !== '3');
