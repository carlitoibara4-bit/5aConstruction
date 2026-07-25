
const openBtnServices = document.getElementById("openServices");
const modalServices = document.getElementById("servicesModal");
const closeBtnServices = document.getElementById("closeServices");
const gotopinServices = document.getElementById("backToTop");

// OPEN MODAL
openBtnServices.addEventListener("click", () => {
    modalServices.style.display = "flex";
    gotopinServices.classList.remove("show");
    document.body.style.overflow = "hidden";
});

// CLOSE MODAL (X BUTTON)
closeBtnServices.addEventListener("click", () => {
    modalServices.style.display = "none";
    document.body.style.overflow = "auto";
});

// CLOSE WHEN CLICKING OUTSIDE
window.addEventListener("click", (e) => {
    if (e.target === modalServices) {
       modalServices.style.display = "none";
       document.body.style.overflow = "auto";
    }
});
