//Lectura de Nodos

//Por ID
//let elementoPorID = document.getElementById('parrafo1');
let elementoPorID = document.querySelector('#parrafo1');
//Modificando el contenido de dicho nodo
elementoPorID.innerHTML = 'Suscríbete';


//Por nombre de la clase
//let elementosPorClase = document.getElementsByClassName('parrafos');
//Esto trae el primer elemento de la clase cuando hay varias clases
// let elementosPorClase = document.querySelector('.parrafos');
// console.log(elementosPorClase);

//querySelectorAll para que nos traiga un listado (NodeList)
elementosPorClase = document.querySelectorAll('.parrafos');
console.log(elementosPorClase);
//Usar un operador de propagación (agregar 3 puntos suspensivos antes del NODELIST) para convertir nuestro node list en un arreglo
const arreglo = [...elementosPorClase];
console.log(arreglo);
arreglo[1].innerHTML = 'a VillegasCode';

//Por Etiqueta
//let elementosPorEtiquetas = documen.getElementsByTagName('p');
let elementosPorEtiquetas = document.querySelectorAll('p');
elementosPorEtiquetas[2].innerHTML = 'ahora!';


let elemento1H2 = document.getElementsByTagName('h2');
elemento1H2[0].innerHTML = 'PRUEBA';

//Cambiando el contenido de la segunda etiqueta H2 del documento index.html
let elementoH2 = document.querySelectorAll('h2');
//Indicamos la posición de la etiqueta que queremos cambiar
elementoH2[1].innerHTML = 'Carlos';
elementoH2[0].innerHTML = 'querySelector' + '<br>' + '& querySelectorAll';