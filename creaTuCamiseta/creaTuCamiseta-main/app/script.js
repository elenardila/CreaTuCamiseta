let imgBart = document.getElementById("imagenBart");
let imgHomer = document.getElementById("imagenHomer");
let imgLisa = document.getElementById("imagenLisa");
let imgSimpsons = document.getElementById("imagenSimpsons");

let camiseta = document.getElementById("camisetaDiv");
let imagenes = document.getElementById("imagenesDiv");

imgBart.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.src);
});
imgHomer.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.src);
});
imgLisa.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.src);
});
imgSimpsons.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.src);
});

imagenes.addEventListener("drop", (event) => {
  let imgcont = document.createElement("img");
  imgcont.src = event.dataTransfer.getData("text/plain");
  imagenes.appendChild(imgcont);
});

imagenes.addEventListener("dragover", (event) => {
  event.preventDefault();
});

camiseta.addEventListener("drop", (event) => {
  // Comprobar si ya hay una imagen en camiseta
  const imagenesExistentes = camiseta.getElementsByClassName("simpsons");

  for (let i = imagenesExistentes.length - 1; i >= 0; i--) {
    if (imagenesExistentes){
        imagenesExistentes[i].remove();
    }
  }

  let imgcont = document.createElement("img");
  imgcont.src = event.dataTransfer.getData("text/plain");
  imgcont.className = "simpsons";
  imgcont.style.width = "150px";
  imgcont.style.height = "200px";
  imgcont.style.position = "absolute";
  imgcont.style.top = "55%"; // Centrar verticalmente
  imgcont.style.left = "45%"; // Centrar horizontalmente
  imgcont.style.transform = "translate(-50%, -50%)"; // Ajustar la posición al centro
  camiseta.appendChild(imgcont);

  let imgMirror = document.createElement("img");
  imgMirror.src = event.dataTransfer.getData("text/plain");
  imgMirror.className = "simpsons";
  imgMirror.style.width = "50px";
  imgMirror.style.height = "50px";
  imgMirror.style.transform = "scaleX(-1)"; // Efecto espejo
  imgMirror.style.position = "relative"; // Posición relativa
  imgMirror.style.marginTop = "10px"; // Margen superior para separación
  imgMirror.style.top = "20%"; // Centrar verticalmente
  imgMirror.style.left = "-45%"; // Centrar horizontalmente

  camiseta.appendChild(imgMirror);
});

camiseta.addEventListener("dragover", (event) => {
  event.preventDefault();
});

//para cambiar el color de la camiseta
let botonNegro = document.getElementById("negro");
let imagenCamiseta = document.getElementById("imagenCamiseta");
    botonNegro.addEventListener("click", function() {
     imagenCamiseta.src = "img/camiseta/black.png";
});
let botonBlanco = document.getElementById("blanco");
    imagenCamiseta = document.getElementById("imagenCamiseta");
    botonBlanco.addEventListener("click", function() {
     imagenCamiseta.src = "img/camiseta/white.png";
});

let nombre = document.getElementById("name");
nombre.addEventListener("input", function() {
    let nombreTexto = document.getElementById("nombreTexto");
    if (!nombreTexto) {
        nombreTexto = document.createElement("div");
        nombreTexto.id = "nombreTexto";
        nombreTexto.style.position = "absolute";
        nombreTexto.style.top = "28%"; // Ajustar la posición vertical
        nombreTexto.style.left = "35%"; // Ajustar la posición horizontal
        nombreTexto.style.transform = "translate(-50%, -50%)"; // Centrar el texto
        nombreTexto.style.fontSize = "20px"; // Tamaño de la fuente
        nombreTexto.style.color = "blue"; // Color del texto
        camiseta.appendChild(nombreTexto);
    }
    nombreTexto.textContent = nombre.value;
});

