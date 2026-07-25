const contactModal = document.getElementById("contactModal");
const closeContactModal = document.getElementById("closeContactModal");
const gotopincontact = document.getElementById("backToTop");
// OPEN (attach to any "Contact" button)
document.querySelectorAll(".contact-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
    gotopincontact.classList.remove("show");
  });
});

// CLOSE
function closeContact() {
  contactModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeContactModal.addEventListener("click", closeContact);

contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    closeContact();
  }
});