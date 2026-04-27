const btn = document.getElementById('btnCuriosidade');
const texto = document.getElementById('textoCuriosidade');

btn.addEventListener('click', function() {
  if (texto.style.display === 'none') {
    texto.style.display = 'block';
    btn.textContent = 'Esconder Curiosidade';
  } else {
    texto.style.display = 'none';
    btn.textContent = 'Mostrar Curiosidade';
  }
});