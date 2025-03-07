// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
    if (nombres==='') {
       alert('Ingrese un nombre válido por favor');
    } else {
        limpiarCaja('amigo');
        listaDeAmigos.push(nombres);
        console.log(listaDeAmigos);
        actualizarListaAmigos('listaAmigos',listaDeAmigos);
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
        alert('Antes de sortear debes agregar los nombres de los participantes');
        return; 
    } else {
        let amigoSecreto=listaDeAmigos.splice(Math.floor(Math.random()*listaDeAmigos.length),1)[0];
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
        console.log(amigoSecreto);
        limpiarCaja('listaAmigos');
        return;
    }

}

sortearAmigo();
