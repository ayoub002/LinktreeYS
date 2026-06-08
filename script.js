// Année automatique dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Optionnel : tracking simple des clics dans la console
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Click:", link.href);
  });
});
