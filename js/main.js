// Stanford Student Personal Website JavaScript
// Minimal JavaScript for mobile menu functionality and accessibility enhancements

(function () {
  "use strict";

  // Mobile menu functionality
  function initMobileMenu() {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!mobileToggle || !navList) return;

    mobileToggle.addEventListener("click", function () {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";

      // Toggle aria-expanded
      mobileToggle.setAttribute("aria-expanded", !isExpanded);

      // Toggle active class for animation
      mobileToggle.classList.toggle("active");
      navList.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const navLinks = navList.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.classList.remove("active");
        navList.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !mobileToggle.contains(event.target) &&
        !navList.contains(event.target)
      ) {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.classList.remove("active");
        navList.classList.remove("active");
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.classList.remove("active");
        navList.classList.remove("active");
      }
    });
  }

  // Smooth scrolling for anchor links (if any)
  function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        if (href === "#") return; // Skip empty anchors

        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  // Keyboard navigation enhancements
  function initKeyboardNavigation() {
    // Add skip link functionality
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.className = "skip-link";
    skipLink.textContent = "Skip to main content";
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID if it doesn't exist
    const mainContent = document.querySelector("main");
    if (mainContent && !mainContent.id) {
      mainContent.id = "main-content";
    }
  }

  // Initialize all functionality when DOM is ready
  function init() {
    // Check if DOM is already loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        initMobileMenu();
        initSmoothScrolling();
        initKeyboardNavigation();
      });
    } else {
      // DOM is already loaded
      initMobileMenu();
      initSmoothScrolling();
      initKeyboardNavigation();
    }
  }

  // Start initialization
  init();
})();
