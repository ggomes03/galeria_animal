const button = document.querySelector('#sound');
const audio = new Audio('assets/sea_lion_sounds.mp3');
const description = document.querySelector('#description'); 

button.addEventListener('click', function() {
    audio.play()
    description.removeAttribute('hidden');
});