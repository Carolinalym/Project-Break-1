const inputTitulo =
  document.getElementById("titulo-enlace");

const inputUrl =
  document.getElementById("url-enlace");

const botonAgregar =
  document.getElementById("boton-agregar");

const listaEnlaces =
  document.getElementById("lista-enlaces");

let enlacesGuardados =
  JSON.parse(
    localStorage.getItem("enlaces")
  ) || [];

function guardarEnlaces() {

  localStorage.setItem(
    "enlaces",
    JSON.stringify(enlacesGuardados)
  );
}

function renderizarEnlaces() {
  listaEnlaces.innerHTML = "";
  enlacesGuardados.forEach(
    (enlace, indice) => {
      const tarjetaEnlace =
        document.createElement("article");
      tarjetaEnlace.classList.add(
        "tarjeta-enlace"
      );
      tarjetaEnlace.innerHTML = `
        <a
          href="${enlace.url}"
          target="_blank"
          class="enlace"
        >
          ${enlace.titulo}
        </a>
        <button
          class="boton-eliminar"
          data-indice="${indice}"
        >
          X
        </button>
      `;

      listaEnlaces.appendChild(
        tarjetaEnlace
      );
    }
  );

  agregarEventosEliminar();
}

function agregarEnlace() {
  const titulo =
    inputTitulo.value.trim();

  const url =
    inputUrl.value.trim();
  if (!titulo || !url) {
    alert(
      "Debes completar todos los campos"
    );
    return;
  }

  enlacesGuardados.push({
    titulo,
    url
  });

  guardarEnlaces();
  renderizarEnlaces();

  inputTitulo.value = "";
  inputUrl.value = "";
}

function eliminarEnlace(indice) {
  enlacesGuardados.splice(
    indice,
    1
  );

  guardarEnlaces();
  renderizarEnlaces();
}

function agregarEventosEliminar() {
  const botonesEliminar =
    document.querySelectorAll(
      ".boton-eliminar"
    );
  botonesEliminar.forEach(
    (boton) => {
      boton.addEventListener(
        "click",
        () => {
          const indice =
            boton.dataset.indice;
          eliminarEnlace(indice);
        }
      );
    }
  );
}

botonAgregar.addEventListener(
  "click",
  agregarEnlace
);

renderizarEnlaces();