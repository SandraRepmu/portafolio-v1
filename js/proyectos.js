/* Proyectos: sección preparada para recibir aplicaciones.
   Para publicar un proyecto, añade un objeto a PROYECTOS con:
   { titulo, descripcion, stack: [], app, repo, imagen }
   - app: URL directa de la aplicación.
   - repo: URL del repositorio (opcional).
   - imagen: captura de la app (opcional; sin imagen se muestra placeholder). */

const PROYECTOS = [];

const GRUPOS_HABILIDADES = [
  {
    titulo: "Frontend",
    modificador: "frontend",
    items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Diseño responsive"],
    svg: `<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M2.5 9.5h19"/><path d="M6 7h.01M8.5 7h.01"/><path d="M10.3 11.9 8.6 13.5l1.7 1.6"/><path d="M13.7 11.9 15.4 13.5l-1.7 1.6"/><path d="m14.6 11.3-2.2 4.4"/>`,
  },
  {
    titulo: "Backend",
    items: ["PHP", "Java", "C#"],
    svg: `<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M6.5 7.5h.01M6.5 16.5h.01"/><path d="M9.5 7.5h3.5M9.5 16.5h3.5"/>`,
  },
  {
    titulo: "Bases de datos",
    items: ["MySQL", "Oracle SQL", "PL/SQL"],
    svg: `<ellipse cx="12" cy="6" rx="7.5" ry="2.6"/><path d="M4.5 6v12c0 1.44 3.36 2.6 7.5 2.6s7.5-1.16 7.5-2.6V6"/><path d="M4.5 12c0 1.44 3.36 2.6 7.5 2.6s7.5-1.16 7.5-2.6"/>`,
  },
  {
    titulo: "Herramientas",
    items: ["Visual Studio Code", "Eclipse", "XAMPP", "SQL Developer", "Git", "Draw.io"],
    svg: `<circle cx="12" cy="12" r="3"/><path d="M12 2.6v2.9M12 18.5v2.9M2.6 12h2.9M18.5 12h2.9M5.3 5.3l2 2M16.7 16.7l2 2M18.7 5.3l-2 2M7.3 16.7l-2 2"/>`,
  },
];

function renderProyectos(contenedor) {
  if (PROYECTOS.length === 0) {
    contenedor.innerHTML = `
      <div class="projects__empty">
        <span class="projects__empty-badge">En preparación</span>
        <p class="projects__empty-title">Mis próximos proyectos aparecerán aquí</p>
        <p>
          Estoy terminando mis primeras aplicaciones publicadas. Mientras tanto,
          puedes ver mi trabajo en GitHub o escribirme para conocer los detalles.
        </p>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = PROYECTOS.map((p) => {
    const media = p.imagen
      ? `<img src="${p.imagen}" alt="Captura de ${p.titulo}" loading="lazy" />`
      : `<span style="font-family: var(--font-display); color: var(--text-faint); font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.1em;">Próximamente</span>`;
    const repo = p.repo
      ? `<a href="${p.repo}" target="_blank" rel="noopener">Código <span class="arrow" aria-hidden="true">→</span></a>`
      : "";
    const stack = p.stack.map((t) => `<span class="chip">${t}</span>`).join("");

    return `
      <article class="project-card" data-reveal>
        <div class="project-card__media">${media}</div>
        <div class="project-card__body">
          <h3 class="project-card__title">${p.titulo}</h3>
          <p class="project-card__desc">${p.descripcion}</p>
          <div class="project-card__stack">${stack}</div>
          <div class="project-card__links">
            <a href="${p.app}" target="_blank" rel="noopener">Abrir app <span class="arrow" aria-hidden="true">→</span></a>
            ${repo}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderHabilidades(contenedor) {
  contenedor.innerHTML = GRUPOS_HABILIDADES.map((grupo, i) => {
    const items = grupo.items
      .map((item) => `<li class="skill-group__item">${item}</li>`)
      .join("");
    const modificador = grupo.modificador ? ` skill-group--${grupo.modificador}` : "";
    return `
      <article class="skill-group${modificador}" data-reveal style="--reveal-delay: ${(i + 1) * 140}ms">
        <h3 class="skill-group__title">
          <svg class="skill-group__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${grupo.svg}</svg>
          ${grupo.titulo}
        </h3>
        <ul class="skill-group__list">${items}</ul>
      </article>
    `;
  }).join("");
}

renderProyectos(document.getElementById("projects-grid"));
renderHabilidades(document.getElementById("skills-grid"));
