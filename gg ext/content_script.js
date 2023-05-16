// Obtiene el contenido de la página
const content = document.body.textContent;

// Encuentra el elemento de entrada de texto y el botón de resumen
const input = document.getElementById("input");
const summarizeButton = document.getElementById("summarize");

// Agrega un escuchador de eventos para el botón de resumen
summarizeButton.addEventListener("click", summarize);

// Resumir el artículo cuando se hace clic en el botón de resumen
function summarize() {
  // Agrega aquí la lógica para resumir el artículo
  const summary = "Este es el resumen del artículo";

  // Actualiza el contenido del textarea con el resumen
  input.value = summary;

  // Habilita el enlace de descarga
  document.getElementById("download").style.display = "inline";
}
