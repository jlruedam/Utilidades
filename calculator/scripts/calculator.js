var keyboard=document.getElementById("keyboard");
keyboard.addEventListener("click", prueba, false);

function prueba(e){
    console.log(e.path[0].value);
}




