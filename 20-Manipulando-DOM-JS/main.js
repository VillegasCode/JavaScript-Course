//MANIPULANDO EL DOM para cambiar, agregar, eliminar, modificar elementos HTML
//Podemos manipular elementos HTML por el ID, nombre de la clase,  nombre de la etiqueta

//Seleccionando Elementos

//Por ID
let elementoPorId = document.getElementById('parrafo1');

//MODIFICAMOS CONTENIDO CON LA PROPIEDAD innerHTML
elementoPorId.innerHTML = 'HTML';


//Por nombre de la Clase
let elmentosPorClase = docuen.getElementsByClassName('parrafos');
console.log(elementosPorClase.length);

//MODIFICAMOS CONTENIDO CON LA PROPIEDAD innerHTML
elementosPorClase[1].innerHTML = 'CSS';

//Por Etiqueta
let elementosPorEtiquetas = document.getElementsByTagName('p');
console.log(elementosPorEtiquetas.length);

//MODIFICAMOS CONTENIDO CON LA PROPIEDAD innerHTML
elementosPorEtiquetas[2].innerHTML = 'Javascript';

//MODIFICANDO ESTILOS
elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementosPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementosPorId.style.textAlign = 'center';