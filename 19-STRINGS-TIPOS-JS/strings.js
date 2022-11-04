//STRINGS
let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

let declaracion = 'Mi lenguaje favorito es "Javascript".';
console.log(declaracion);

let compras = `lista de compras:
* Aceite
* Arroz
* Carne
* Frutas`;
console.log(compras);

let compras2 = "lista de compras: \n* Aceite \n* Arroz \n* Carne \n* Frutas";
console.log(compras2);

//TEMPLATE STRINGS
let edad = 15;
console.log(`Roberto tiene ${edad} años.`);
console.log("Roberto tiene " + edad + " años.")

//LARGO DEL STRING
let saludo = 'Hola mundo!';
console.log(saludo.length);

//ACCEDIENDO A CARACTERES EN UNA POSICIÓN ESPECÍFICA
console.log(saludo[10]);

saludo = 'hola Mundo!';
console.log(saludo[0]);

//Cambiando entre MAYÚSCULAS y minúsculas
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//SUBCADENAS - Con indexOf te muestra la posición exacta del string
let frase = 'HTML es un lenguaje de marcado y Javascript es un lenguaje de programación';
console.log(frase.indexOf('HTML'));
console.log(frase.indexOf('lenguaje'));
//Te muestra la posición de la palabra si es que existe a partir de la posición 6
console.log(frase.indexOf('es', 6));

//Cuando el resultado es -1 significa que no se encontró dicha palabara en la subcadena
console.log(frase.indexOf('css'));

//lastIndexOf empieza a contar de atrás hacia delante
console.log(frase.lastIndexOf('es'));

//includes para obtener un valor TRUE or FALSE
console.log(frase.includes('lenguaje'));


//SUBSTRINGS
let lenguaje = 'Javascript';
console.log(lenguaje.substring(2,4));

console.log(lenguaje.substr(2,4));


//MÉTODO TRIM  y REPEAT para eliminar espacios en blanco
let lenguaje1 = ' Javascript y CSS ';
lenguaje1 = lenguaje1.trim();
console.log(lenguaje1);

//REPEAT
console.log(lenguaje1.repeat(5));