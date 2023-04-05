const burger = document.querySelector('.burger');
const navLinks = document.querySelector('navLinks')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('mobile-new')
})