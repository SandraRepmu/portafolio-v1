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
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery", "Responsive Design"],
    icono: "assets/icons/icono-frontend.png",
  },
  {
    titulo: "Backend",
    items: ["PHP", "Java", "C#"],
    icono: "assets/icons/icono-backend.png",
  },
  {
    titulo: "Bases de datos",
    items: ["MySQL", "Oracle SQL", "PL/SQL"],
    icono: "assets/icons/icono-bases.png",
  },
  {
    titulo: "CMS & E-commerce",
    items: ["WordPress", "Elementor", "WooCommerce"],
    icono: "assets/icons/icono-cms.svg?v=2",
  },
  {
    titulo: "Herramientas",
    items: ["Git", "GitHub"],
    icono: "assets/icons/icono-herramientas.png",
  },
  {
    titulo: "Ampliando conocimientos",
    modificador: "learning",
    items: ["React", "Angular"],
    icono: "assets/icons/icono-learning.svg?v=2",
    nota: "En aprendizaje",
  },
  {
    titulo: "IA aplicada al desarrollo",
    modificador: "ai",
    items: ["ChatGPT", "Codex", "OpenCode"],
    icono: "assets/icons/icono-ia.svg?v=2",
    nota: "Como apoyo en el desarrollo",
  },
];

function renderProyectos(contenedor) {
  if (PROYECTOS.length === 0) {
    contenedor.innerHTML = `
      <div class="projects__empty" data-reveal>
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

  contenedor.innerHTML = PROYECTOS.map((p, i) => {
    const media = p.imagen
      ? `<img src="${p.imagen}" alt="Captura de ${p.titulo}" loading="lazy" />`
      : `<span style="font-family: var(--font-display); color: var(--text-faint); font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.1em;">Próximamente</span>`;
    const repo = p.repo
      ? `<a href="${p.repo}" target="_blank" rel="noopener">Código <span class="arrow" aria-hidden="true">→</span></a>`
      : "";
    const stack = p.stack.map((t) => `<span class="chip">${t}</span>`).join("");

    return `
      <article class="project-card" data-reveal style="--reveal-delay: ${(i + 1) * 120}ms">
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
    const icono = grupo.icono
      ? `<img class="skill-group__icon" src="${grupo.icono}" alt="" width="36" height="36" loading="lazy" />`
      : "";
    const nota = grupo.nota ? `<p class="skill-group__note">${grupo.nota}</p>` : "";
    return `
      <article class="skill-group${modificador}" data-reveal style="--reveal-delay: ${(i + 1) * 140}ms">
        <h3 class="skill-group__title">
          ${icono}
          ${grupo.titulo}
        </h3>
        <ul class="skill-group__list">${items}</ul>
        ${nota}
      </article>
    `;
  }).join("");
}

renderProyectos(document.getElementById("projects-grid"));
renderHabilidades(document.getElementById("skills-grid"));
