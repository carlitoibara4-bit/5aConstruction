
function showModal(type, message) {
    const boxShowModal = document.querySelector(`.${type}`);
    const textShowModal = boxShowModal.querySelector(`.${type}-message`);

    // Set message
    textShowModal.textContent = message;

    // Show
    boxShowModal.style.display = "flex";

    // Reset animation (so it plays every time)
    boxShowModal.style.animation = "none";
    boxShowModal.offsetHeight; // trigger reflow
    boxShowModal.style.animation = "slideDown 0.3s ease";

    // Auto hide after 1.5s
    setTimeout(() => {
        boxShowModal.style.display = "none";
    }, 1500);
}
