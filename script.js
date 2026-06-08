const html = document.documentElement;
const btn = document.getElementById("themeToggle");
const label = document.getElementById("themeLabel");

const savedTheme = localStorage.getItem("ys-theme");
if (savedTheme === "dark" || savedTheme === "light") {
  html.setAttribute("data-theme", savedTheme);
}

function refreshThemeLabel() {
  const current = html.getAttribute("data-theme");
  label.textContent = current === "dark" ? "Light" : "Dark";
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", current === "dark" ? "#08090b" : "#ed1c2a");
}

refreshThemeLabel();

btn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("ys-theme", next);
  refreshThemeLabel();
});
