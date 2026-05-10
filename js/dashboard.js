// RELOJ DEL DASHBOARD
const relojDashboard =
  document.getElementById("reloj-dashboard");

const fechaDashboard =
  document.getElementById("fecha-dashboard");

function añadirCero(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

function actualizarRelojDashboard() {
  const fechaActual = new Date();
  const horas = añadirCero(fechaActual.getHours());
  const minutos = añadirCero(fechaActual.getMinutes());
  const segundos = añadirCero(fechaActual.getSeconds());
  const dia = añadirCero(fechaActual.getDate());
  const mes = añadirCero(fechaActual.getMonth() + 1);
  const año = fechaActual.getFullYear();

  relojDashboard.textContent =
    `${horas}:${minutos}:${segundos}`;

  fechaDashboard.textContent =
    `${dia}/${mes}/${año}`;
}

actualizarRelojDashboard();
setInterval(actualizarRelojDashboard, 1000);


// TIEMPO DEL DASHBOARD
const ciudadDashboard =
  document.getElementById("ciudad-dashboard");

const estadoDashboard =
  document.getElementById("estado-dashboard");

const iconoDashboard =
  document.getElementById("icono-dashboard");

const temperaturaDashboard =
  document.getElementById("temperatura-dashboard");

const precipitacionDashboard =
  document.getElementById("precipitacion-dashboard");

const humedadDashboard =
  document.getElementById("humedad-dashboard");

const vientoDashboard =
  document.getElementById("viento-dashboard");

const previsionDashboard =
  document.getElementById("prevision-dashboard");

const apiKey =
  "0bf0c1c2c2ef4ea1b2d81211260905";

const ciudad =
  "Barcelona";

async function obtenerTiempoDashboard() {
  const url =
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no&lang=es`;
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    ciudadDashboard.textContent =
      `${datos.location.name}, ${datos.location.country}`;
    estadoDashboard.textContent =
      datos.current.condition.text;
    iconoDashboard.src =
      `https:${datos.current.condition.icon}`;
    temperaturaDashboard.textContent =
      `${datos.current.temp_c} ºC`;
    precipitacionDashboard.textContent =
      `Precipitación: ${datos.current.precip_mm} mm`;
    humedadDashboard.textContent =
      `Humedad: ${datos.current.humidity}%`;
    vientoDashboard.textContent =
      `Viento: ${datos.current.wind_kph} km/h`;

    mostrarPrevisionDashboard(datos);
  } catch (error) {
    ciudadDashboard.textContent =
      "No se pudo cargar el tiempo";
    console.log(error);
  }
}

function mostrarPrevisionDashboard(datos) {
  const horas =
    datos.forecast.forecastday[0].hour;
  previsionDashboard.innerHTML = "";

  horas.forEach((hora) => {
    const horaTexto =
      hora.time.split(" ")[1];

    const tarjetaHora =
      document.createElement("article");

    tarjetaHora.classList.add("hora-dashboard");

    tarjetaHora.innerHTML = `
      <p>${horaTexto}</p>
      <img src="https:${hora.condition.icon}"
           alt="${hora.condition.text}" />
      <p>${hora.temp_c} ºC</p>
    `;
    previsionDashboard.appendChild(tarjetaHora);
  });
}

obtenerTiempoDashboard();

// ENLACES DEL DASHBOARD
const inputTituloDashboard =
  document.getElementById("titulo-enlace-dashboard");

const inputUrlDashboard =
  document.getElementById("url-enlace-dashboard");

const botonEnlaceDashboard =
  document.getElementById("boton-enlace-dashboard");

const listaEnlacesDashboard =
  document.getElementById("lista-enlaces-dashboard");

let enlacesDashboard =
  JSON.parse(localStorage.getItem("enlaces")) || [];

function guardarEnlacesDashboard() {
  localStorage.setItem(
    "enlaces",
    JSON.stringify(enlacesDashboard)
  );
}

function renderizarEnlacesDashboard() {
  listaEnlacesDashboard.innerHTML = "";
  enlacesDashboard.forEach((enlace, indice) => {
    const contenedorEnlace =
      document.createElement("article");

    contenedorEnlace.classList.add("enlace-dashboard");
    contenedorEnlace.innerHTML = `
      <a href="${enlace.url}"
         target="_blank">
        ${enlace.titulo}
      </a>
      <button data-indice="${indice}"
              class="boton-eliminar-dashboard">
        X
      </button>
    `;

    listaEnlacesDashboard.appendChild(contenedorEnlace);
  });

  const botonesEliminar =
    document.querySelectorAll(".boton-eliminar-dashboard");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const indice =
        boton.dataset.indice;

      eliminarEnlaceDashboard(indice);
    });
  });
}

function agregarEnlaceDashboard() {
  const titulo =
    inputTituloDashboard.value.trim();
  const url =
    inputUrlDashboard.value.trim();
  if (!titulo || !url) {
    alert("Debes completar el título y la URL");
    return;
  }

  enlacesDashboard.push({
    titulo: titulo,
    url: url
  });

  guardarEnlacesDashboard();
  renderizarEnlacesDashboard();

  inputTituloDashboard.value = "";
  inputUrlDashboard.value = "";
}

function eliminarEnlaceDashboard(indice) {
  enlacesDashboard.splice(indice, 1);
  guardarEnlacesDashboard();
  renderizarEnlacesDashboard();
}

botonEnlaceDashboard.addEventListener(
  "click",
  agregarEnlaceDashboard
);

renderizarEnlacesDashboard();

// CONTRASEÑA DEL DASHBOARD
const inputLongitudDashboard =
  document.getElementById("longitud-dashboard");

const botonContrasenaDashboard =
  document.getElementById("boton-contrasena-dashboard");

const resultadoDashboard =
  document.getElementById("resultado-dashboard");

const mayusculas =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const minusculas =
  "abcdefghijklmnopqrstuvwxyz";

const numeros =
  "0123456789";

const simbolos =
  "!@#$%^&*()-_=+";

const todosLosCaracteres =
  mayusculas + minusculas + numeros + simbolos;

function obtenerCaracterAleatorio(texto) {
  const posicionAleatoria =
    Math.floor(Math.random() * texto.length);
  return texto[posicionAleatoria];
}

function generarContrasenaDashboard() {
  const longitud =
    Number(inputLongitudDashboard.value);
  if (longitud < 12 || longitud > 50) {
    resultadoDashboard.textContent =
      "La longitud debe ser entre 12 y 50";
    return;
  }

  let contrasena = "";

  contrasena += obtenerCaracterAleatorio(mayusculas);
  contrasena += obtenerCaracterAleatorio(minusculas);
  contrasena += obtenerCaracterAleatorio(numeros);
  contrasena += obtenerCaracterAleatorio(simbolos);

  for (let i = contrasena.length; i < longitud; i++) {
    contrasena +=
      obtenerCaracterAleatorio(todosLosCaracteres);
  }
  resultadoDashboard.textContent =
    contrasena;
}

botonContrasenaDashboard.addEventListener(
  "click",
  generarContrasenaDashboard
);