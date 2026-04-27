// Seleciona o botão e a seção de curiosidade
const botao = document.getElementById('btn-acao');
const curiosidade = document.getElementById('curiosidade');

// Adiciona o evento de clique
botao.addEventListener('click', function() {
    if (curiosidade.style.display === 'none') {
        curiosidade.style.display = 'block';
        botao.textContent = 'Esconder Curiosidade';
    } else {
        curiosidade.style.display = 'none';
        botao.textContent = 'Ver Curiosidade';
    }
});