function toggleMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    menuDesplegable.classList.toggle("mostrando");
}
// Obtener elementos del DOM
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var videoModal = document.getElementById('videoModal');

// Mostrar modal al hacer clic en el botón de abrir
openModalBtn.onclick = function() {
  videoModal.style.display = 'block';
}

// Cerrar modal al hacer clic en la "X"
closeModalBtn.onclick = function() {
  videoModal.style.display = 'none';
  
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
  }
}
