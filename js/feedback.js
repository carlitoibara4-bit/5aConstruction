   const backToTopButton = document.getElementById("backToTop");
const feedbackBtn = document.querySelector(".feedback-float-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {

        // Show back to top
        backToTopButton.classList.add("show");
        

        // Move feedback up
        feedbackBtn.classList.add("move-up");

    } else {

        // Hide back to top
        backToTopButton.classList.remove("show");

        // Put feedback back down
        feedbackBtn.classList.remove("move-up");

    }

});