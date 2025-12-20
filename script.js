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

// content detail section

/* === NEW SERVICE SECTIONS ANIMATIONS === */
// Select all elements with the custom data-animate attribute
const animateElements = document.querySelectorAll("[data-animate]");

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the active class to trigger CSS transition
        entry.target.classList.add("animate-active");
        // Stop observing once animated
        serviceObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Slight offset for smoother feel
  }
);

animateElements.forEach((el) => serviceObserver.observe(el));
// gemini answer
/* ===============================
   PROJECT DETAIL CONTENT
================================ */

const projectData = {
  appointment: {
    en: `
      <h2>Appointment-Based Business Platform</h2>
      <p>
        A fully customized website developed for businesses that operate with
        scheduled client appointments. The system focuses on clarity,
        accessibility, and trust-building through a modern user experience.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Online appointment booking with flexible time slots</li>
        <li>Mobile-friendly and fast-loading interface</li>
        <li>SEO-optimized structure for local search visibility</li>
        <li>Google Maps business registration and optimization</li>
        <li>Google & Meta Ads setup for targeted customer acquisition</li>
      </ul>

      <h4>Industries This Helps</h4>
      <ul>
        <li>Consulting & Coaching services</li>
        <li>Health & wellness professionals</li>
        <li>Legal & financial advisors</li>
        <li>Local service providers</li>
      </ul>
    `,
    de: `
      <h2>Terminbasierte Business-Plattform</h2>
      <p>
        Eine individuell entwickelte Website für Unternehmen, die mit festen
        Kundenterminen arbeiten. Der Fokus liegt auf Übersichtlichkeit,
        Benutzerfreundlichkeit und Vertrauen.
      </p>

      <h4>Zentrale Funktionen</h4>
      <ul>
        <li>Online-Terminbuchung mit flexiblen Zeitfenstern</li>
        <li>Mobiloptimiertes und schnelles Design</li>
        <li>SEO-optimierte Struktur für lokale Sichtbarkeit</li>
        <li>Google-Maps-Unternehmenseintrag & Optimierung</li>
        <li>Google- & Meta-Werbekampagnen</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>Beratung & Coaching</li>
        <li>Gesundheits- und Wellnessbereiche</li>
        <li>Rechts- & Finanzdienstleister</li>
        <li>Lokale Dienstleistungsunternehmen</li>
      </ul>
    `,
  },

  ai: {
    en: `
      <h2>AI Automation System</h2>
      <p>
        An AI-powered automation solution designed to reduce repetitive manual
        work and increase operational efficiency across digital processes.
      </p>

      <h4>Capabilities</h4>
      <ul>
        <li>AI chatbots for customer inquiries</li>
        <li>Automated email & form processing</li>
        <li>Workflow automation via APIs</li>
        <li>Smart data classification and routing</li>
      </ul>

      <h4>Ideal For</h4>
      <ul>
        <li>Customer support teams</li>
        <li>Small & medium enterprises</li>
        <li>Service-based businesses</li>
        <li>Internal operations optimization</li>
      </ul>
    `,
    de: `
      <h2>KI-Automatisierungssystem</h2>
      <p>
        Eine KI-gestützte Lösung zur Automatisierung wiederkehrender Aufgaben
        und zur Effizienzsteigerung von Geschäftsprozessen.
      </p>

      <h4>Funktionen</h4>
      <ul>
        <li>KI-Chatbots für Kundenanfragen</li>
        <li>Automatisierte E-Mail- & Formularverarbeitung</li>
        <li>Workflow-Automatisierung über APIs</li>
        <li>Intelligente Datenverarbeitung</li>
      </ul>

      <h4>Geeignet für</h4>
      <ul>
        <li>Kundensupport-Teams</li>
        <li>Kleine & mittelständische Unternehmen</li>
        <li>Dienstleistungsbetriebe</li>
        <li>Interne Prozessoptimierung</li>
      </ul>
    `,
  },

  cloud: {
    en: `
      <h2>Cloud Infrastructure with Terraform</h2>
      <p>
        A scalable cloud infrastructure built using Infrastructure as Code
        principles, ensuring reliability, security, and easy expansion.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>Terraform-based infrastructure setup</li>
        <li>Automated deployments</li>
        <li>Secure cloud environments</li>
        <li>Cost-efficient scalability</li>
      </ul>

      <h4>Best For</h4>
      <ul>
        <li>SaaS platforms</li>
        <li>Growing tech startups</li>
        <li>Data-driven applications</li>
      </ul>
    `,
    de: `
      <h2>Cloud-Infrastruktur mit Terraform</h2>
      <p>
        Skalierbare Cloud-Infrastruktur auf Basis von Infrastructure as Code,
        für maximale Stabilität und Erweiterbarkeit.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>Terraform-basierte Systemarchitektur</li>
        <li>Automatisierte Deployments</li>
        <li>Sichere Cloud-Umgebungen</li>
        <li>Kostenoptimierte Skalierung</li>
      </ul>

      <h4>Geeignet für</h4>
      <ul>
        <li>SaaS-Plattformen</li>
        <li>Wachsende Tech-Unternehmen</li>
        <li>Datenintensive Anwendungen</li>
      </ul>
    `,
  },

  network: {
    en: `
      <h2>IT Support & Network Solutions</h2>
      <p>
        Complete IT support and network setup for small businesses to ensure
        stable, secure, and efficient daily operations.
      </p>

      <h4>Services</h4>
      <ul>
        <li>Office network planning & installation</li>
        <li>Firewall & security setup</li>
        <li>Device configuration & troubleshooting</li>
        <li>Ongoing technical support</li>
      </ul>

      <h4>Industries</h4>
      <ul>
        <li>Small offices</li>
        <li>Retail businesses</li>
        <li>Professional service firms</li>
      </ul>
    `,
    de: `
      <h2>IT-Support & Netzwerklösungen</h2>
      <p>
        Umfassender IT-Support und Netzwerklösungen für kleine Unternehmen
        zur Sicherstellung eines stabilen Betriebs.
      </p>

      <h4>Leistungen</h4>
      <ul>
        <li>Netzwerkplanung & Installation</li>
        <li>Firewall- & Sicherheitskonzepte</li>
        <li>Gerätekonfiguration & Fehlerbehebung</li>
        <li>Laufender technischer Support</li>
      </ul>

      <h4>Branchen</h4>
      <ul>
        <li>Kleine Büros</li>
        <li>Einzelhandel</li>
        <li>Dienstleistungsunternehmen</li>
      </ul>
    `,
  },

  ecommerce: {
    en: `
      <h2>E-Commerce Platform</h2>
      <p>
        A conversion-focused online store designed to help businesses sell
        products efficiently and scale their digital presence.
      </p>

      <h4>Features</h4>
      <ul>
        <li>Modern and responsive design</li>
        <li>Secure payment integration</li>
        <li>Product & inventory management</li>
        <li>SEO & performance optimization</li>
      </ul>

      <h4>Perfect For</h4>
      <ul>
        <li>Small online retailers</li>
        <li>Local brands going digital</li>
        <li>Subscription-based businesses</li>
      </ul>
    `,
    de: `
      <h2>E-Commerce-Plattform</h2>
      <p>
        Ein verkaufsoptimierter Online-Shop für Unternehmen, die ihre Produkte
        professionell und skalierbar online anbieten möchten.
      </p>

      <h4>Funktionen</h4>
      <ul>
        <li>Modernes & responsives Design</li>
        <li>Sichere Zahlungsintegration</li>
        <li>Produkt- & Lagerverwaltung</li>
        <li>SEO- & Performance-Optimierung</li>
      </ul>

      <h4>Geeignet für</h4>
      <ul>
        <li>Kleine Online-Händler</li>
        <li>Lokale Marken</li>
        <li>Abo- & Produktmodelle</li>
      </ul>
    `,
  },
};

/* OPEN / CLOSE */
function openProject(key) {
  document.getElementById("projectList").style.display = "none";
  document.getElementById("projectDetail").style.display = "block";

  const lang = document.body.classList.contains("lang-de") ? "de" : "en";
  document.getElementById("projectContent").innerHTML = projectData[key][lang];
}

function closeProject() {
  document.getElementById("projectDetail").style.display = "none";
  document.getElementById("projectList").style.display = "grid";
}
