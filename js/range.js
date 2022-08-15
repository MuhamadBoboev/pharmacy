document.addEventListener("DOMContentLoaded", () => {
  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }
    console.log("sad");
    // let displayElement = parent.getElementsByClassName("rangeValues")[0];
    // displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
    let rangeStart = document.querySelectorAll(".range-slider-input-start");
    rangeStart.forEach((e) => {
      e.value = `от ${slide1}`;
    });
    let rangeEnd = document.querySelectorAll(".range-slider-input-end");
    rangeEnd.forEach((e) => {
      e.value = `от ${slide2}`;
    });
  }

  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };

  function FnClickLabelcolor(element) {
    let clickLabelcolor = document.querySelectorAll(`.${element}`);

    clickLabelcolor.forEach((e) => {
      let inputBtn = e.parentElement.querySelector("input");
      // inputBtn.addEventListener("click", (e) => {
      //   e.classList.toggle("active");
      // });
      e.addEventListener("click", () => {
        e.classList.toggle("active");

        inputBtn.classList.toggle("rp-left__input:checked:after");
        inputBtn.toggleAttribute("checked");
        inputBtn.toggleAttribute("checked");
        // e.parentElement.querySelector("input").toggleAttribute("checked");
      });
    });
  }
  FnClickLabelcolor("filter__checkbox-label");

  function FnClickLabelcolor2(element1, element2) {
    let clickLabelcolor1 = document.querySelectorAll(`.${element1}`);
    let clickLabelcolor2 = document.querySelectorAll(`.${element2}`);

    // clickLabelcolor1.addEventListener("click", (e) => alert("asd"));
    clickLabelcolor1.forEach((e) => {
      inputRadio = e.parentElement.querySelector("input");
      inputRadio.addEventListener("click", () => {
        e.classList.add("active");
        clickLabelcolor2.forEach((elem) => {
          elem.classList.remove("active");
        });
      });
      e.addEventListener("click", () => {
        e.classList.add("active");
        // e.parentElement.querySelector("input").setAttribute("checked");
        console.log(e.parentElement.querySelector("input"));
        clickLabelcolor2.forEach((en) => {
          en.classList.remove("active");
          // en.parentElement.querySelector("input").removeAttribute("checked");
        });
      });
    });

    clickLabelcolor2.forEach((e) => {
      inputRadio = e.parentElement.querySelector("input");
      inputRadio.addEventListener("click", () => {
        e.classList.add("active");
        clickLabelcolor1.forEach((elem) => {
          elem.classList.remove("active");
        });
      });
      e.addEventListener("click", () => {
        e.classList.add("active");
        clickLabelcolor1.forEach((en) => {
          en.classList.remove("active");
        });
      });
    });
  }
  FnClickLabelcolor2("ava_label-1", "ava_label-2");
});
