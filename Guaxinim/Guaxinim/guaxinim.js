// ========== LIGHTBOX ==========
var images = document.querySelectorAll('.image-container img');
var lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="Imagem ampliada"><p class="lightbox-caption"></p>';
document.body.appendChild(lightbox);

var lightboxImg = lightbox.querySelector('img');
var lightboxCaption = lightbox.querySelector('.lightbox-caption');
var lightboxClose = lightbox.querySelector('.lightbox-close');

images.forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightboxCaption.textContent = this.alt;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === lightboxClose) {
        lightbox.classList.remove('active');
    }
});

// ========== CURIOSIDADES ==========
var facts = [
    "Guaxinims podem girar suas mãos até 180 graus!",
    "Eles conseguem lembrar soluções de problemas por até 3 anos!",
    "Sua 'máscara' ajuda a reduzir o brilho da luz e melhorar a visão noturna.",
    "Guaxinims podem cair de uma altura de 35 metros sem se machucar!",
    "Eles são excelentes nadadores e usam suas patas para sentir peixes na água.",
    "O nome 'guaxinim' vem do tupi-guarani e significa 'cachorro selvagem'.",
    "Guaxinims podem viver até 20 anos em cativeiro!",
    "Eles têm habilidades de destreza comparáveis aos primatas!"
];

var funnySection = document.querySelector('#section-fun-fact');
if (funnySection) {
    var factBtn = document.createElement('button');
    factBtn.id = 'fact-btn';
    factBtn.textContent = '🎲 Revelar outra curiosidade!';
    funnySection.insertBefore(factBtn, funnySection.firstChild);

    factBtn.addEventListener('click', function() {
        var randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert('🦝 ' + randomFact);
    });
}

// ========== CARROSSEL ==========
var carouselTrack = document.querySelector('.carousel-track');
var carouselSlides = document.querySelectorAll('.carousel-slide');
var carouselPrev = document.getElementById('carousel-prev');
var carouselNext = document.getElementById('carousel-next');
var carouselDots = document.getElementById('carousel-dots');

var currentSlide = 0;

console.log('Carrossel - Track:', carouselTrack);
console.log('Carrossel - Slides:', carouselSlides.length);
console.log('Carrossel - Prev:', carouselPrev);
console.log('Carrossel - Next:', carouselNext);

if (carouselTrack && carouselSlides.length > 0) {
    // Criar dots
    carouselSlides.forEach(function(_, index) {
        var dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
        carouselDots.appendChild(dot);
    });

    function goToSlide(index) {
        currentSlide = index;
        carouselTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        
        var dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(function(dot, i) {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Adicionar eventos com verificação
    if (carouselPrev) {
        carouselPrev.onclick = function() {
            console.log('Botão prev clicado!');
            currentSlide = currentSlide - 1;
            if (currentSlide < 0) currentSlide = carouselSlides.length - 1;
            goToSlide(currentSlide);
        };
    }

    if (carouselNext) {
        carouselNext.onclick = function() {
            console.log('Botão next clicado!');
            currentSlide = currentSlide + 1;
            if (currentSlide >= carouselSlides.length) currentSlide = 0;
            goToSlide(currentSlide);
        };
    }
}

// ========== BOTÃO MOSTRAR/OCULTAR ==========
var toggleBtn = document.getElementById('toggle-info-btn');
var extraInfo = document.getElementById('extra-info');

console.log('Toggle - Botão:', toggleBtn);
console.log('Toggle - Info:', extraInfo);

if (toggleBtn && extraInfo) {
    toggleBtn.onclick = function() {
        console.log('Botão toggle clicado!');
        extraInfo.classList.toggle('hidden');
        
        if (extraInfo.classList.contains('hidden')) {
            toggleBtn.textContent = '📋 Ver mais informações';
        } else {
            toggleBtn.textContent = '📋 Ocultar informações';
        }
    };
}

// ========== EASTER EGG NO TÍTULO ==========
var clickCount = 0;
var title = document.getElementById('main-title');
if (title) {
    title.style.cursor = 'pointer';
    title.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            title.textContent = '🦝 Guaxinim 🦝';
            title.style.color = '#f4a460';
        } else if (clickCount === 10) {
            title.textContent = '🦝 O Mestre dos Guaxinins 🦝';
            alert('🐼 Você descobriu o easter egg! O guaxinim te abençoou!');
            clickCount = 0;
        }
    });
}

// ========== ANIMAÇÃO DE ENTRADA ==========
var sections = document.querySelectorAll('.content-section');
sections.forEach(function(section, index) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(function() {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, index * 150);
});

// Log de verificação
console.log('JavaScript carregado!');
console.log('toggleBtn:', toggleBtn);
console.log('extraInfo:', extraInfo);
console.log('carouselPrev:', carouselPrev);
console.log('carouselNext:', carouselNext);