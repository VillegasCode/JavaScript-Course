//El evento se coloca sin paréntesis porque el click lo activará
saludoBtn.addEventListener('click', saludo);

//Remover Event Listener
//saludoBtn.removeEventListener('click', saludo);

saludoBtn1.addEventListener('contextmenu', (event)=>{
    console.log('Haz hecho clic derecho en ' + event.target.innerHTML);
});

saludoBtn2.addEventListener('mouseover', (event)=>{
    console.log('Haz pasado el mouse encima de ' + event.target.innerHTML);
});

//Botón para capturar eventos
btnEvento.addEventListener('click', capturarEvento);

function saludo(event) {
    console.log("Hola desde función externa presionando el botón " +  event.target.innerHTML);
}

function capturarEvento(event) {
    //Podemos hacer que imprima cualquier propiedad que deseemos solo debemos cambiar la propiedad en vez de baseURI puede ser innerHTML, id, type, tabIndex
    console.log("baseURI = " + event.target.baseURI);
    console.log("id = " + event.target.id);
    console.log("tabIndex = " + event.target.tabIndex);
}