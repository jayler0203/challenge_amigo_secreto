const inputAmigo = document.getElementById("amigo");
let amigos = [];

function agregarAmigo() {
   let inputValor = inputAmigo.value.trim()
  if (inputValor == "") {
    alert("Por favor, inserte un nombre.");
  }else if(amigos.includes(inputValor)){
    alert("No se permiten nombres duplicados")
  }else{
    amigos.push(inputValor);
    inputAmigo.value = "";
    actualizarListaAmigos();
  }
  console.log(amigos);
  

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
