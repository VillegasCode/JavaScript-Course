//OBJETO DATE nos proporciona día, mes, añi, fecha, hora, minutos, segundos, GMT
let fechaActual = new Date();
console.log(fechaActual);

//Para ver el dia actual
console.log(fechaActual.getDate());

//Para ver el mes actual (Enero es el mes 0 y Diciembre es el mes 11)
console.log(fechaActual.getMonth());

//Para ver el año
console.log(fechaActual.getFullYear());

//Para ver el día de la semana (Día domingo es 0 y el día sábado es el 6)
console.log(fechaActual.getDay());

//TIMESTAMP: 01 Enero 1970 -> Actualidad (Es el número de milisegundos que han transcurrido desde 1970 hasta la actualidad)
console.log(fechaActual.getTime());

//Es el número de milisegundos que han transcurrido desde 1970 hasta la actualidad No tiene soporte en IE v.8 hacia abajo
console.log(Date.now());

//Es el número de milisegundos que han transcurrido desde 1970 hasta la actualidad No tiene soporte en IE v.8 hacia abajo
console.log(+fechaActual);

//Es para interpretar los milisegundos y saber exactamente que día, mes, año, hora cayó proporcionando la fecha con timestamp
let fechaConTimestamp = new Date(1234567890123);
console.log(fechaConTimestamp);

//Colocar fecha por STRING
let fechaConString = new Date("jan 23 2021");
console.log(fechaConString);


//Insertar fecha con Parámetros
//Date(año, mes, fecha, hora, minutos, segundos, ms)
//El año y el mes son siempre obligatorios
let fechaConParametros = new Date(2022, 1, 25, 15, 20, 35, 45);
console.log(fechaConParametros);

//SETTERS
fechaConParametros.setFullYear(1980);
console.log(fechaConParametros);