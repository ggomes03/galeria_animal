const botao = document.getElementById("btn-info");
const info = document.getElementById("info");

botao.addEventListener("click", function() {
    if(info.style.display === "none"){
        info.style.display = "block";
    }else{
        info.style.display = "none";
    }
});
