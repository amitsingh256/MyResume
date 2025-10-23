// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect (safe with check)
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

  // Reveal on scroll
  const sections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial call on page load
});


document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const subtitle = document.querySelector(".intro p");
  if (subtitle) {
    const text = "Python Developer & AI/ML Enthusiast";
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

  // Reveal on scroll
  const sections = document.querySelectorAll(".section");
  const revealOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Theme toggle (Dark / Light)
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});
