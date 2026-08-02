/* ---- Tema claro / oscuro ---- */
const toggle = document.getElementById("theme-toggle");
const raiz = document.documentElement;
const iconoTema = toggle.querySelector("span");

function aplicarTema(tema) {
  raiz.dataset.theme = tema;
  toggle.setAttribute("aria-pressed", String(tema === "dark"));
  iconoTema.textContent = tema === "dark" ? "☀" : "☾";
}

aplicarTema(raiz.dataset.theme || "light");

toggle.addEventListener("click", () => {
  const nuevo = raiz.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", nuevo);
  aplicarTema(nuevo);
});

/* ---- Header con sombra al hacer scroll ---- */
const header = document.getElementById("header");

function onScroll() {
  header.classList.toggle("header--scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---- Altura real de la cabecera (evita solapes de contenido) ---- */
function medirHeader() {
  raiz.style.setProperty("--header-h", `${header.getBoundingClientRect().height}px`);
}

medirHeader();
window.addEventListener("resize", medirHeader);

/* ---- Menú móvil ---- */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

function cerrarMenu() {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menú de navegación");
}

navToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(abierto));
  navToggle.setAttribute("aria-label", abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación");
});

navLinks.querySelectorAll("a").forEach((enlace) => enlace.addEventListener("click", cerrarMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarMenu();
});

/* ---- Sección activa en la navegación ---- */
const secciones = document.querySelectorAll("section[id]");
const enlacesNav = document.querySelectorAll(".nav__link");

const spy = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      enlacesNav.forEach((enlace) => {
        enlace.classList.toggle("is-active", enlace.getAttribute("href") === `#${entrada.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

secciones.forEach((seccion) => spy.observe(seccion));

/* ---- Reveal al hacer scroll ---- */
const movible = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (movible) {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
} else {
  const reveal = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));
}
