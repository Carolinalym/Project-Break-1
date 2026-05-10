const ciudadPaisElemento =
  document.getElementById("ciudad-pais");

const estadoClimaElemento =
  document.getElementById("estado-clima");

const iconoClimaElemento =
  document.getElementById("icono-clima");

const temperaturaElemento =
  document.getElementById("temperatura");

const precipitacionElemento =
  document.getElementById("precipitacion");

const humedadElemento =
  document.getElementById("humedad");

const vientoElemento =
  document.getElementById("viento");

const previsionHorasElemento =
  document.getElementById("prevision-horas");

const apiKey =
  "0bf0c1c2c2ef4ea1b2d81211260905";

const ciudad =
  "Barcelona";

async function obtenerTiempo() {
  const url =
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no&lang=es`;
  try {
    const respuesta =
      await fetch(url);

    const datos =
      await respuesta.json();

    mostrarTiempoActual(datos);
    mostrarPrevisionHoras(datos);
  } catch (error) {
    ciudadPaisElemento.textContent =
      "No se pudo cargar el tiempo";
    console.log(error);
  }
}

function mostrarTiempoActual(datos) {
  ciudadPaisElemento.textContent =
    `${datos.location.name}, ${datos.location.country}`;
  estadoClimaElemento.textContent =
    datos.current.condition.text;
  iconoClimaElemento.src =
    `https:${datos.current.condition.icon}`;
  temperaturaElemento.textContent =
    `${datos.current.temp_c} ºC`;
  precipitacionElemento.textContent =
    `Precipitación: ${datos.current.precip_mm} mm`;
  humedadElemento.textContent =
    `Humedad: ${datos.current.humidity}%`;
  vientoElemento.textContent =
    `Viento: ${datos.current.wind_kph} km/h`;
}

function mostrarPrevisionHoras(datos) {
  const horas =
    datos.forecast.forecastday[0].hour;
  previsionHorasElemento.innerHTML = "";
  horas.forEach((hora) => {

    const horaTexto =
      hora.time.split(" ")[1];

    const tarjetaHora =
      document.createElement("article");
    tarjetaHora.classList.add("tarjeta-hora");
    tarjetaHora.innerHTML = `

      <p>${horaTexto}</p>
      <img src="https:${hora.condition.icon}"
           alt="${hora.condition.text}" />
      <p>${hora.temp_c} ºC</p>
    `;
    previsionHorasElemento.appendChild(
      tarjetaHora
    );
  });
}

obtenerTiempo();