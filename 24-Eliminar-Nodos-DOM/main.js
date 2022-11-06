//Seleccionar el Nodo Padre
const elementoPadre = document.querySelector('.padre');

//Crear el nodo hijo
const parrafoCuatro = document.createElement('p');
parrafoCuatro.innerHTML = 'Párrafo 4';

//Agregar el nodo hijo al padre
//elementoPadre.appendChild(parrafoCuatro);

//ELIMINAR NODO
const parrafoUno = document.querySelector('#parrafo1');

//RemoveChild
elementoPadre.removeChild(parrafoUno);


//ELIMINAR PÁRRAFO 2