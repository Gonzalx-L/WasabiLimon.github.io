/** @format */

// ===== Animaciones Sección Nosotros =====
gsap.registerPlugin(ScrollTrigger);
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("shrink", window.scrollY > 50);
});

// Título y subtítulo
gsap.from("#nosotros h2, #nosotros p.fs-5", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#nosotros",
    start: "top 85%",
  },
});

// Cards Misión/Visión/Valores
gsap.from(".card-mv", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card-mv",
    start: "top 80%",
  },
});

// Timeline items
gsap.from(".timeline-item", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".timeline-item",
    start: "top 85%",
  },
});

// Equipo (team cards)
gsap.from(".team-card", {
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".team-card",
    start: "top 90%",
  },
});

// Galería
gsap.from(".gallery-img", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".gallery-row",
    start: "top 85%",
  },
});
