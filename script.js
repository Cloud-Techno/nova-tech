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
      <h2>Appointment-Based Website</h2>
      <p>
        This website allows businesses to manage client appointments efficiently. The booking process is simple, clear, and professional.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Online appointment booking with flexible time slots</li>
        <li>Fast, mobile-friendly interface</li>
        <li>Local search optimization with Google Maps</li>
        <li>Optional Google & Meta Ads to attract new clients</li>
      </ul>

      <h4>Industries That Benefit</h4>
      <ul>
        <li>Health & wellness (therapists, gyms, yoga)</li>
        <li>Consulting & coaching</li>
        <li>Local services like salons, tutoring, repair shops</li>
        <li>Small businesses that want a professional online presence</li>
      </ul>
    `,
    de: `
      <h2>Terminbasierte Website</h2>
      <p>
        Diese Website ermöglicht Unternehmen, Kundentermine effizient zu verwalten. Die Buchung ist einfach, übersichtlich und professionell.
      </p>

      <h4>Hauptfunktionen</h4>
      <ul>
        <li>Online-Terminbuchung mit flexiblen Zeitfenstern</li>
        <li>Schnelle, mobilfreundliche Benutzeroberfläche</li>
        <li>Optimierung für lokale Suche via Google Maps</li>
        <li>Optional: Google- & Meta-Werbung zur Kundengewinnung</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>Gesundheits- & Wellnessanbieter (Therapeuten, Fitnessstudios, Yoga)</li>
        <li>Beratung & Coaching</li>
        <li>Lokale Dienstleistungen wie Friseure, Nachhilfe, Reparaturdienste</li>
        <li>Kleine Unternehmen mit professioneller Online-Präsenz</li>
      </ul>
    `,
  },

  ecommerce: {
    en: `
      <h2>E-Commerce Platform</h2>
      <p>
        A modern online store that helps businesses sell products efficiently and grow their digital presence.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Responsive and visually appealing design</li>
        <li>Secure payment integration</li>
        <li>Product catalog and inventory management</li>
        <li>SEO & performance optimization to attract more customers</li>
      </ul>

      <h4>Industries That Benefit</h4>
      <ul>
        <li>Small online retailers</li>
        <li>Local brands moving digital</li>
        <li>Subscription-based businesses</li>
        <li>Any business selling products online</li>
      </ul>
    `,
    de: `
      <h2>E-Commerce-Plattform</h2>
      <p>
        Ein moderner Online-Shop, der Unternehmen beim Verkauf von Produkten und beim Ausbau ihrer digitalen Präsenz unterstützt.
      </p>

      <h4>Hauptfunktionen</h4>
      <ul>
        <li>Responsives, ansprechendes Design</li>
        <li>Sichere Zahlungsintegration</li>
        <li>Produktkatalog- und Lagerverwaltung</li>
        <li>SEO- & Performance-Optimierung für mehr Kunden</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>Kleine Online-Händler</li>
        <li>Lokale Marken auf digitalem Weg</li>
        <li>Abo-Modelle und Produktdienste</li>
        <li>Jedes Unternehmen, das Produkte online verkauft</li>
      </ul>
    `,
  },

  cloud: {
    en: `
      <h2>Cloud Infrastructure</h2>
      <p>
        A scalable cloud setup built to handle growing business needs. It ensures reliability, security, and simple expansion.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Infrastructure as Code for consistency</li>
        <li>Automated deployment and management</li>
        <li>Secure cloud environments</li>
        <li>Cost-efficient scalability</li>
      </ul>

      <h4>Industries That Benefit</h4>
      <ul>
        <li>SaaS platforms</li>
        <li>Tech startups</li>
        <li>Data-heavy applications</li>
      </ul>
    `,
    de: `
      <h2>Cloud-Infrastruktur</h2>
      <p>
        Eine skalierbare Cloud-Lösung, die wachsenden Anforderungen gerecht wird. Zuverlässigkeit, Sicherheit und einfache Erweiterbarkeit sind garantiert.
      </p>

      <h4>Hauptfunktionen</h4>
      <ul>
        <li>Infrastructure as Code für konsistente Umgebungen</li>
        <li>Automatisierte Bereitstellung & Verwaltung</li>
        <li>Sichere Cloud-Umgebungen</li>
        <li>Kostenoptimierte Skalierung</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>SaaS-Plattformen</li>
        <li>Tech-Startups</li>
        <li>Datenintensive Anwendungen</li>
      </ul>
    `,
  },

  network: {
    en: `
      <h2>IT Support & Network Solutions</h2>
      <p>
        Full IT support and network setup to ensure small businesses operate securely and efficiently every day.
      </p>

      <h4>Key Services</h4>
      <ul>
        <li>Office network planning & installation</li>
        <li>Firewall & security configuration</li>
        <li>Device setup & troubleshooting</li>
        <li>Ongoing technical support</li>
      </ul>

      <h4>Industries That Benefit</h4>
      <ul>
        <li>Small offices</li>
        <li>Retail businesses</li>
        <li>Professional service firms</li>
      </ul>
    `,
    de: `
      <h2>IT-Support & Netzwerklösungen</h2>
      <p>
        Umfassender IT-Support und Netzwerklösungen, damit kleine Unternehmen täglich sicher und effizient arbeiten können.
      </p>

      <h4>Hauptleistungen</h4>
      <ul>
        <li>Netzwerkplanung & Installation</li>
        <li>Firewall- & Sicherheitskonfiguration</li>
        <li>Gerätekonfiguration & Fehlerbehebung</li>
        <li>Laufender technischer Support</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>Kleine Büros</li>
        <li>Einzelhandel</li>
        <li>Professionelle Dienstleister</li>
      </ul>
    `,
  },

  ai: {
    en: `
      <h2>AI Automation System</h2>
      <p>
        AI-driven automation to reduce repetitive tasks and speed up business processes, allowing teams to focus on important work.
      </p>

      <h4>Key Capabilities</h4>
      <ul>
        <li>AI chatbots for customer inquiries</li>
        <li>Automated email & form handling</li>
        <li>Workflow automation via APIs</li>
        <li>Smart data classification and routing</li>
      </ul>

      <h4>Industries That Benefit</h4>
      <ul>
        <li>Customer support teams</li>
        <li>SMEs</li>
        <li>Service-based businesses</li>
        <li>Internal operations of companies</li>
      </ul>
    `,
    de: `
      <h2>KI-Automatisierungssystem</h2>
      <p>
        KI-gestützte Automatisierung reduziert wiederkehrende Aufgaben und beschleunigt Geschäftsprozesse, damit Teams sich auf wichtige Arbeit konzentrieren können.
      </p>

      <h4>Hauptfunktionen</h4>
      <ul>
        <li>KI-Chatbots für Kundenanfragen</li>
        <li>Automatisierte E-Mail- & Formularverarbeitung</li>
        <li>Workflow-Automatisierung über APIs</li>
        <li>Intelligente Datenklassifizierung und -weiterleitung</li>
      </ul>

      <h4>Geeignet für Branchen</h4>
      <ul>
        <li>Kundensupport-Teams</li>
        <li>Kleine & mittlere Unternehmen</li>
        <li>Dienstleistungsbetriebe</li>
        <li>Interne Unternehmensprozesse</li>
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
