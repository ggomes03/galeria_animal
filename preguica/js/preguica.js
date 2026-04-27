const btnCuriosidade = document.querySelector("#btn-curiosidade");
const containerCuriosidades = document.querySelector(".curiosidades-container");

btnCuriosidade.addEventListener("click", () => {
    containerCuriosidades.classList.toggle("show");
});

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});