/** @format */

//<!-- Shrink Navbar -->

const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("shrink", window.scrollY > 50);
});

// <!-- GSAP ScrollTrigger Animations -->

gsap.registerPlugin(ScrollTrigger);

// Hero text animation
gsap.from(".gsap-in-left", {
  x: -200,
  opacity: 0,
  duration: 1.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".gsap-in-left",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

// Advanced scroll animation for title
gsap.utils.toArray(".gsap-fall").forEach((title) => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 80,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    },
  );
});
//<!--secction platos----------->

//<!--secction platos----------->
// Letra por letra (al llegar a sección)
const titulo = document.getElementById("titulo-platos");
const letras = titulo.textContent.split("");
titulo.textContent = "";
letras.forEach((letra) => {
  const span = document.createElement("span");
  span.textContent = letra;
  span.style.opacity = "0";
  span.style.display = "inline-block";
  span.style.transform = "translateY(20px)";
  titulo.appendChild(span);
});

// GSAP: animación de letras
gsap.registerPlugin(ScrollTrigger);

gsap.to("#titulo-platos span", {
  opacity: 1,
  y: 0,
  stagger: 0.04,
  ease: "power2.out",
  duration: 0.6,
  scrollTrigger: {
    trigger: "#titulo-platos",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
