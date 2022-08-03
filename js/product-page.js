document.addEventListener("DOMContentLoaded", () => {
  function productPage() {
    if (document.querySelector(".product-page")) {
      let link1 = document.querySelector(".pp-button-block__link_1");
      let link1Block = document.querySelector(".pp-button-block__pp-block-1");
      link1.addEventListener("click", (e) => {
        link1Block.style.display = "none";
      });
    }
  }
  let swImgBl = new Swiper(".img-bl__container", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    // slidesView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    direction: "vertical",

    // mousewheel: {
    //   sensitivity: 1,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
