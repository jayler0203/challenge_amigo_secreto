const inputAmigo = document.getElementById("amigo");
let amigos = [];

function agregarAmigo() {
  if (inputAmigo.value.trim() == "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(inputAmigo.value.trim());
  inputAmigo.value = "";
  actualizarListaAmigos();
}
function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `
        <li>${amigos[i]}<li>`;
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    indiceAleatorio = Math.floor(Math.random() * amigos.length);
    mostrarResultado(indiceAleatorio);
    amigos.splice(indiceAleatorio, 1);
    actualizarListaAmigos();
  } else {
    alert("Por favor, inserte un nombre.");
  }
}
function mostrarResultado(indice) {
  const resultado = document.getElementById("resultado");
  const amigoSeleccionado = amigos[indice];
  resultado.innerHTML = amigoSeleccionado;
}
