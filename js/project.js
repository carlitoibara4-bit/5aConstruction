const modalProjects = document.getElementById("projectModal");
const modalImageProjects = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");

const closeBtnProjects = document.getElementById("closeProjectModal");
const nextBtnProjects = document.getElementById("nextBtn");
const prevBtnProjects = document.getElementById("prevBtn");

const gotopinprojects = document.getElementById("backToTop");
let images = [];
let currentIndex = 0;

// OPEN MODAL
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {

    images = JSON.parse(card.dataset.images);
    currentIndex = 0;

    modalImageProjects.src = images[currentIndex];
    modalTitle.textContent = card.dataset.title;
    modalCategory.textContent = card.dataset.category;
    document.body.style.overflow = "hidden";

    modalProjects.classList.add("active");
    gotopinprojects.classList.remove("show");
  });
});

// NEXT IMAGE
nextBtnProjects.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImageProjects.src = images[currentIndex];
});

// PREV IMAGE
prevBtnProjects.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImageProjects.src = images[currentIndex];
});

// CLOSE
closeBtnProjects.addEventListener("click", () => {
  modalProjects.classList.remove("active");
    gotopinprojects.classList.add("show");
    document.body.style.overflow = "auto";
});

// CLICK OUTSIDE
modalProjects.addEventListener("click", (e) => {
  if (e.target === modalProjects) {
    modalProjects.classList.remove("active");
    gotopinprojects.classList.add("show");
    document.body.style.overflow = "auto";
  }
});