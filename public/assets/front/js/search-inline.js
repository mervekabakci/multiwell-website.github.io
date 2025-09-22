const searchWrapper = document.querySelector(".searchWrapperInline");
const searchBody = searchWrapper.querySelector(".searchBody");
const searchInput = searchWrapper.querySelector("input");
const searchResult = searchWrapper.querySelector(".searchResult");

searchResult.style.display = "none";

searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim();

  if (value.length >= 3) {
    searchResult.style.display = "flex";
  } else {
    searchResult.style.display = "none";
  }
});

searchInput.addEventListener("focus", () => {
  const value = searchInput.value.trim();
    if(value.length >=3){
        searchResult.style.display = "flex";
  }
  const elementY = searchWrapper.getBoundingClientRect().top + window.scrollY;

  const targetY = elementY - 110;
  
  window.scrollTo({
    top:targetY,
    behavior: "smooth",
  });
})
document.addEventListener("click", (e) => {
    if(!searchBody.contains(e.target)){
        searchResult.style.display = "none";
    }
})