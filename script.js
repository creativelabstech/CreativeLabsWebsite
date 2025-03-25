document.addEventListener("DOMContentLoaded", function () {

    // get plus buttons
    const plusIcons = document.querySelectorAll(".plus");

    // get each button
    plusIcons.forEach((plus) => {

        // make only plus clickable
        plus.addEventListener("click", (e) => {
            e.stopPropagation();

            // get content
            const button = plus.closest(".accordion-button");
            const content = button.querySelector(".accordion-content");

            // if button already activated, close it, else open
            const isActive = button.classList.contains("active");

            if (isActive) {
                button.classList.remove("active");
                content.style.maxHeight = 0;
            } else {
                button.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});