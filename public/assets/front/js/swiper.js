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
    slidesPerView: 5,
    spaceBetween: 60,
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


/**Uzmanlar Slider */
document.querySelectorAll(".expertsWrapper").forEach(function (wrapper) {
  new Swiper(wrapper.querySelector(".expertsSlider"), {
    slidesPerView: 5,
    spaceBetween: 60,
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
