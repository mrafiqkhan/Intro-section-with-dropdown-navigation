const expendable = document.querySelectorAll(".expendable");
const screenWidth = window.innerWidth;

expendable.forEach((exp) => {
  exp.addEventListener("click", (e) => {
    expendOnMobile(e);
  });
});

function expendOnMobile(e) {
  let t =
    e.target.tagName.toLowerCase() === "a"
      ? e.target
      : e.target.tagName.toLowerCase() == "img"
      ? e.target.parentNode
      : null;

  if (t !== null) {
    let p = t.parentNode;
    if (p.classList.contains("expendable")) {
      let img = p.querySelector("a > img");
      img.classList.toggle("rotate");
      let subMenu = p.querySelector(".sub-menu");
      subMenu.classList.toggle("expend");
    }
  }
}
