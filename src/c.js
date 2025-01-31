// JavaScript for Chadilaw Clone Website

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav a");
    const mobileMenuBtn = document.createElement("button");
    const nav = document.querySelector(".nav");

    // Sticky Header Effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Smooth Scrolling for Nav Links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Navigation Toggle
    mobileMenuBtn.textContent = "☰";
    mobileMenuBtn.classList.add("mobile-menu-btn");
    header.appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });
});
