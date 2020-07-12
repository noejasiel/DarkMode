let btn = document.getElementById("dark");
console.log(btn);

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  var padre = btn.parentElement;
  Imprimir(padre);
});

function Imprimir(padre) {
  console.log(padre.parentElement.parentElement, "jbhknklm");
  var padreMenor = padre.parentElement;
  padreMenor.classList.toggle("content-dark");
  padre = padre.parentElement.parentElement;
  padre.classList.toggle("conteiner-total-dark");
  var result = document
    .getElementsByClassName("result")[0]
    .classList.toggle("result-dark");
  console.log(result[0]);
  var prueba = document.querySelectorAll("button");
  console.log(prueba.length);
  for (let i = 1; i < prueba.length - 6; i++) {
    console.log(prueba[i].classList.toggle("btn-dark"));
  }
}
