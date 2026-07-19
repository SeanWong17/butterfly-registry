(function initializeTheme() {
  "use strict";

  let theme = "light";
  try {
    const savedTheme = window.localStorage.getItem("wing-register-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch (_) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    theme === "dark" ? "#101512" : "#f4f6f2"
  );
})();
