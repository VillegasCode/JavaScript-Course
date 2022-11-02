//EJERCICIO - Imprimir en pantalla la hora actualizada cada segundo

//Guardar en una variable la referencia a los elementos de nuestro documento HTML
let mostrarFecha = document.getElementById('fecha');
//el ID 'fecha' y 'reloj' están dentro de nuestra etiqueta <legend> en nuestro documento HTML
let mostrarReloj = document.getElementById('reloj');

//Creamos un nuevo objeto llamado fecha y instanciamos al objeto DATE
let fecha = new Date();

//Creamos un arreglo en español para que nos muestre los días de la semana en español
let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

//Creamos otro arreglo para los meses del año en español
let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];


//Para imprimir la fecha en pantalla llamamos a nuestro objeto mostrarFecha con innerHTML y usamos una TEMPLATE STRING para llamar a nuestros objetos y arreglos
mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;


setInterval(() => {
    //Tenemos que llamar cada vez a nuestro objeto hora para que se vaya actualizando cada segundo
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);