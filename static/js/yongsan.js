const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  autoplay: true,
  mousewheel: true,
  speed: 2000,
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
