const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.className = savedTheme;
    themeBtn.textContent = savedTheme === "dark"
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    themeBtn.textContent = currentTheme === "dark"
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});