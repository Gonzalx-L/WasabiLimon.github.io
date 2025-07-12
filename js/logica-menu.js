/** @format */

// Asegurarnos de que todo el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Shrink Navbar
  const navbar = document.getElementById("mainNavbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shrink", window.scrollY > 50);
  });

  // Registrar GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1) Animación de las cards del menú
  gsap.from(".menu-card", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#menu",
      start: "top 85%",
    },
  });

  // 2) Animación de las imágenes destacadas
  gsap.from(".menu-img-feature", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".menu-img-feature",
      start: "top 90%",
    },
  });

  // 3) Animación de la sección QR
  gsap.from("#qr h2, #qr p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#qr",
      start: "top 90%",
    },
  });
  gsap.from("#qr img", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#qr img",
      start: "top 90%",
    },
  });
});
