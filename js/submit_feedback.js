document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");

    if (!form) return;

    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const formData = new FormData(form);

        fetch("../backend/api/submit_feedback.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {

            if (data.status === "success") {

                showModal("success", data.message);
                form.reset();

                document.getElementById("feedbackModal").style.display = "none";

            } else {

                showModal("error", data.message);

            }

        })
        .catch(() => {

            showModal("error", "Server error. Please try again.");

        })
        .finally(() => {

            submitButton.disabled = false;
            submitButton.textContent = "Send Feedback";

        });

    });

});