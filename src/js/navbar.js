const menuSection = document.querySelector(".nav-movil");
const toggleBtn = document.getElementById("menu-toggle");

toggleBtn.addEventListener("click", () => {
  menuSection.classList.toggle("active");
});
