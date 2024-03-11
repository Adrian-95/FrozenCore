// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Change the background color of the header
    const header = document.querySelector("header");
    header.style.backgroundImage = "linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)";

    // Smooth scroll to sections when clicking navigation links
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

    // Toggle mobile navigation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('nav ul');
    mobileNavToggle.addEventListener('click', () => {
        const visibility = navList.getAttribute('data-visible');
        if (visibility === "false") {
            navList.setAttribute('data-visible', true);
            mobileNavToggle.setAttribute('aria-expanded', true);
        } else {
            navList.setAttribute('data-visible', false);
            mobileNavToggle.setAttribute('aria-expanded', false);
        }
    });

    // Modal functionality for service descriptions
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const modalId = box.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    });

    // Display a welcome message in the console
    console.log("Welcome to FrozenCore Technologies!");

    // Additional features can include:
    // - Form validation
    // - Interactive sliders or carousels
    // - Dynamic content loading
    // - Animations on scroll
    // - Lightbox for portfolio items
    // - Live chat or chatbots
});

// Example of form validation
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    // Add more validation checks as needed
}

// Example of an animation on scroll
window.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight - 150) {
            element.classList.add('start-animation');
        }
    });
});