document.addEventListener("DOMContentLoaded", () => {
  function Fclick() {
    let btn11 = document.querySelector(".ch-delivery__button-2");
    let btn22 = document.querySelector(".ch-delivery__button-1");
    btn11.addEventListener("click", (e) => {
      btn22.classList.remove("active");
      btn11.classList.add("active");
    });
    btn22.addEventListener("click", (e) => {
      btn11.classList.remove("active");
      btn22.classList.add("active");
    });
  }
  Fclick();
});
