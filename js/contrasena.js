const inputLongitud =
  document.getElementById("longitud");
  
const botonGenerar =
  document.getElementById("boton-generar");

const resultadoElemento =
  document.getElementById("resultado");

const mayusculas =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const minusculas =
  "abcdefghijklmnopqrstuvwxyz";

const numeros =
  "0123456789";

const simbolos =
  "!@#$%^&*()-_=+";

const todosLosCaracteres =
  mayusculas +
  minusculas +
  numeros +
  simbolos;

function obtenerCaracterAleatorio(texto) {
  const posicionAleatoria =
    Math.floor(
      Math.random() * texto.length
    );
  return texto[posicionAleatoria];
}

function generarContrasena() {
  const longitud =
    Number(inputLongitud.value);
  if (
    longitud < 12 ||
    longitud > 50
  ) {
    resultadoElemento.textContent =
      "La longitud debe ser entre 12 y 50";
    return;
  }

  let contrasena = "";
  contrasena +=
    obtenerCaracterAleatorio(mayusculas);
  contrasena +=
    obtenerCaracterAleatorio(minusculas);
  contrasena +=
    obtenerCaracterAleatorio(numeros);
  contrasena +=
    obtenerCaracterAleatorio(simbolos);

  for (
    let i = contrasena.length;
    i < longitud;
    i++
  ) {

    contrasena +=
      obtenerCaracterAleatorio(
        todosLosCaracteres
      );
  }

  resultadoElemento.textContent =
    contrasena;
}

botonGenerar.addEventListener(
  "click",
  generarContrasena
);