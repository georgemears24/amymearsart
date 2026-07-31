const gallery = document.getElementById("gallery");
const button = document.getElementById("toggleButton");
const message = document.getElementById("message");

// Show image title when clicked
document.querySelectorAll(".gallery img").forEach(image => {
    image.addEventListener("click", () => {
        message.textContent = `You selected: ${image.dataset.title}`;
    });
});

// Hide/show gallery
button.addEventListener("click", () => {
    if (gallery.style.display === "none") {
        gallery.style.display = "grid";
        button.textContent = "Hide Gallery";
    } else {
        gallery.style.display = "none";
        button.textContent = "Show Gallery";
    }
});