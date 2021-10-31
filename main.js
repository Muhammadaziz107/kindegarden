const elHumbergerBtn = document.querySelector(".hamburger-btn");
const elHeader = document.querySelector(".header");

elHumbergerBtn.addEventListener("click", function () {
  elHeader.classList.toggle("header--adoptive");
});
