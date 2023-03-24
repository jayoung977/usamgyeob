// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 3,
//   autoplay: true,
//   mousewheel: true,
//   speed: 2000,
//   spaceBetween: 100,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// breakpoints : { // 반응형 설정이 가능 width값으로 조정
//   768 : {
//       slidesPerView : 1,
//   },
// },

//5.3.0부터 "비율"(너비 / 높이)로 설정이 가능해졌습니다.
var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    "@1.0": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.5": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  loop: true,
  loopAdditionalSlides: 1,
  // slidesPerView: 3,
  autoplay: true,
  mousewheel: true,
  speed: 500,
  // spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
