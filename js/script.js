document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header-mobile__menu");
  burger.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });
});
