/* *************** popup ****************** */
// document.addEventListener("DOMContentLoaded", () => {
//   function popup(popupElement) {
//     // const popupFunction = document.querySelector(".${popupElement}");
//     const popupLinks = document.querySelectorAll(".popup-link");
//     const popupRequestButton = document.querySelectorAll(".popup-request");
//     const lockPadding = document.querySelectorAll(".lock-padding");

//     popupLinks.forEach(function (e) {
//       e.addEventListener("click", function () {
//         let popupElement = document.querySelector(".popup__first");
//         // let headerBlock = document.querySelector(".header_container");
//         let html = document.documentElement;
//         let marginSize = window.innerWidth - html.clientWidth;
//         let popupClose = popup.querySelector("#popupClose");
//         // let text = popup.querySelector("[data-text-send]");

//         body.style.paddingRight = marginSize + "px";
//         // headerBlock.style.marginLeft = 18 + "px";
//         // headerBlock.style.marginRight = 18 + "px";
//         body.style.overflow = "hidden";

//         popup.classList.add("open");
//         // text.innerText = e.innerText;

//         popupClose.addEventListener("click", function () {
//           popup.classList.remove("open");
//           body.style.overflow = "auto";
//           body.style.paddingRight = 0 + "px";
//           headerBlock.style.margin = 0 + " auto";
//         });
//       });
//     });
//     popupRequestButton.forEach(function (e) {
//       e.addEventListener("click", function () {
//         // let headerBlock = document.querySelector(".header_container");
//         let html = document.documentElement;
//         let marginSize = window.innerWidth - html.clientWidth;

//         let popupClose = popupRequest[0].querySelector(".popup__close");

//         body.style.paddingRight = marginSize + "px";
//         // headerBlock.style.marginLeft = 18 + "px";
//         // headerBlock.style.marginRight = 18 + "px";
//         body.style.overflow = "hidden";
//         console.log(popupClose);
//         popupRequest[0].classList.add("opens");

//         popupClose.addEventListener("click", function () {
//           popupRequest[0].classList.remove("opens");

//           body.style.overflow = "auto";
//           body.style.paddingRight = 0 + "px";
//           headerBlock.style.margin = 0 + " auto";
//           popupRequest[0].classList.remove("opens");
//         });
//       });
//     });
//   }
//   popup();
// });

/* *************** popup ****************** */
document.addEventListener("DOMContentLoaded", () => {
  let closePopup = document.getElementsByClassName("close");
  let btn = document.getElementsByClassName("myBtn");
  function buttonClick(event) {
    let id = this.getAttribute("data-modal");
    let modal = document.getElementById(id);
    modal.style.display = "block";
    document.body.classList.add("lock");
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = buttonClick;
  }
  function closeClick() {
    let id = this.getAttribute("data-modal");
    let modal = document.getElementById(id);
    modal.style.display = "none";
    document.body.classList.remove("lock");
  }

  for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].onclick = closeClick;
  }
  window.onclick = function (event) {
    let isModal = (" " + event.target.className + " ").indexOf(" modal ") > -1;

    if (isModal) {
      event.target.style.display = "none";
      document.body.classList.remove("lock");
    }
  };
});
document.addEventListener("DOMContentLoaded", () => {
  let clBtn = document.querySelectorAll(".categories__left__b-button-top")[1];
  let clBtnBlock = document.querySelector("[data-catalog]");
  clBtn.addEventListener("click", () => {
    clBtnBlock.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  function clickHover() {
    let headerBottomBtn = document.querySelector("[data-hover-1='1']");
    let headerBottom = document.querySelector(".medicine__section");

    headerBottomBtn.addEventListener("mousedown", () => {
      headerBottom.classList.toggle("hover");
      headerBottomBtn.classList.toggle("hover");
    });

    let headerTopBtn = document.querySelectorAll("[data-hover-2='2']");
    let headerTop = document.querySelectorAll(".service-page__section");

    headerTopBtn.forEach((e) => {
      e.addEventListener("mousedown", () => {
        headerTop.forEach((el1) => {
          el1.classList.toggle("hover");
        });
        headerTopBtn.forEach((el1) => {
          el1.classList.toggle("hover");
        });
      });
    });

    // let closeHoverBlock = document.getElementsByClassName("close");
    // let btn = document.getElementsByClassName("myBtn");
    // function buttonClick(event) {
    //   let id = this.getAttribute("data-hover");
    //   let hover = document.getElementById(id);
    //   hover.style.display = "block";
    // }
    // for (let i = 0; i < btn.length; i++) {
    //   btn[i].onclick = buttonClick;
    // }
    // function closeClick() {
    //   let id = this.getAttribute("data-hover");
    //   let hover = document.getElementById(id);
    //   hover.style.display = "none";
    // }

    // for (let i = 0; i < closeHoverBlock.length; i++) {
    //   closeHoverBlock[i].onclick = closeClick;
    // }
    // window.onclick = function (event) {
    //   let isModal =
    //     (" " + event.target.className + " ").indexOf(" hover ") > -1;
    //   if (isModal) {
    //     event.target.style.display = "none";
    //   }
    // };
  }
  clickHover();
});
