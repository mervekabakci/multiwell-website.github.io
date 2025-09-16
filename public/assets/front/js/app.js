window.onload = () => {
    document.querySelector(".preloader").remove();
}


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
window.addEventListener("scroll", handleScroll);

$(document).ready(function(){
  $('.customSelect').niceSelect();
})
