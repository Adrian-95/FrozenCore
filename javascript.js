// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners or other functionality here

    // Example: Change the background color of the header
    const header = document.querySelector("header");
    header.style.backgroundColor = "#333";

    // Example: Smooth scroll to sections when clicking navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });

    // Example: Display a message in the console
    console.log("Welcome to FrozenCore Technologies!");
});