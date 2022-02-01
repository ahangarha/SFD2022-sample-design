// toggle mobile menu
const menu = document.getElementById('menu');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

menuToggler.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.toggle('show');
});

closeMenuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.toggle('show');
});
