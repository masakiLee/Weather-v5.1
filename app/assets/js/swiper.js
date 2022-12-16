//首頁tab

let swiper = new Swiper(".mySwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//首頁tab2

let swiperTwo = new Swiper(".mySwiperTwo", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//各城市tab

let TownSwiper = new Swiper(".myTownSwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

//各城市tab

let myCountySwiper = new Swiper(".myCountySwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
