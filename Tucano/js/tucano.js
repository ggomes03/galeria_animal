// Espera o DOM estar completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function(){
    const botao_alternar = document.querySelector('.alternar-exibicao');
    const informacoes_extra = document.querySelector('.informacoes-extra');

    // Verifica se os elementos foram encontrados
    if(!botao_alternar || !informacoes_extra) {
        console.error('Elementos não encontrados!');
        return;
    }

    botao_alternar.addEventListener('click', function(){
        if(informacoes_extra.style.display === 'none' || informacoes_extra.style.display === ''){
            informacoes_extra.style.display = 'block';
            botao_alternar.textContent = 'Esconder Informações';
        } else {
            informacoes_extra.style.display = 'none';
            botao_alternar.textContent = 'Mostrar Informações';
        }
    });
});