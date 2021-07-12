const toggle = document.querySelector('nav .toggle')
const spin = document.querySelectorAll('.slider .swiper-slide')
const nav = document.querySelector('#header nav')

toggle.addEventListener('click', function () {
  nav.classList.toggle('show'), (spin.style.marginTop = '15vh')
})

const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000
  },
  effect: 'fade',
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#carousel-img, #border,
   #cards .card, #about .text,
   .acting .map-acting, .txt-acting .title-acting,
   .txt-acting .p-acting, #footer`,
  { interval: 100 }
)
