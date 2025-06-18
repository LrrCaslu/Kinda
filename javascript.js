// javascript.js

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  if (toggle && nav) {
    // Alterna o menu ao clicar no botão
    toggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Impede o clique de propagar para o document
      nav.classList.toggle('show');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('show');
      }
    });

    // Fecha o menu ao clicar em qualquer link dentro dele (opcional)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
      });
    });
  }
});
