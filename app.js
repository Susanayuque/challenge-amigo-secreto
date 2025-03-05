// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
    if (nombres==='') {
       alert('Ingrese un nombre válido por favor');
    } else {
        limpiarCaja();
        listaDeAmigos.push(nombres);
        console.log(listaDeAmigos);
        actualizarListaAmigos('listaAmigos',listaDeAmigos);
    return;
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
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
