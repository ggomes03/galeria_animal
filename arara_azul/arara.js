const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
  });
}

// Event listener para o botão "MAIS INFORMAÇÕES"
const moreInfoBtn = document.getElementById("more-info-btn");
if (moreInfoBtn) {
  moreInfoBtn.addEventListener("click", () => {
    window.open("https://pt.wikipedia.org/wiki/Arara-azul-grande", "_blank");
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__container .header__btn", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".socials li", {
  ...scrollRevealOption,
  delay: 4000,
  interval: 500,
});