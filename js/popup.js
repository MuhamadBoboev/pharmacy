/* *************** popup ****************** */

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
  if (clBtn) {
    clBtn.addEventListener("click", () => {
      clBtnBlock.classList.toggle("active");
    });
  }
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
  }
  clickHover();
});
