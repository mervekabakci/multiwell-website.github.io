window.onload = () => {
  //Preloader
  document.querySelector(".preloader").remove();
};

const body = document.querySelector("body");

//scroll Function
function handleScroll() {
  let scrollY = window.scrollY;

  const header = document.querySelector("header");
  if (header) {
    const headerH = header.offsetHeight;
    scrollY > headerH
      ? header.classList.add("fixed")
      : header.classList.remove("fixed");
  }
}
//scroll callback
window.addEventListener("scroll", handleScroll);

//header nav mobil menu
const navButton = document.querySelector(".nav-toggler-button");
const navbarCollapse = document.querySelector(".navbar-collapse");
navButton.addEventListener("click", function () {
  this.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  navbarCollapse.classList.toggle("collapsed");
});

//quick menu button
const quickMenu = document.querySelector(".quickMenuButton");
const quickMenuWrapper = document.querySelector(".quickMenuWrapper");
const quickMenuCloseButton = quickMenuWrapper.querySelector(".closeButton");
function handleQuickMenu() {
  quickMenuWrapper.classList.add("opened");
  body.classList.add("overflow-hidden");
}
quickMenuCloseButton.addEventListener("click", function () {
  body.classList.remove("overflow-hidden");
  quickMenuWrapper.classList.remove("opened");
});
quickMenu.addEventListener("click", handleQuickMenu);

//customselect
$(document).ready(function () {
  $(".customSelect").niceSelect();
});
