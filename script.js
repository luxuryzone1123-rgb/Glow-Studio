/* =========================================================
   GLOW STUDIO — SCRIPT.JS
   Handles: mobile nav toggle, active link highlight,
   back-to-top button, contact form validation, and scroll reveal.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Mobile navigation toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primary-nav');

  navToggle.addEventListener('click', function () {
    var isOpen = primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close the mobile menu whenever a nav link is clicked */
  var navLinks = document.querySelectorAll('.nav-link, .navbar__cta');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      primaryNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 2. Highlight active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-link');

  function highlightActiveLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.remove('is-active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink();

  /* ---------- 3. Back-to-top button ---------- */
  var backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  });

  /* ---------- 4. Contact form validation ---------- */
  var form = document.getElementById('contactForm');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var formNote = document.getElementById('formNote');

  function showError(input, errorId, message) {
    input.classList.add('is-invalid');
    document.getElementById(errorId).textContent = message;
  }

  function clearError(input, errorId) {
    input.classList.remove('is-invalid');
    document.getElementById(errorId).textContent = '';
  }

  function isValidEmail(value) {
    // Simple, beginner-friendly email pattern check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var isFormValid = true;

    // Name check
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, 'nameError', 'Please enter your full name.');
      isFormValid = false;
    } else {
      clearError(nameInput, 'nameError');
    }

    // Email check
    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'emailError', 'Please enter a valid email address.');
      isFormValid = false;
    } else {
      clearError(emailInput, 'emailError');
    }

    // Message check
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, 'messageError', 'Message should be at least 10 characters.');
      isFormValid = false;
    } else {
      clearError(messageInput, 'messageError');
    }

    if (!isFormValid) {
      formNote.textContent = '';
      return;
    }

    // NOTE: There is no backend/server connected to this form.
    // This only simulates a successful submission in the browser.
    // To actually receive messages, connect this form to a service
    // like Formspree, EmailJS, Netlify Forms, or your own backend.
    formNote.textContent = "Thanks! This is a demo form — no message was actually sent (no backend connected).";
    form.reset();

    setTimeout(function () {
      formNote.textContent = '';
    }, 6000);
  });

  /* ---------- 5. Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Older browsers: just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 6. Auto-update footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
