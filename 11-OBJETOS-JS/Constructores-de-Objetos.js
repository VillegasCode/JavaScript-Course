//CONSTRUCTORES DE OBJETOS
//Función constructora Disco
function Disco(artist, album, year){
    this.artist = artist;
    this.album = album;
    this.year = year;
}

//Instanciamos a nuestros objetos para que sean parte de la funcion constructora de Disco y le asignamos valores
let disco1 = new Disco('Radiohead', 'Kiad A', '2000');
let disco2 = new Disco('Tame Impala', 'Currents', 2015);
let disco3 = new Disco('Beach House', 'Bloom', 2012);
let disco4 = new Disco('Bjork', 'Volta', 2007);

//Nos muestra en consola el contenido de dichos objetos
console.log(disco1);
console.log(disco2);
console.log(disco3);
console.log(disco4);