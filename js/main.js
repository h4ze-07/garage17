

// HEADER SCROLL

let lastScrollYHeader = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  
  if (window.scrollY > lastScrollYHeader) {
    header.classList.add('hidden');
  } else {
   
    header.classList.remove('hidden');
  }
 
  lastScrollYHeader = window.scrollY;
});



// BURGER + MENU

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('stopScroll');
})


// SWIPER

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
});