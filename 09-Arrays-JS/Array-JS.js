//Arreglos en JS (ARRAYS)

let variable = 5;

//Sintaxis para declarar un arreglo
let arreglo = [];

//Forma poco usual de declarar un arreglo
let arreglo2 = new Array();

//Elementos iniciales de un arreglo que se llama cursos
let cursos = ['HTML5', 'CSS3', 'JavaScript'];

//Obtener un valor de un arreglo
console.log(cursos);
console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos[2]);

//Agregando un nuevo elemento al Array cursos en la posición número 3,4 y 8
cursos[3] = 'PHP';
cursos[4] = 'Python';
cursos[8] = 'C#';

//Ver la cantidad de elementos que hay en un arreglo
console.log(cursos.length);

for (i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}


//TIPOS DE DATOS EN UN ARREGLO
let nuevoArreglo = ['Java', true, 12, function(){alert('hello')}, {nombre: 'Juan'}]

//MÉTODOS POP / PUSH / SHIFT / UNSHIFT
//UNSHIFT: Permite añadir un elemento al inicio de un arreglo
//SHIFT: Quita el primer elemento al inicio de un arreglo
//PUSH: Agrega un elemento al final del arreglo
//POP: Quita un elemento al final del arreglo

let numeros = ['uno',
                'dos',
                'tres'
];
console.log(numeros);
numeros.push('cuatro'); //PUSH: Agrega un elemento al final del arreglo
console.log(numeros);
numeros.pop(); //POP: Quita un elemento al final del arreglo
console.log(numeros);
numeros.unshift('cero'); //UNSHIFT: Permite añadir un elemento al inicio de un arreglo
console.log(numeros);
numeros.shift(); //SHIFT: Quita el primer elemento al inicio de un arreglo
console.log(numeros);

//ARREGLOS MULTIDIMENSIONALES
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
//El primer índice se usa para indicar la posición del array y
//el 2do índice se usa para señalar el elemento que se encuentra dentro de la 1ra posición
console.log(matriz[1][2]);
