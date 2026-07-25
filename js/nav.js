const hamburger = document.getElementById("hamburger");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const gotopnav = document.getElementById("backToTop");

hamburger.addEventListener("click", () => {
  sideNav.classList.add("active");
  overlay.classList.add("active");
    gotopnav.classList.remove("show");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

