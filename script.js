// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion buttons
    const accordionButtons = document.querySelectorAll(".accordion-button");

    // Add event listeners to each button
    accordionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Toggle the "active" class on the button
            button.classList.toggle("active");

            // Find the associated accordion content
            const content = button.nextElementSibling;

            // Toggle the visibility of the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse the content
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand the content
            }
        });
    });
});
