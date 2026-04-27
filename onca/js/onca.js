const facts = [
  "A onça-pintada é o maior felino da América e a terceira maior espécie do mundo.",
  "Ela consegue morder com tanta força que pode quebrar o casco de uma tartaruga e a carapaça de um jacaré.",
  "Ao contrário de quase todos os outros felinos, a onça adora água e nada muito bem.",
  "Suas manchas são únicas: cada onça tem um padrão exclusivo como uma impressão digital.",
  "O nome onça vem do tupi ûñç e foi usado para se referir a grandes felinos.",
];

const button = document.getElementById("actionButton");
const factText = document.getElementById("factText");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
  button.textContent = "Outra curiosidade";
  document.body.classList.toggle("active");
});
