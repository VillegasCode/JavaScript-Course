//Lectura de Nodos

//Por ID
//let elementoPorID = document.getElementById('parrafo1');
let elementoPorID = document.querySelector('#parrafo1');
//Modificando el contenido de dicho nodo
elementoPorID.innerHTML = 'Suscríbete';


//Por nombre de la clase
//let elementosPorClase = document.getElementsByClassName('parrafos');
//Esto trae el primer elemento de la clase cuando hay varias clases
let elementosPorClase = document.querySelector('.parrafos');
console.log(elementosPorClase);

//querySelectorAll para que nos traiga un listado (NodeList)
elementosPorClase = document.querySelectorAll('.parrafos');
console.log(elementosPorClase);