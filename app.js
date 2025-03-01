// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");

// Funcion para agregar a los amigos y mostrarlos en pantalla
function agregarAmigo() {
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("El campo está vacío, inserta un nombre");
        return;
    }

    // Validar si el nombre ya está en la lista
    if (listaAmigos.includes(nombre)) {
        alert(`El nombre ${nombre} ya está en la lista`);
        return;
    }

    // Agregar el nombre al array de amigos
    listaAmigos.push(nombre);

    // Limpiar el campo de texto
    inputAmigo.value = "";

    // Actualizar la lista de amigos
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    ulListaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        ulListaAmigos.appendChild(li);
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("No hay suficientes amigos para sortear. Agrega al menos dos.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el amigo secreto
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}

// Función para reiniciar el sorteo del amigo secreto
function actualizarSorteo(){
    listaAmigos = [];
    ulListaAmigos.innerHTML = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    inputAmigo.value = "";
}