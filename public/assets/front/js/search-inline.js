const searchWrapper = document.querySelector(".searchWrapperInline");
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
