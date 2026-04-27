// Seleciona os elementos
const botao = document.getElementById('btnCuriosidade');
const textoCuriosidade = document.getElementById('curiosidade');

// Função de clique
botao.addEventListener('click', function() {
    if (textoCuriosidade.classList.contains('hidden')) {
        textoCuriosidade.classList.remove('hidden');
        textoCuriosidade.classList.add('show');
        botao.textContent = 'Esconder Curiosidade';
    } else {
        textoCuriosidade.classList.remove('show');
        textoCuriosidade.classList.add('hidden');
        botao.textContent = 'Mostrar Curiosidade';
    }
});