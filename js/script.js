
/* Calling variables */
const menuToggle = document.querySelector('.main-menu');
const showcase = document.querySelector('.content');

/* Interaction added to the main menu */
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('activate');
  showcase.classList.toggle('activate');
})