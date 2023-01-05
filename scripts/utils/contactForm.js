function displayModal() {
    const modal = document.getElementById("contactModal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

