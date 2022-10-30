//Importamos la función por defecto y le agregamos un nombre descriptivo
import calculoArea from './funciones.js'

//Importamos la función PERIMETRO y la variable constante PI
import {perimetro, PI, area} from './funciones.js';

document.write('area: ' + area(10));
document.write('perímetro: ' + perimetro(10));
document.write('PI: ' + PI);
document.write('Calculo Área: ' + calculoArea);
