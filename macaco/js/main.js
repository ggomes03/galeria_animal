const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intevalId = null;

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intevalId = setInterval(nextSlide, 5000);
        console.log(intevalId); //its 3
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }

    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intevalId)
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide(){
    clearInterval(intevalId)
    slideIndex++;
    showSlide(slideIndex)
}