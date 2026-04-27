let curiosidade = document.querySelector("span")
function mostrarCuriosidade(){
    if(curiosidade.classList.contains('ativo')){
    curiosidade.classList.remove('ativo')
}else{
    curiosidade.classList.add('ativo')
    }  
}