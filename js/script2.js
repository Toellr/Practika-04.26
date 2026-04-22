const modal2 = document.getElementById("roleModal");
const btn = document.getElementById("openModal");

btn.addEventListener("click", () => {
  modal2.classList.add("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.classList.remove("show");
  }
});

