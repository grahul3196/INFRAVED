document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      alert(`Navigating to ${link.textContent} page.`);
    });
  });
});
