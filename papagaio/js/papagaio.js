document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    // Abrir primeira seção por padrão
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
    
    // Adicionar event listeners para cada seção
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        
        header.addEventListener('click', function() {
            // Remover classe active de todas as seções
            sections.forEach(s => {
                if (s !== section) {
                    s.classList.remove('active');
                }
            });
            
            // Toggle classe active na seção clicada
            section.classList.toggle('active');
        });
    });
    
    // Carrossel de imagens
    const images = [
        'assets/papagaio_verdadeiro-937151.jpg',
        'assets/geminipapagaio.png',
        'assets/geminipapagaio2.png',
        'assets/papagaio_1774021636077.png'
    ];
    
    const featuredImage = document.querySelector('.featured-image');
    let currentImageIndex = 0;
    
    function changeImage() {
        // Adicionar classe fade-out
        featuredImage.classList.add('fade-out');
        
        // Aguardar transição de saída
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            featuredImage.src = images[currentImageIndex];
            featuredImage.classList.remove('fade-out');
        }, 800);
    }
    
    // Trocar imagem a cada 5 segundos
    setInterval(changeImage, 5000);
    
    // Smooth scroll para links internos (se houver)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
