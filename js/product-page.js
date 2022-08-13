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
    slidesPerView: 5,
    spaceBetween: 15,
    // slidesView: 4,
    breakpoints: {
      600: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      961: {
        slidesPerView: 5,
      },
      1201: {
        slidesPerView: 5,
      },
    },
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
document.addEventListener("DOMContentLoaded", () => {
  let ppItems = document.querySelectorAll(".pp-content__item");
  document
    .querySelector(".pp-content__item_1")
    .addEventListener("click", (e) => {
      console.log("asd");
      ppItems.forEach((e) => {
        e.classList.toggle("active");
      });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  new ImageZoom(document.getElementById("slide-image"), {
    spaceBetween: 10,
    scale: 0.3,
    zoomWidth: 250,
    zoomStyle: "width: 200px; height: 200px;",
    offset: { vertical: 0, horizontal: 30 },
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      600: {},
      961: {
        spaceBetween: 30,
      },
      1201: {},
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let imgMini = document.querySelectorAll(".img-bl__item img");
  let BigImg = document.querySelector(".img-bl__big-img__block img");
  let zoomImg = document.querySelector(".js-image-zoom__zoomed-image");
  imgMini.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      // console.log(el);
      console.log(el.src);
      console.log(BigImg.src);
      zoomImg.style.backgroundImage = "url(" + el.src + ")";
      BigImg.src = el.src;
      // "url(" + el.src + ")";
    });
  });
});
