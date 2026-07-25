let currentIndexAbout = 0;
const slides = document.querySelectorAll(".slide-about");

function showNextSlide() {
    slides[currentIndexAbout].classList.remove("active");

    currentIndexAbout = (currentIndexAbout + 1) % slides.length;

    slides[currentIndexAbout].classList.add("active");
}

// auto slide every 3 seconds
setInterval(showNextSlide, 3000);