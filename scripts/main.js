document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed')

  try {
    console.log('Initializing Swiper...')
    var swiper = new Swiper('.coffee-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false, // Изменим на false, так как у нас мало слайдов
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    console.log('Swiper initialized successfully:', swiper)
  } catch (error) {
    console.error('Error initializing Swiper:', error)
  }
})

// Добавим проверку загрузки Swiper
if (typeof Swiper === 'undefined') {
  console.error(
    'Swiper is not loaded. Make sure swiper-bundle.min.js is included correctly.'
  )
}
