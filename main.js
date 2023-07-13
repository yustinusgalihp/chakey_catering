var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 5,
      },
    },
  });