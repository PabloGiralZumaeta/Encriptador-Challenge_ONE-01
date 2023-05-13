let textoAreaInput = document.getElementById("textEncrypter");

let textoAreaOutput = document.getElementById("text-solution");

let btnEncriptar = document.querySelector(".encrypter");

let btnDesencriptar = document.querySelector(".desencrypter");

let btnCopy = document.querySelector(".copy-text");
let btnPaste = document.querySelector(".paste-text");

btnEncriptar.addEventListener("click", encriptar);

btnDesencriptar.addEventListener("click", desencriptar);

btnCopy.addEventListener("click", copiar);

function encriptar() {
  let texto = textoAreaInput.value.toLowerCase();

  if (!texto) {
    // const valor = getComputedStyle(document.documentElement).getPropertyValue(
    //   "--estado"
    // );
    // textoAreaOutput.value = " ";
    document.documentElement.style.setProperty("--estadoTexto", "none");
    document.documentElement.style.setProperty("--estadoNone", "flex");
  } else {
    let puntos = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    let encriptado = texto
      .split("")
      .map((x) => puntos[x] || x)
      .join("");

    document.documentElement.style.setProperty("--estadoTexto", "flex");
    document.documentElement.style.setProperty("--estadoNone", "none");
    textoAreaOutput.value = encriptado;
  }
}

function desencriptar() {
  let texto = textoAreaInput.value.toLowerCase();

  if (!texto) {
    document.documentElement.style.setProperty("--estadoTexto", "none");
    document.documentElement.style.setProperty("--estadoNone", "flex");
    textoAreaOutput.value = " ";
  } else {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    document.documentElement.style.setProperty("--estadoTexto", "flex");
    document.documentElement.style.setProperty("--estadoNone", "none");
    textoAreaOutput.value = texto;
  }
}

function copiar() {
  let texto = textoAreaOutput.value;

  navigator.clipboard
    .writeText(texto)
    .then(() => texto)
    .catch((e) => console.error("Error al Copiar"));
}
