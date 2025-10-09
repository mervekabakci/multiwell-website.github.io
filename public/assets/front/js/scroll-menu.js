const expertHead = document.querySelector(".expertHead");
const expertMenu = document.querySelector(".expertMenu");
const anchorLinks = document.querySelectorAll(".anchorLink");
const sections = document.querySelectorAll(".scrollSection");

function handleSectionScroll() {
  let scrollY = window.scrollY;

  const expertHead = document.querySelector(".expertHead");
  if (expertHead) {
    const expertHeadHeight = expertHead.offsetHeight;
    scrollY > expertHeadHeight
      ? expertHead.classList.add("fixed")
      : expertHead.classList.remove("fixed");
  }
}
//scroll callback
window.addEventListener("scroll", handleSectionScroll);

anchorLinks.forEach((anchorLink) => {
  anchorLink.addEventListener("click", (event) => {
    event.preventDefault();

    anchorLinks.forEach((link) => link.classList.remove("active"));
    anchorLink.classList.add("active");

    const href = anchorLink.getAttribute("href");
    const targetElem = document.querySelector(href);

    if (targetElem) {
      sections.forEach((section) => section.classList.remove("active"));
      targetElem.classList.add("active");

      // 🔹 Header ve menü yüksekliğini al
      const expertHeadHeight = expertHead ? expertHead.offsetHeight : 0;
      const expertMenuHeight = expertMenu ? expertMenu.offsetHeight : 0;
      const totalOffset = expertHeadHeight + expertMenuHeight;

      // 🔹 Smooth scroll + offset uygulama
      const targetPosition =
        targetElem.getBoundingClientRect().top + window.scrollY - totalOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: `-${expertHeadHeight + expertMenuHeight}px 0px 0px 0px`,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    const entryId = `#${entry.target.getAttribute("id")}`;
    console.log(entryId);

    anchorLinks.forEach((ancLink) => {
      const linkHref = ancLink.getAttribute("href");
      ancLink.classList.remove("active");
      if (entryId == linkHref) {
        ancLink.classList.add("active");
      }
    });

    entry.target.classList.toggle("inverse");
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});