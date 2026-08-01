// ============================================
// Portfolio JavaScript
// ============================================

// ============================================
// Typing Animation
// ============================================

const texts = [
  "Software Tester",
  "Java Full Stack Developer",
  "Automation Tester",
  "Frontend Developer",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  const current = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = current.substring(0, charIndex++);
  } else {
    typingElement.textContent = current.substring(0, charIndex--);
  }

  let speed = 120;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ============================================
// Mobile Menu
// ============================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active"),
    );
  });
}

// ============================================
// Close Mobile Menu
// ============================================

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ============================================
// Dark Mode
// ============================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");

      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");

      localStorage.setItem("theme", "light");
    }
  });
}

// ============================================
// Remember Theme
// ============================================

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    const icon = document.querySelector("#theme-toggle i");

    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
});

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// Sticky Navbar
// ============================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
  }
});

// ============================================
// Reveal Animation
// ============================================

const sections = document.querySelectorAll("section");

function revealSections() {
  const trigger = window.innerHeight - 120;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();

// ============================================
// Active Navigation
// ============================================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// ============================================
// Scroll To Top Button
// ============================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#4a6cf7";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "18px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// EmailJS Initialization
// ============================================

emailjs.init({
  publicKey: "VkIdKm7g9vpskHzve",
});

// ============================================
// Contact Form
// ============================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector("button");

    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    emailjs
      .sendForm("service_k6gpnip", "template_0f4wpkp", this)

      .then(() => {
        alert("✅ Message sent successfully!");

        contactForm.reset();
      })

      .catch((error) => {
        console.error(error);

        alert("❌ Failed to send message. Please try again.");
      })

      .finally(() => {
        submitBtn.innerHTML = "Send Message";
        submitBtn.disabled = false;
      });
  });
}

// ============================================
// Page Loader
// ============================================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ============================================
// Console Message
// ============================================

console.log("====================================");
console.log("Portfolio Loaded Successfully");
console.log("Developed by Soundarya S Badiger");
console.log("====================================");
