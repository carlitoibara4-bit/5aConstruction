const header = document.getElementById("header");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > 50) {
    topBar.classList.add("hide");
    header.classList.add("shift");
  } else {
    topBar.classList.remove("hide");
    header.classList.remove("shift");
  }
});