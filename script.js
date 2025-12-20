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

/* === FOOTER REVEAL ON SCROLL === */
const footerElements = document.querySelectorAll(".footer-col, .footer-bottom");

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        footerObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

footerElements.forEach((el) => footerObserver.observe(el));




<section class="services">
  <div class="container">

    <h2 data-en="Our Services"
        data-de="Unsere Dienstleistungen">
      Our Services
    </h2>

    <p class="subtitle"
       data-en="Powerful digital solutions designed for long-term success"
       data-de="Leistungsstarke digitale Lösungen für nachhaltigen Erfolg">
       Powerful digital solutions designed for long-term success
    </p>

    <div class="service-grid">

      <!-- Web Development -->
      <div class="service-card">
        <h3 data-en="Web Development"
            data-de="Webentwicklung">Web Development</h3>

        <p data-en="We build high-performance, modern and fully customized websites tailored to your business goals. From corporate websites to advanced e-commerce platforms, our solutions focus on speed, security and scalability."
           data-de="Wir entwickeln leistungsstarke, moderne und individuell angepasste Websites, die exakt auf Ihre Geschäftsziele abgestimmt sind. Von Unternehmenswebsites bis hin zu komplexen E-Commerce-Plattformen stehen Performance, Sicherheit und Skalierbarkeit im Fokus.">
        </p>

        <p data-en="All our websites are responsive, SEO-friendly and easy to manage, ensuring long-term digital growth for your company."
           data-de="Alle unsere Websites sind responsiv, SEO-freundlich und leicht zu verwalten – für nachhaltiges digitales Wachstum.">
        </p>
      </div>

      <!-- Digital Marketing -->
      <div class="service-card">
        <h3 data-en="Digital Marketing"
            data-de="Digitales Marketing">Digital Marketing</h3>

        <p data-en="Visibility is the key to success. Our data-driven digital marketing strategies help your brand reach the right audience at the right time."
           data-de="Sichtbarkeit ist der Schlüssel zum Erfolg. Unsere datenbasierten Digital-Marketing-Strategien erreichen genau die Zielgruppe, die für Ihr Unternehmen relevant ist.">
        </p>

        <p data-en="Through SEO, social media marketing, email campaigns and online advertising, we increase reach, conversions and measurable results."
           data-de="Durch SEO, Social Media Marketing, E-Mail-Kampagnen und Online-Werbung steigern wir Reichweite, Conversions und messbare Ergebnisse.">
        </p>
      </div>

      <!-- UI UX -->
      <div class="service-card">
        <h3 data-en="UI / UX Design"
            data-de="UI / UX Design">UI / UX Design</h3>

        <p data-en="Great design goes beyond visuals. We create intuitive, user-centered interfaces that guide visitors smoothly through your website."
           data-de="Gutes Design ist mehr als nur Optik. Wir gestalten intuitive, nutzerzentrierte Benutzeroberflächen, die Besucher gezielt führen.">
        </p>

        <p data-en="Our UI/UX approach increases engagement, trust and conversion rates while strengthening your brand identity."
           data-de="Unser UI/UX-Ansatz steigert Nutzerbindung, Vertrauen und Conversion-Raten und stärkt Ihre Markenidentität.">
        </p>
      </div>

      <!-- Maintenance -->
      <div class="service-card">
        <h3 data-en="Website Maintenance"
            data-de="Website-Wartung">Website Maintenance</h3>

        <p data-en="A professional website requires continuous care. We handle updates, security monitoring and performance optimization."
           data-de="Eine professionelle Website benötigt kontinuierliche Pflege. Wir übernehmen Updates, Sicherheitsüberwachung und Performance-Optimierung.">
        </p>

        <p data-en="This ensures your website stays fast, secure and reliable – while you focus on your core business."
           data-de="So bleibt Ihre Website schnell, sicher und zuverlässig – während Sie sich auf Ihr Kerngeschäft konzentrieren.">
        </p>
      </div>

    </div>
  </div>
</section>
