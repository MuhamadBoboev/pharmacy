document.addEventListener("DOMContentLoaded", () => {
  function productPage() {
    if (document.querySelector(".product-page")) {
      let link1 = document.querySelector(".pp-button-block__link_1");
      let link1Block = document.querySelector(".pp-button-block__pp-block-1");
      let link2 = document.querySelector(".pp-button-block__link_2");
      let link2Block = document.querySelector(".pp-button-block__pp-block-2");

      link1.addEventListener("click", (e) => {
        link2Block.style.display = "none";
        link1Block.style.display = "flex";
        link1Block.classList.add(".active");
      });
      link2.addEventListener("click", (e) => {
        link1Block.style.display = "none";
        link2Block.style.display = "flex";
      });
    }
  }
  productPage();
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
  let swProduct1 = new Swiper(".product-swiper-1", {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loopedSlides: 5, //looped slides should be the same
    autoHeight: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      961: {
        slidesPerView: 3,
      },
      1201: {
        slidesPerView: 5,
      },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    // mousewheel: {
    //   sensitivity: 1,
    // },

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
