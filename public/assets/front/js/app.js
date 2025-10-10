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
if (quickMenu) {
  const quickMenuWrapper = document.querySelector(".quickMenuWrapper");
  const quickMenuCloseButton = quickMenuWrapper.querySelector(".closeButton");
  const quickMenuItems = quickMenuWrapper.querySelectorAll(".quickItem");
  const backButtons = quickMenuWrapper.querySelectorAll(".backQuickButton");

  function handleQuickMenu() {
    quickMenuWrapper.classList.add("opened");
    body.classList.add("overflow-hidden");
  }
  quickMenuCloseButton.addEventListener("click", function () {
    body.classList.remove("overflow-hidden");
    quickMenuWrapper.classList.remove("opened");
  });
  quickMenu.addEventListener("click", handleQuickMenu);

  quickMenuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // this.classList.add("active");
      e.preventDefault(); // link davranışını engelle
      const content = this.nextElementSibling;
      if (content && content.classList.contains("itemContent")) {
        content.classList.add("opened");
      }
    });
  });
  backButtons.forEach((backButton) => {
    backButton.addEventListener("click", function () {
      const parentContent = this.closest(".itemContent");
      if (parentContent) {
        parentContent.classList.remove("opened");
      }
    });
  });

  //Banner sosyal medıa paylasım
  const socialTitle = document.querySelector(
    ".socialShareWrapper .socialTitle"
  );
  if (socialTitle) {
    socialTitle.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("opened");
    });
  }
}

const moreAboutButton = document.querySelector(".moreAbout");
if (moreAboutButton) {
  moreAboutButton.addEventListener("click", function (e) {
    e.preventDefault();

    const paragraph = this.previousElementSibling;
    const isOpened = paragraph.classList.toggle("opened");

    if (isOpened) {
      paragraph.classList.remove("line-clamp-10");
      this.textContent = "Daha Az Gör";
    } else {
      paragraph.classList.add("line-clamp-10");
      this.textContent = "Daha Fazla Gör";
    }
  });
}

//uzman detay menu button

const allExpertMenu = document.querySelector(".allExpertMenu");
if (allExpertMenu) {
  allExpertMenu.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    this.parentElement.classList.toggle("opened");

    this.textContent = this.classList.contains("active") ? "Gizle" : "Tümü";
  });
}
//customselect
$(document).ready(function () {
  $(".customSelect").niceSelect();
});
