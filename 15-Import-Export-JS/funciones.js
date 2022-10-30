//Asignamos una variable se solo lectura con la palabra reservada const y la exportamos
export const PI = 3.14;

//Exportamos la función con la palabra export y la asignamos como función por defecto con la palabra default
export default function area(radio){
    return PI * radio**2;
}

//Exportamos la función perimetro
export function perimetro(radio) {
    return 2*PI*radio;
}