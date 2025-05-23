
  // Smooth scroll when clicking nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

// === HEADER HIDE/SHOW & ACTIVE LINK ===
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links li a");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let current = "";

  // Active link logic
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Header show/hide logic
  if (window.scrollY > lastScrollY) {
    header.classList.add("hide"); // scroll down
  } else {
    header.classList.remove("hide"); // scroll up
  }

  lastScrollY = window.scrollY;
});

// Hide header on nav link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.add("hide");
  });
});


  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
  });
  
 
  const animatedItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Remove when out of view
      }
    });
  }, { threshold: 0.2 });

  animatedItems.forEach(item => {
    observer.observe(item);
  });

const canvas = document.getElementById("codeBackground");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters
const chars = "01#<>[]{}$%^&*~+=";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

// Animation
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 66);

