//Ciclo FOR

for (let cont = 1; cont <= 100; cont++) {
    if(cont == 80) {
        break; //Así rompemos el ciclo con un break
    }
    document.write(cont + ' ');
}

//Como Saltar el Ciclo 1 sola vez, esto nos muestra números del 0 hasta el 100 y se salta
//el número 80
for(let i = 0; i <= 100; i++) {
    if (i == 80) {
        continue; //Con continue nos saltamos el bucle cuando se cumple la condición 1 sola vez y luego continuamos
    }
    document.write(i + ' ');
}