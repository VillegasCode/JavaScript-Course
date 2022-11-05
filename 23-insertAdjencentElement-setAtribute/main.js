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
const parrafoExtra = document.createElement('p');
//Agregamos contenido a los 2 párrafos
parrafoSeis.innerHTML = 'Párrafo 6 creado con innerHTML y agregado con append() junto al párrafo 7';
parrafoSiete.innerHTML = 'Párrafo 7 creado con innerHTML y agregado con append() junto al párrafo 6';
parrafoCero.innerHTML = 'Párrafo 0';
parrafoExtra.innerHTML = 'Párrafo EXTRA';

//Publicamos o añadimos en el index.html los 2 párrafos con su respectivo contenido
elementoPadre.append(parrafoSeis, parrafoSiete);
elementoPadre.insertBefore(parrafoCero, parrafoUno);
elementoPadre.insertBefore(parrafoSiete, parrafoDos);

//insertAdjacentElement se puede usar con cualquiera de estos 4 párametros
//beforebegin (Se ubicará antes del inicio de la etiqueta padre)
//afterbegin (Se ubicará justo después del inicio de la etiqeuta padre)
//beforeend (Se ubicará antes del cierre de la etiqueta padre)
//afterend (Se ubicará después de la etiqueta de cierre padre, quedando fuera de dicha etiqueta)
elementoPadre.insertAdjacentElement("afterbegin", parrafoExtra);

//Agregamos ATRIBUTOS como nombres de CLASES y ID dentro de las etiquetas
parrafoExtra.setAttribute('class', 'parrafos');
parrafoCero.setAttribute('id', 'parrafoCero');
parrafoCuatro.setAttribute('class', 'dinamicos');

//Creación de Párrafos 8,9,10,11 y 12 de forma automática usando 2 arrays

//Creamos un arreglo que contenga los números en letras
let numEnLetra = ['Ocho', 'Nueve', 'Diez', 'Once', 'Doce'];
let parrafosDinamicos = new Array();

for (i=0; i < numEnLetra.length; i++) {
    //Creamos la etiqueta 'p' y la almacenamos en un array
    parrafosDinamicos[i] = document.createElement('p');
    //Creamos una variable y le sumamos 8 al valor de i para que esté acorde con la numeración del párrafo creado
    let numParrafo = i + 8;
    //En nuestro array parrafosdinamicos en la posición de i añadimos nuestro texto
    parrafosDinamicos[i].innerHTML = 'Párrafo ' + numParrafo;
    //Le añadimos los atributos de 'class' y su nombre 'dinamicos' a la etiqueta 'p'
    parrafosDinamicos[i].setAttribute('class', 'dinamicos');
    //Creamos una variable que almacenará el nombre automático que se generará al concatenar el string 'parrafo' + el array numEnLetra en su respectivo índice
    let nombreParrafo = 'parrafo' + numEnLetra[i];
    //Añadimos el atributo de 'id' + lo que contiene la variable nombreParrafo
    parrafosDinamicos[i].setAttribute('id', nombreParrafo);
    //Publicamos en nuestro index.html en la clase PADRE con el método 'append' el texto que está almacenado en el array parrafosDinamicos
    elementoPadre.append(parrafosDinamicos[i]);
}

elementoPadre.insertBefore(parrafosDinamicos[4], parrafoCinco);
elementoPadre.insertAdjacentElement("afterbegin",parrafosDinamicos[2]);
elementoPadre.insertAdjacentElement("beforeend",parrafosDinamicos[0]);
elementoPadre.insertBefore(parrafoSeis, parrafosDinamicos[3]);
elementoPadre.insertBefore(parrafoCinco, parrafosDinamicos[0]);

parrafoSiete.setAttribute('id','parrafoSiete');