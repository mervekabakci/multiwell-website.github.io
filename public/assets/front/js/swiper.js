// testing sliderlar
document.querySelectorAll(".testingWrapper").forEach(function (wrapper) {
  new Swiper(wrapper.querySelector(".testingSlider"), {
    spaceBetween: 30,
    pagination: {
      el: wrapper.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: wrapper.querySelector(".swiper-button-next"),
      prevEl: wrapper.querySelector(".swiper-button-prev"),
    },
  });
});



// comments slider(lar)
document.querySelectorAll(".commentsWrapper").forEach(function (wrapper) {
  new Swiper(wrapper.querySelector(".commentsSlider"), {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: wrapper.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: wrapper.querySelector(".swiper-button-next"),
      prevEl: wrapper.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });
});


/**Uzmanlar Slider */
document.querySelectorAll(".expertsWrapper").forEach(function (wrapper) {
  new Swiper(wrapper.querySelector(".expertsSlider"), {
    slidesPerView:1,
    spaceBetween: 0,
    pagination: {
      el: wrapper.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: wrapper.querySelector(".swiper-button-next"),
      prevEl: wrapper.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  });
});
