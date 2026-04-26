const btn = document.querySelector(".btn")
const para = document.querySelector('.para')
let isAbilitable = false;

toggleBtnContext();

function toggleBtnContext() {
    btn.textContent = isAbilitable ? "Esconder informações" : "Mostrar informações";
}

btn.addEventListener('click', () => {
    isAbilitable = !isAbilitable;
    para.classList.toggle('hide')
    toggleBtnContext();
})