const cards = document.querySelectorAll(".testimonial-card");

cards.forEach(card => {

    const btn = card.querySelector(".translate-btn");
    const tagalog = card.querySelector(".tagalog");
    const english = card.querySelector(".english");
    const text = card.querySelector(".btn-text-translate");

    // Skip this card if translate elements don't exist
    if (!btn || !tagalog || !english || !text) return;

    btn.addEventListener("click", () => {

        if (tagalog.style.display !== "none") {

            tagalog.style.display = "none";
            english.style.display = "block";
            text.textContent = "Translate to Tagalog";

        } else {

            tagalog.style.display = "block";
            english.style.display = "none";
            text.textContent = "Translate to English";

        }

    });

});