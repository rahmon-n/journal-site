const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  nav.classList.toggle("active");
});
