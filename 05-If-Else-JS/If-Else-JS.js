//HOW TO USE IF - ELSE en JS

//Usuario Ingresa la hora
// el sistema le saluda de acuerdo a las siguientes condiciones:
// hora 4 ~ 12 : Buenos dÃ­as
// hora 13 ~ 18 : Buenas Tardes
// resto de horas : Buenas noches

let hora = prompt('Ingresa la hora por favor:');

if (hora >= 4 && hora <= 12) {
    document.write('<h1>ð Buenos dÃ­as! ð</h1>');
} else if (hora >= 13 && hora <= 18) {
    document.write('<h1>ð Buenas Tardes ðð</h1>')
} else {
    document.write('<h1>ð¥± Buenas noches! ð</h1>');
}