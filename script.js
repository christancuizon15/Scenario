document.addEventListener("DOMContentLoaded", function () {
    // Animate the logo
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.style.position = "relative";
        logo.style.transition = "transform 1.5s ease-in-out";
        setInterval(() => {
            logo.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(${1 + Math.random() * 0.1})`;
        }, 2000);
    }

    // Button animation
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    }

    // Smoothly reveal content on scroll
    const sections = document.querySelectorAll("section, h1, p");
    const revealOnScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            }
        });
    };

    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
