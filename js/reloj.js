const relojElemento =
  document.getElementById("reloj");

const fechaElemento =
  document.getElementById("fecha");

const mensajeElemento =
  document.getElementById("mensaje");

function añadirCero(numero) {

  return numero < 10
    ? `0${numero}`
    : numero;
}

function obtenerMensaje(hora, minutos) {
  const minutosTotales =
    hora * 60 + minutos;

  if (
    minutosTotales >= 1 &&
    minutosTotales <= 420
  ) {
    return "Es hora de descansar. Apaga y sigue mañana🦉";

  } else if (
    minutosTotales >= 421 &&
    minutosTotales <= 720
  ) {
    return "Buenos días, desayuna fuerte y a darle al código🌞";

  } else if (
    minutosTotales >= 721 &&
    minutosTotales <= 840
  ) {
    return "Echa un rato más pero no olvides comer🍲";

  } else if (
    minutosTotales >= 841 &&
    minutosTotales <= 960
  ) {
    return "Espero que hayas comido😋";

  } else if (
    minutosTotales >= 961 &&
    minutosTotales <= 1080
  ) {
    return "Buenas tardes, el último empujón💪🏻";

  } else if (
    minutosTotales >= 1081 &&
    minutosTotales <= 1320
  ) {
    return "Esto ya son horas extras... Piensa en parar pronto🥱";

  } else {
    return "Buenas noches, es hora de pensar en parar y descansar😴";
  }
}

function actualizarReloj() {
  const fechaActual = new Date();

  const horas =
    añadirCero(
      fechaActual.getHours()
    );

  const minutos =
    añadirCero(
      fechaActual.getMinutes()
    );

  const segundos =
    añadirCero(
      fechaActual.getSeconds()
    );

  const dia =
    añadirCero(
      fechaActual.getDate()
    );

  const mes =
    añadirCero(
      fechaActual.getMonth() + 1
    );

  const año =
    fechaActual.getFullYear();

  relojElemento.textContent =
    `${horas}:${minutos}:${segundos}`;
  fechaElemento.textContent =
    `${dia}/${mes}/${año}`;
  mensajeElemento.textContent =
    obtenerMensaje(
      fechaActual.getHours(),
      fechaActual.getMinutes()
    );
}

actualizarReloj();

setInterval(
  actualizarReloj,
  1000
);