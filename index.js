document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("primaryNav");
  const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];

  const closeNav = () => {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  };

  const openNav = () => {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", "true");
    navLinks.classList.add("is-open");
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    navAnchors.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        closeNav();
      });
    });

    document.addEventListener("click", (event) => {
      if (event.target instanceof Node && !header.contains(event.target)) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        closeNav();
      }
    });
  }

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 6);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    document.body.classList.add("has-motion");
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.2 }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  const yearNode = document.getElementById("currentYear");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
});
