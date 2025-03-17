let listaDeAmigos = [];

//Function to add names//
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    if (nombres==='') {
       alert('Enter a valid name');
    } else {
        if (listaDeAmigos.includes(nombres)) {
            alert('You already have entered this name')
        } else {
            limpiarCaja('amigo');
            listaDeAmigos.push(nombres);
            actualizarListaAmigos('listaAmigos',listaDeAmigos);
        }
        
    return;
    }
}
//function to clean the input box before add another name//
function limpiarCaja(identificar){
    document.getElementById(identificar).value='';
    document.getElementById(identificar).innerHTML='';
}
//this function update the array of names//
function actualizarListaAmigos(lista, elementos) {
    let mostrarListaAmigos = document.getElementById(lista);
    mostrarListaAmigos.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = elementos[i];
        mostrarListaAmigos.appendChild(nuevoNombre);
        
    }
} 
//This function choose a random name and show in the screen the chosen name.//
function sortearAmigo() {
    if (listaDeAmigos.length === 0){
        alert('Before to draw lots names, you should enter them');
        return; 
    } else {
        let amigoSecreto=listaDeAmigos.splice(Math.floor(Math.random()*listaDeAmigos.length),1)[0];
        document.getElementById('resultado').innerHTML = `Your secret friend is: ${amigoSecreto}`;
        limpiarCaja('listaAmigos');
        return;
    }
}
//This function re-start the condicions to play a new game//
function reinicio() {
    listaDeAmigos =[];
    actualizarListaAmigos('listaAmigos',listaDeAmigos);
    let resultadoDeReinicio = document.getElementById('resultado')
    resultadoDeReinicio.innerHTML = '';
}
