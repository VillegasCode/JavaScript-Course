//CREAR OBJETOS

let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true
}
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.estudiante);

//AGREGAR PROPIEDADES
usuario.carrera = 'Contabilidad';
console.log(usuario);
console.log(usuario.carrera);

//ELIMINAR PROPIEDADES
delete usuario.edad;
console.log(usuario);

//CONSULTA DE PROPIEDADES PARA VER SI EXISTEN
console.log(usuario.hasOwnProperty('nombre'));
console.log(usuario.hasOwnProperty('carrera'));
console.log(usuario.hasOwnProperty('apellido'));

//MÉTODO CORCHETES
let usuario1 = {
    nombre: 'Yorgi',
    edad: 30,
    estudiante: false,
    'tiene pasaporte': true,
    idiomas: {
        nativo: 'español',
        extranjero: {
            ingles: 'avanzado',
            aleman: 'medio',
            frances: 'bajo'
        }
    }
}

console.log(usuario1['estudiante']);
console.log(usuario1['tiene pasaporte']);
console.log(usuario1.idiomas.extranjero.frances);
console.log(usuario1.idiomas['extranjero'].frances);