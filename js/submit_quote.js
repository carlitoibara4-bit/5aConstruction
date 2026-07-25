
document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form#quoteForm");

    if (forms.length === 0) {
        console.error("Quote form not found");
        return;
    }

    forms.forEach(function(form) {
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending...";
            }

            const formData = new FormData(form);

            fetch("../backend/api/submit_quote.php", {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    showModal("success", data.message);
                    form.reset();
                } else {
                    showModal("error", data.message);
                }
            })
            .catch(() => {
                showModal("error", "Server error. Please try again.");
            })
            .finally(() => {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Send Request";
                }
            });
        });
    });

});