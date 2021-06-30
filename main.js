const toggle = document.querySelector('nav .toggle')
const spin = document.querySelectorAll('.slider .swiper-slide')
const nav = document.querySelector('#header nav')


toggle.addEventListener('click', function(){
  nav.classList.toggle('show'),
  spin.style.marginTop = '15vh'
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
