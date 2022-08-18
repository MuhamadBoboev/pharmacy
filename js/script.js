document.addEventListener("DOMContentLoaded", () => {
  function searchHeader() {
    let searchBtn = document.querySelector(".header__search__input__block");
    let inputSearch = document.querySelector(".header__search__input");
    let searchBlockNone = document.querySelector(".header__block__search");
    let searchBlock = document.querySelector(".header__search");
    searchBtn.addEventListener("click", (e) => {
      searchBlockNone.classList.add("active");
      searchBlock.classList.add("active");
      inputSearch.placeholder =
        "Начинайте писать или введите название товара...";
    });

    document.onclick = function (ev) {
      const myDiv = document.getElementById("searchHeader");
      if (!myDiv.contains(ev.target)) {
        searchBlockNone.classList.remove("active");
        searchBlock.classList.remove("active");
        inputSearch.placeholder = "";
      }
    };
  }
  searchHeader();
});
document.addEventListener("DOMContentLoaded", () => {
  let mainBLockShow = document.querySelectorAll(".MBShow");
  let showBtn = document.querySelectorAll(".SBtn");
  showBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      // console.log("asd");
      // console.log(el.closest(".MBShow"));
      el.classList.toggle("active");
      let blockContent = el.closest(".MBShow");
      let blockShow = blockContent.querySelectorAll(".BShow");
      blockShow.forEach((event) => {
        event.classList.toggle("active");
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const users = Array.from(document.querySelectorAll(".user"));
});
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header-mobile__menu");
  const body = document.body;
  burger.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    document
      .querySelector(".header__contacts__block")
      .classList.toggle("active");
    document
      .querySelector(".header__bottom__condition")
      .classList.toggle("active");
  });
  const headerContacts = document.querySelector(
    ".header__contacts__block__text"
  );
  headerContacts.addEventListener("click", () => {
    let headerContactsActive = document.querySelector(
      ".header__mobile__contacts__active"
    );
    document.querySelector("[data-contact='1']").classList.toggle("active");
    document.querySelector("[data-contact='2']").classList.toggle("active");
    headerContactsActive.classList.toggle("active");
  });
  let slidersListMain = document.querySelectorAll(".slider");
  slidersListMain.forEach((slider) => {
    let sliderList = slider.querySelector(".slider-list"),
      sliderTrack = slider.querySelector(".slider-track"),
      slides = slider.querySelectorAll(".slide"),
      arrows = slider.querySelector(".slider-arrows"),
      prev = arrows.children[0],
      next = arrows.children[1],
      slideWidth = slides[0].offsetWidth,
      slideIndex = 0,
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posY1 = 0,
      posY2 = 0,
      posFinal = 0,
      isSwipe = false,
      isScroll = false,
      allowSwipe = true,
      transition = true,
      nextTrf = 0,
      prevTrf = 0,
      lastTrf = --slides.length * slideWidth,
      posThreshold = slides[0].offsetWidth * 0.35,
      trfRegExp = /([-0-9.]+(?=px))/,
      swipeStartTime,
      swipeEndTime,
      getEvent = function () {
        return event.type.search("touch") !== -1 ? event.touches[0] : event;
      },
      slide = function () {
        if (transition) {
          sliderTrack.style.transition = "transform .5s";
        }
        sliderTrack.style.transform = `translate3d(-${
          slideIndex * slideWidth
        }px, 0px, 0px)`;

        prev.classList.toggle("disabled", slideIndex === 0);
        next.classList.toggle("disabled", slideIndex === --slides.length);
      },
      swipeStart = function () {
        let evt = getEvent();

        if (allowSwipe) {
          swipeStartTime = Date.now();

          transition = true;

          nextTrf = (slideIndex + 1) * -slideWidth;
          prevTrf = (slideIndex - 1) * -slideWidth;

          posInit = posX1 = evt.clientX;
          posY1 = evt.clientY;

          sliderTrack.style.transition = "";

          document.addEventListener("touchmove", swipeAction);
          document.addEventListener("mousemove", swipeAction);
          document.addEventListener("touchend", swipeEnd);
          document.addEventListener("mouseup", swipeEnd);

          sliderList.classList.remove("grab");
          sliderList.classList.add("grabbing");
        }
      },
      swipeAction = function () {
        let evt = getEvent(),
          style = sliderTrack.style.transform,
          transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        if (!isSwipe && !isScroll) {
          let posY = Math.abs(posY2);
          if (posY > 7 || posX2 === 0) {
            isScroll = true;
            allowSwipe = false;
          } else if (posY < 7) {
            isSwipe = true;
          }
        }

        if (isSwipe) {
          if (slideIndex === 0) {
            if (posInit < posX1) {
              setTransform(transform, 0);
              return;
            } else {
              allowSwipe = true;
            }
          }

          // запрет ухода вправо на последнем слайде
          if (slideIndex === --slides.length) {
            if (posInit > posX1) {
              setTransform(transform, lastTrf);
              return;
            } else {
              allowSwipe = true;
            }
          }

          if (
            (posInit > posX1 && transform < nextTrf) ||
            (posInit < posX1 && transform > prevTrf)
          ) {
            reachEdge();
            return;
          }

          sliderTrack.style.transform = `translate3d(${
            transform - posX2
          }px, 0px, 0px)`;
        }
      },
      swipeEnd = function () {
        posFinal = posInit - posX1;

        isScroll = false;
        isSwipe = false;

        document.removeEventListener("touchmove", swipeAction);
        document.removeEventListener("mousemove", swipeAction);
        document.removeEventListener("touchend", swipeEnd);
        document.removeEventListener("mouseup", swipeEnd);

        sliderList.classList.add("grab");
        sliderList.classList.remove("grabbing");

        if (allowSwipe) {
          swipeEndTime = Date.now();
          if (
            Math.abs(posFinal) > posThreshold ||
            swipeEndTime - swipeStartTime < 300
          ) {
            if (posInit < posX1) {
              slideIndex--;
            } else if (posInit > posX1) {
              slideIndex++;
            }
          }

          if (posInit !== posX1) {
            allowSwipe = false;
            slide();
          } else {
            allowSwipe = true;
          }
        } else {
          allowSwipe = true;
        }
      },
      setTransform = function (transform, comapreTransform) {
        if (transform >= comapreTransform) {
          if (transform > comapreTransform) {
            sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
          }
        }
        allowSwipe = false;
      },
      reachEdge = function () {
        transition = false;
        swipeEnd();
        allowSwipe = true;
      };

    sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
    sliderList.classList.add("grab");

    sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
    slider.addEventListener("touchstart", swipeStart);
    slider.addEventListener("mousedown", swipeStart);

    arrows.addEventListener("click", function () {
      let target = event.target;

      if (target.classList.contains("next")) {
        slideIndex++;
      } else if (target.classList.contains("prev")) {
        slideIndex--;
      } else {
        return;
      }

      slide();
    });
  });

  /******************* swiper **************** */

  let swMainContent = new Swiper(".main-top-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    loopedSlides: 5, //looped slides should be the same
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1201: {
        slidesPerView: 2,
      },
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
  let swProduct2 = new Swiper(".product-swiper-2", {
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

    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // mousewheel: {
    //   sensitivity: 1,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swProduct1.controller.control = swProduct2;
  // swProduct2.controller.control = swProduct1;

  let swPartners = new Swiper(".swiper-partners", {
    slidesPerView: 2,
    spaceBetween: 10,
    // slidesView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      961: {
        slidesPerView: 4,
      },
      1201: {
        slidesPerView: 6,
      },
    },
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
  let swCapabilities = new Swiper(".swiper-capabilities", {
    slidesPerView: 1,
    spaceBetween: 10,
    // slidesView: 4,
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
        slidesPerView: 6,
      },
    },
    mousewheel: {
      sensitivity: 1,
    },
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
  let swPagination = new Swiper(".swiper-working", {
    slidesPerView: 2,
    spaceBetween: 10,
    // slidesView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      961: {
        slidesPerView: 4,
      },
      1201: {
        slidesPerView: 6,
      },
    },
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
  let swHeaderBottom = new Swiper(".header-bottom__desktop", {
    slidesPerView: 2,
    spaceBetween: 20,
    // loop: true,
    loopedSlides: 5, //looped slides should be the same
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      769: {
        slidesPerView: 9,
      },
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
