document.addEventListener("DOMContentLoaded", () => {
    // Style Switcher Toggle
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    const styleSwitcher = document.querySelector(".style-switcher");

    if (styleSwitcherToggler && styleSwitcher) {
        styleSwitcherToggler.addEventListener("click", () => {
            styleSwitcher.classList.toggle("open");
        });
    }

    // Close Style Switcher on Scroll
    window.addEventListener("scroll", () => {
        if (styleSwitcher && styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    // Change Color Theme
    const colorSpans = document.querySelectorAll(".colors span");

    colorSpans.forEach((span) => {
        span.addEventListener("click", () => {
            const color = span.classList[0]; // Get the color class (e.g., color-1, color-2)
            setActiveStyle(color);
        });
    });

    // Function to Set Active Style
    function setActiveStyle(color) {
        const alternateStyles = document.querySelectorAll(".alternate-style");
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    }

    // Day/Night Mode Toggle
    const dayNight = document.querySelector(".day-night");

    if (dayNight) {
        dayNight.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const icon = dayNight.querySelector("i");
            if (document.body.classList.contains("dark")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        });

        // Set Icon and Mode on Page Load
        window.addEventListener("load", () => {
            const icon = dayNight.querySelector("i");
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
                icon.classList.remove("fa-moon");
            } else {
                icon.classList.add("fa-moon");
                icon.classList.remove("fa-sun");
            }
        });
    }
});