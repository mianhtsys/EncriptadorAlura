const textarea = document.querySelector(".textArea1");
const mensaje = document.querySelector(".textareaSection2");
const copiarBtn = document.querySelector(".copiarBtn");
const info = document.querySelector(".infoSection");
const miCondicion = document.querySelector(".nota");

let caracteres = /[áéíóúÁÉÍÓÚñÑüÜ¡¿[\]()\d+%$@\-*\/]/;

function encriptar(encriptarMensaje) {
  encriptarMensaje = encriptarMensaje.toLowerCase();
  if (caracteres.test(encriptarMensaje)) {
    Swal.fire({

      text: "No se pueden ingresar caracteres especiales",
    });
    return " ";
  } else {
    let nuevoMensaje = " ";
    nuevoMensaje = encriptarMensaje
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return nuevoMensaje;
  }
}

function desencriptar(desencriptarMensaje) {
  desencriptarMensaje = desencriptarMensaje.toLowerCase();
  if (caracteres.test(desencriptarMensaje)) {
    Swal.fire({
      text: "No se pueden ingresar caracteres especiales",
    });
    return " ";
  } else {
    let nuevoMensaje = " ";
    nuevoMensaje = desencriptarMensaje
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return nuevoMensaje;
  }
}

function enciptarBtn() {
  let mostrarMensaje = encriptar(textarea.value);
  if (mostrarMensaje === "") {
    mensaje.value = "";
  } else {
    mensaje.value = mostrarMensaje;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    info.style.display = "none";
    copiarBtn.style.display = "flex";
    copiarBtn.focus();
  }
}
function desencriptarBtn() {
  let mostrarMensaje = desencriptar(textarea.value);
  mensaje.value = mostrarMensaje;
  textarea.value = "";
  mensaje.style.backgroundImage = "none";
  info.style.display = "none";
  copiarBtn.style.display = "flex";
  copiarBtn.focus();
}
function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  info.style.display = "block";
  copiarBtn.style.display = "none";
  mensaje.style.backgroundImage = "";
  textarea.focus();
}
