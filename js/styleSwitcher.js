const links = document.querySelectorAll(".alternate-style");
const totalLinks = links.length;

const setActiveStyle = (color) => {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
};

//Body Skin
const bodySkin = document.querySelectorAll(".body-skin");
const totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "light") {
      document.body.className = "light";
    } else {
      document.body.className = "dark";
    }
  });
}

const styleSwitcherIcon = document.querySelector(".toggle-style-switcher");
styleSwitcherIcon.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
