function toggleMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    menuDesplegable.classList.toggle("mostrando");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función que se ejecuta al hacer clic en el botón
function redirect() {
  // Redirige a la página especificada (reemplaza "pagina-especifica.html" con tu URL)
  window.location.href = "contacto.html";
}

function toggleElement(numero) {
  var elemento = document.getElementById("elemento" + numero);
  var mas = document.querySelector("#elemento" + numero + " + .mas");

  elemento.classList.toggle("mostrando");
  mas.classList.toggle("expandido");
}
