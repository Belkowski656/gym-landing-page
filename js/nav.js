const hamburger = document.querySelector('.nav__hamburger');
const ul = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__hamburger--active');
    ul.classList.toggle('nav__list--active');
})