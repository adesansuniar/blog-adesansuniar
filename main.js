document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-link");

  // Toggle menu on click
  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    toggle.setAttribute("aria-expanded", menu.classList.contains("active"));
  });

  // Highlight aktif saat diklik
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
