// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
    if (nombres==='') {
       alert('Ingrese un nombre válido');
    } else {
        limpiarCaja();
        listaDeAmigos.push(nombres);
        console.log(listaDeAmigos);
    return;
    }
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

