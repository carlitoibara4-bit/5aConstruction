const openBtnAbout = document.getElementById("openModal");
const modalAbout = document.getElementById("aboutModal");
const closeBtnAbout = document.getElementById("closeModal");
const gotop = document.getElementById("backToTop");

openBtnAbout.addEventListener("click", function (e) {
  e.preventDefault();

  modalAbout.classList.add("active");
  gotop.classList.remove("show");
  document.body.style.overflow = "hidden";
});


closeBtnAbout.addEventListener("click", function () {
  modalAbout.classList.remove("active");
  gotop.classList.add("show");

  document.body.style.overflow = "auto";
});


modalAbout.addEventListener("click", function (e) {
  if (e.target === modalAbout) {
    modalAbout.classList.remove("active");
    gotop.classList.add("show");

    document.body.style.overflow = "auto";
  }
});