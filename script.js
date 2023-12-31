function toggleMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    menuDesplegable.classList.toggle("mostrando");
}

// Función para abrir el modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

// Función para cerrar el modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Asigna las funciones a los botones correspondientes
document.getElementById("myBtn1").onclick = function() {
  openModal("myModal1");
};

document.getElementById("myBtn2").onclick = function() {
  openModal("myModal2");
};

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  // Agrega más modales según sea necesario

  if (event.target == modal1) {
      modal1.style.display = "none";
  } else if (event.target == modal2) {
      modal2.style.display = "none";
  }
  // Agrega más condiciones para otros modales
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
