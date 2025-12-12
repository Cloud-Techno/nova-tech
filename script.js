/* script.js */

// 1. Language Switcher Logic
const body = document.body;
const langBtn = document.querySelector(".lang-btn");

// Check local storage or default to English
let currentLang = localStorage.getItem("site_lang") || "en";
setLanguage(currentLang);

if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "de" : "en";
    setLanguage(currentLang);
  });
}

function setLanguage(lang) {
  body.classList.remove("lang-en", "lang-de");
  body.classList.add(`lang-${lang}`);
  localStorage.setItem("site_lang", lang);

  // Update Button Text
  if (langBtn) {
    langBtn.innerText = lang === "en" ? "DE / EN" : "EN / DE";
  }
}

// 2. Mobile Menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
}

// 3. Scroll Animation (Simple Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".glass-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// 4. Animated Counters
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// 5. Particles.js Config
// if (document.getElementById("particles-js")) {
//   particlesJS("particles-js", {
//     particles: {
//       number: { value: 60, density: { enable: true, value_area: 800 } },
//       color: { value: "#0ef" },
//       shape: { type: "circle" },
//       opacity: { value: 0.3, random: false },
//       size: { value: 3, random: true },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#0ef",
//         opacity: 0.2,
//         width: 1,
//       },
//       move: { enable: true, speed: 2 },
//     },

//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: { enable: true, mode: "grab" },
//         onclick: { enable: true, mode: "push" },
//       },
//       modes: { grab: { distance: 140, line_linked: { opacity: 1 } } },
//     },
//     retina_detect: true,
//   });
// }

// --- 5. Particles.js Configuration ---
// Check if div exists to avoid errors on other pages
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#0ef" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0ef",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: { repulse: { distance: 200, duration: 0.4 } },
    },
    retina_detect: true,
  });
}
