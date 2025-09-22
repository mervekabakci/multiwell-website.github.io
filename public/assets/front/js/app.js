window.onload = () => {
  //Preloader
    document.querySelector(".preloader").remove();
}


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
navButton.addEventListener("click", function(){
  this.classList.toggle("active");
  navbarCollapse.classList.toggle("collapsed");
})


//customselect
$(document).ready(function(){
  $('.customSelect').niceSelect();
});
