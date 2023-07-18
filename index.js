window.addEventListener("scroll", aparcerObjeto);

function aparcerObjeto() {
  var objetos = document.querySelectorAll(".ocultar");

  for (var i = 0; i < objetos.length; i++) {
    var alturaVentana = window.innerHeight;
    var distanciaTop = objetos[i].getBoundingClientRect().top;
    var puntoAparece = 150;

    if (distanciaTop < alturaVentana - puntoAparece) {
      objetos[i].classList.add("aparece");
    } else {
      objetos[i].classList.remove("aparece");
    }
  }
}
