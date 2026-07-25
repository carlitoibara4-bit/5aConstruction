const modaltestimonial = document.getElementById("testimonialModal");
const openBtntestimonial = document.querySelector(".read-more-btn");
const closeBtntestimonial = document.querySelector(".close-testimonial");

const tagalogTexttestimonial = document.querySelector(".modal-tagalog");
const englishTexttestimonial = document.querySelector(".modal-english");
const translateBtntestimonial = document.querySelector(".modal-translate-btn span");

let isEnglishtestimonial = false;

// OPEN MODAL
if(modaltestimonial && openBtntestimonial && closeBtntestimonial){

    openBtntestimonial.addEventListener("click", () => {
        modaltestimonial.style.display = "flex";
    });

    // CLOSE MODAL
    closeBtntestimonial.addEventListener("click", () => {
        modaltestimonial.style.display = "none";
    });

    // CLICK OUTSIDE
    window.addEventListener("click", (e) => {
        if(e.target === modaltestimonial){
            modaltestimonial.style.display = "none";
        }
    });

}

// TRANSLATE
document.querySelector(".modal-translate-btn").addEventListener("click", () => {

    if(!isEnglishtestimonial){

        tagalogTexttestimonial.style.display = "none";
        englishTexttestimonial.style.display = "block";
        translateBtntestimonial.textContent = "Translate to Tagalog";

        isEnglishtestimonial = true;

    }else{

        tagalogTexttestimonial.style.display = "block";
        englishTexttestimonial.style.display = "none";
        translateBtntestimonial.textContent = "Translate to English";

        isEnglishtestimonial = false;

    }

});