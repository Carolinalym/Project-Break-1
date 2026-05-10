const imagenesFondo = [

  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",

  "https://images.unsplash.com/photo-1511512578047-dfb367046420",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1503264116251-35a269479413",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",

  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"


];

function cambiarFondo() {
  const numeroAleatorio =
    Math.floor(
      Math.random() *
      imagenesFondo.length
    );

  document.body.style.backgroundImage =
    `url('${imagenesFondo[numeroAleatorio]}')`;
}

cambiarFondo();

setInterval(
  cambiarFondo,
  15000
);