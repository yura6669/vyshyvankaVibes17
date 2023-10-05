const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});
 
closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
 });