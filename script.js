// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput.value.trim() !== "") {
        alert(`Thanks for subscribing, ${emailInput.value}!`);
        emailInput.value = "";
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us. We’ll get back to you shortly!");
      contactForm.reset();
    });
  }

  // Register form
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration successful! Check your email for confirmation.");
      registerForm.reset();
    });
  }

  // Login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful!");
      loginForm.reset();
    });
  }

  // Admin login form
  const adminForm = document.getElementById("adminForm");
  if (adminForm) {
    adminForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Admin login successful!");
      adminForm.reset();
    });
  }

  // Careers form
  const careersForm = document.getElementById("careersForm");
  if (careersForm) {
    careersForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for applying! We’ll review your application.");
      careersForm.reset();
    });
  }

  // Blog subscription
  const blogForm = document.getElementById("blogForm");
  if (blogForm) {
    blogForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for subscribing to our blog!");
      blogForm.reset();
    });
  }
});

