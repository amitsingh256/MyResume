// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const subtitle = document.querySelector(".intro p");
  if (subtitle) {
    const text = "Python & AI Developer";
    let index = 0;
    subtitle.innerHTML = "";

    function typeEffect() {
      if (index < text.length) {
        subtitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    }

    typeEffect();
  }

  // Reveal on scroll animation
  const sections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  // Trigger on scroll + initial load
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
