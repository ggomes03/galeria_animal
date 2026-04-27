// Lightbox para visualizar imagens em tamanho maior
const images = document.querySelectorAll('.image-container img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Imagem ampliada">
    <p class="lightbox-caption"></p>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
        lightbox.classList.remove('active');
    }
});

// Curiosidades interativas - clique no título para revelar
const facts = [
    "Guaxinims podem girar suas mãos até 180 graus!",
    "Eles conseguem lembrar soluções de problemas por até 3 anos!",
    "Sua 'máscara' ajuda a reduzir o brilho da luz e melhorar a visão noturna.",
    "Guaxinims podem cair de uma altura de 35 metros sem se machucar!",
    "Eles são excelentes nadadores e usam suas patas para sentir peixes na água.",
    "O nome 'guaxinim' vem do tupi-guarani e significa 'cachorro selvagem'.",
    "Guaxinims podem viver até 20 anos em cativeiro!",
    "Eles têm habilidades de destreza comparáveis aos primatas!"
];

const funnySection = document.querySelector('section:has(h2:contains("Fato Engraçado"))');
if (funnySection) {
    const factBtn = document.createElement('button');
    factBtn.id = 'fact-btn';
    factBtn.textContent = '🎲 Revelar outra curiosidade!';
    funnySection.insertBefore(factBtn, funnySection.firstChild);

    factBtn.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert('🦝 ' + randomFact);
    });
}

// Efeito de parallax suave no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('h1');
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Animação de entrada das seções
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, index * 150);
});

// Contador de cliques no título (easter egg)
let clickCount = 0;
const title = document.querySelector('h1');
title.style.cursor = 'pointer';
title.addEventListener('click', () => {
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

// ========== NOVOS RECURSOS COM SELETORES ==========

// Carrossel de imagens
const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselDots = document.getElementById('carousel-dots');

let currentSlide = 0;

// Criar dots dinamicamente
carouselSlides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    carouselDots.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
    currentSlide = index;
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

carouselPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    goToSlide(currentSlide);
});

carouselNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    goToSlide(currentSlide);
});

// Botão para mostrar/esconder informações extras
const toggleBtn = document.getElementById('toggle-info-btn');
const extraInfo = document.getElementById('extra-info');

toggleBtn.addEventListener('click', () => {
    extraInfo.classList.toggle('hidden');
    
    if (extraInfo.classList.contains('hidden')) {
        toggleBtn.textContent = '📋 Ver mais informações';
    } else {
        toggleBtn.textContent = '📋 Ocultar informações';
    }
});

// Seletores demonstrando manipulação do DOM
console.log('=== Seletores CSS e JS ===');
console.log('Por ID:', document.getElementById('main-title'));
console.log('Por classe:', document.querySelectorAll('.content-section'));
console.log('Por tag:', document.querySelectorAll('section'));
console.log('Por atributo:', document.querySelectorAll('img[alt]'));