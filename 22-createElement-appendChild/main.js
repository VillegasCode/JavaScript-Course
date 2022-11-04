//Creamos un nuevo párrafo dinámicamente desde Javascript
//CREAR NODOS, agregamos una constante donde almacenar el nuevo párrafo
const parrafoCuatro = document.createElement('p');

//Agregamos contenido a nuestro párrafo pero aún no está añadido al HTML
const textoParrafoCuatro = document.createTextNode('Párrafo 4 agregado dinámicamente');

//Seleccionamos elemento padre
const elementoPadre = document.querySelector('.padre');

//Agregamos nodos al HTML
elementoPadre.appendChild(parrafoCuatro);
//Agregamos el contenido creado al HTML
parrafoCuatro.appendChild(textoParrafoCuatro);