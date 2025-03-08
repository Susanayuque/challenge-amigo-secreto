let listaDeAmigos = [];
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
    if (nombres==='') {
       alert('Enter a valid name');
    } else {
        if (listaDeAmigos.includes(nombres)) {
            alert('You already have entered this name')
        } else {
            limpiarCaja('amigo');
            listaDeAmigos.push(nombres);
            console.log(listaDeAmigos);
            actualizarListaAmigos('listaAmigos',listaDeAmigos);
        }
        
    return;
    }
}

function limpiarCaja(identificar){
    document.getElementById(identificar).value='';
    document.getElementById(identificar).innerHTML='';
}

function actualizarListaAmigos(lista, elementos) {
    let mostrarListaAmigos = document.getElementById(lista);
    mostrarListaAmigos.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = elementos[i];
        mostrarListaAmigos.appendChild(nuevoNombre);
        
    }
} 

function sortearAmigo() {
    if (listaDeAmigos.length === 0){
        alert('Before to draw lots names, you should enter them');
        return; 
    } else {
        let amigoSecreto=listaDeAmigos.splice(Math.floor(Math.random()*listaDeAmigos.length),1)[0];
        document.getElementById('resultado').innerHTML = `Your secret friend is: ${amigoSecreto}`;
        console.log(amigoSecreto);
        limpiarCaja('listaAmigos');
        return;
    }
}

function reinicio() {
    listaDeAmigos =[];
    actualizarListaAmigos('listaAmigos',listaDeAmigos);
    let resultadoDeReinicio = document.getElementById('resultado')
    resultadoDeReinicio.innerHTML = '';
}
