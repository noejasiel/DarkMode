let btn = document.getElementById("dark");
console.log(btn);

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  btn.classList.toggle("active");
});
