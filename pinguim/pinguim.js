// Lista de curiosidades sobre o pinguim
var curiosidades = [
    "Pinguins são monógamos: muitas espécies ficam com o mesmo parceiro por toda a vida!",
    "Eles conseguem nadar a até 40 km/h dentro da água.",
    "Os pinguins imperadores ficam em pé por meses no inverno antártico chocando os ovos sem comer.",
    "Pinguins bebem água do mar! O corpo deles filtra o sal pelo bico.",
    "Eles se comunicam com sons únicos para reconhecer seus filhotes no meio da colônia.",
    "Um grupo de pinguins na água se chama 'jangada' e em terra se chama 'colônia'."
];

// Número da curiosidade atual
var indice = 0;

// Função chamada quando o botão é clicado
function mostrarCuriosidade() {
    var elemento = document.getElementById("texto-curiosidade");
    elemento.textContent = curiosidades[indice];

    // Passa para a próxima curiosidade
    indice = indice + 1;

    // Quando acabar, volta para o início
    if (indice >= curiosidades.length) {
        indice = 0;
    }
}
