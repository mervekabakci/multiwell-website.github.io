const tabNav = document.querySelector(".tab-nav");
const tabNavButtons = tabNav.querySelectorAll(".tabLinks");

function openCity(e) {
  // Declare all variables
  const thisBtn = e.currentTarget;
  const thisTabContentId = thisBtn.getAttribute("tab-content-id");
  console.log(thisTabContentId);

  document.querySelectorAll(".tabContent").forEach((content) => {
    content.style.display = "none";
  });

  const tabContentEl  = document.querySelector(
    `.tabContent[tab-id="${thisTabContentId}"]`
  );

  if (tabContentEl ) {
    tabContentEl .style.display = "block";
  }
  tabNavButtons.forEach((button) => {
    button.classList.remove("active");
  });
  thisBtn.classList.add("active");
}

tabNavButtons.forEach((button) => {
  button.addEventListener("click", openCity);
});
