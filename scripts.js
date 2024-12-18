/* jshint esversion: 6 */
/* jshint browser: true */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 769) {
            mobileMenu.classList.remove("open");
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.textContent = "Thank you! Your message has been submitted.";
    confirmationMessage.style.display = "block";

    this.reset();
});
