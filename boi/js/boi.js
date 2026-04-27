const botao = document.getElementById('btn-acao');
const textoCuriosidade = document.getElementById('curiosidade');

botao.addEventListener('click', () => {
    if (textoCuriosidade.style.display === 'none') {
        textoCuriosidade.style.display = 'block';
        botao.textContent = 'Esconder Curiosidade';
    } else {
        textoCuriosidade.style.display = 'none';
        botao.textContent = 'Ver Curiosidade';
    }
});