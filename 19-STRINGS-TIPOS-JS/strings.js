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

