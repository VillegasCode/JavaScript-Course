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



//ELIMINAR NODE PÁRRAFO 2 - Forma 2
const parrafoDos = document.querySelector('#parrafo2');
//REMOVE
parrafoDos.remove();



//ELIMINAR NODE PÁRRAFO 3 - Forma 3
const parrafoTres = document.querySelector('#parrafo3');
//REPLACECHILD
elementoPadre.replaceChild(parrafoCuatro, parrafoTres);