document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    // Event listener for the toggle button
    toggleButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  });