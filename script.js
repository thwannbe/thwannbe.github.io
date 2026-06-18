const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});

document.querySelectorAll(".js-collapsible").forEach((list) => {
  const items = [...list.children].filter((item) => !item.classList.contains("placeholder"));
  const visibleCount = Number(list.dataset.visibleCount || 5);

  if (items.length <= visibleCount) return;

  items.slice(visibleCount).forEach((item) => {
    item.hidden = true;
  });

  const button = document.createElement("button");
  button.type = "button";
  button.className = "show-more";
  button.textContent = "Show more";
  button.setAttribute("aria-expanded", "false");
  list.after(button);

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    items.slice(visibleCount).forEach((item) => {
      item.hidden = expanded;
    });
    button.textContent = expanded ? "Show more" : "Show less";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

const navLinks = [...document.querySelectorAll(".topnav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] }
);

sections.forEach((section) => observer.observe(section));
