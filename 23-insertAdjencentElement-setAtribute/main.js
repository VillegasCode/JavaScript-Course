//Seleccionamos elemento padre en el cuál queremos agregarnuestros párrafos
const elementoPadre = document.querySelector('.padre');

//Creamos un nuevo párrafo dinámicamente desde Javascript
//CREAR NODOS, agregamos una constante donde almacenar el nuevo párrafo
const parrafoCuatro = document.createElement('p');
//Agregamos contenido a nuestro párrafo pero aún no está añadido al HTML
const textoParrafoCuatro = document.createTextNode('Párrafo 4 agregado con createTextNode, ejemplo <h2>Esta es la diferencia</h2>');
//Agregamos nodos al HTML de la clase .padre
elementoPadre.appendChild(parrafoCuatro);
//Agregamos el contenido creado en textoParrafoCuatro al HTML
parrafoCuatro.appendChild(textoParrafoCuatro);


//OTRA FORMA DE CREAR NODOS EN JS Y AGREGAR CONTENIDO AL HTML
//Creando Párrafo 5

const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Párrafo 5 creado con innerHTML, ejemplo <h2>Esta es la diferencia</h2>' ;
elementoPadre.appendChild(parrafoCinco);


//Seleccionar hijo referencia
const parrafoUno = document.querySelector('p');
const parrafoDos = document.querySelector('#parrafo2');

//Otra forma de agregar nodos al html
//Creamos las etiquetas de los 2 nuevos párrafos
const parrafoSeis = document.createElement('p');
const parrafoSiete = document.createElement('p');
const parrafoCero = document.createElement('p');
//Agregamos contenido a los 2 párrafos
parrafoSeis.innerHTML = 'Párrafo 6 creado con innerHTML y agregado con append() junto al párrafo 7';
parrafoSiete.innerHTML = 'Párrafo 7 creado con innerHTML y agregado con append() junto al párrafo 6';
parrafoCero.innerHTML = 'Párrafo 0';

//Publicamos o añadimos en el index.html los 2 párrafos con su respectivo contenido
elementoPadre.append(parrafoSeis, parrafoSiete);
elementoPadre.insertBefore(parrafoCero, parrafoUno);
elementoPadre.insertBefore(parrafoSiete, parrafoDos);