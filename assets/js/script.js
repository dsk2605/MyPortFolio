'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Glow fade-in on scroll
const faders = document.querySelectorAll(".section, .portfolio-card, .article-card");
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.transition = "opacity 1s ease, transform 1s ease";
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = "translateY(40px)";
  appearOnScroll.observe(fader);
});

/* =============================
   VIEW MORE PAGE VIDEO PLAYER
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recording-card");
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");
  const closeBtn = document.getElementById("closeModal");

  if (cards && modal && video && closeBtn) {
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const src = card.getAttribute("data-video");
        video.src = src;
        modal.classList.add("active");
        video.play();
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      video.pause();
      video.currentTime = 0;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        video.pause();
        video.currentTime = 0;
      }
    });
  }
});
