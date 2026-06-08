
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const brandLogo = document.getElementById("brandLogo");

const saved = localStorage.getItem("ys-theme");
if (saved === "light" || saved === "dark") {
  root.setAttribute("data-theme", saved);
}

function updateThemeUI() {
  const current = root.getAttribute("data-theme") || "light";
  themeText.textContent = current === "light" ? "Dark" : "Light";
  themeMeta.setAttribute("content", current === "light" ? "#f2f2f4" : "#070809");
  brandLogo.src = current === "light" ? brandLogo.dataset.lightSrc : brandLogo.dataset.darkSrc;
}

updateThemeUI();

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("ys-theme", next);
  updateThemeUI();
});
