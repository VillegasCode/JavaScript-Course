//El evento se coloca sin paréntesis porque el click lo activará
saludoBtn.addEventListener('click', saludo);

//Remover Event Listener
//saludoBtn.removeEventListener('click', saludo);

saludoBtn1.addEventListener('contextmenu', ()=>{
    console.log('Haz hecho clic derecho');
});

saludoBtn2.addEventListener('mouseover', ()=>{
    console.log('Haz pasado el mouse encima');
});

//Botón para capturar eventos
btnEvento.addEventListener('click', capturarEvento);

function saludo() {
    console.log("Hola desde función externa");
}

function capturarEvento(event) {
    //Podemos hacer que imprima cualquier propiedad que deseemos solo debemos cambiar la propiedad en vez de baseURI puede ser innerHTML, id, type, tabIndex
    console.log("baseURI = " + event.target.baseURI);
    console.log("id = " + event.target.id);
    console.log("tabIndex = " + event.target.tabIndex);
}