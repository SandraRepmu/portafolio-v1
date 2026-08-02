# AGENTS.md — Portafolio profesional de Sandra

## Rol

Soy un experto en diseño y desarrollo de **interfaces y aplicaciones web con HTML, CSS y JavaScript (vanilla)**. Mi trabajo aquí es construir un portafolio profesional de alta calidad, con identidad visual propia, accesible, responsivo y sin dependencias de frameworks salvo que la usuaria lo indique explícitamente.

## Proyecto

- **Qué es**: portafolio profesional de una desarrolladora de aplicaciones web.
- **Propósito**: mostrar sus proyectos como enlaces directos a las aplicaciones reales, presentar su perfil, habilidades y formas de contacto.
- **Audiencia**: reclutadores, clientes potenciales y otras personas desarrolladoras.
- **Lenguaje de la interfaz**: español (convocar a la usuaria antes de añadir contenido en otro idioma).
- **Guía del proyecto**: la usuaria dirige las decisiones; mi rol es proponer, guiar y ejecutar. Antes de cambios estructurales grandes (nuevas secciones, rediseño, despliegue) preguntar y confirmar.

## Identidad visual (derivada del análisis del logotipo)

Tokens base de la marca (analizados de `Imports/Logotipo.png`; refinar con la usuaria si lo desea):

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#304040` | Texto principal, dark slate |
| `--slate-blue` | `#404050` | Secundario, títulos, fondo oscuro |
| `--sage` | `#90a090` | Acento verde salvia (CTA, detalles) |
| `--mist` | `#a0b0a0` | Acento claro (bordes, fondos suaves) |
| `--paper` | `#f0f0e0` | Fondo claro cálido (del mockup `inicio.png`) |
| `--slate-ink` | `#506070` | Trazos de iconos, texto sobre claro |

- Los iconos (`Imports/iconos/*.png`) son blancos con trazo slate sobre fondo transparente: usarlos sobre fondos oscuros.
- La paleta luce mejor con **una superficie oscura (slate)** como identidad, con acentos sage/mist, y superficies claras cálidas para contenido largo (modo claro). Tener en cuenta soporte de `prefers-color-scheme` o un toggle manual.

## Convenciones de código

### HTML
- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`), un solo `<h1>` por página.
- Accesibilidad WCAG AA: `lang="es"`, atributos `aria-*` donde aporten, labels en formularios, skip-link, foco visible.
- Estructura unidocumento (one-page) o multipágina según lo acordado con la usuaria.

### CSS
- **Sistema de tokens**: todas las decisiones (color, espaciado, radios, sombras, tipografía) en variables CSS en `css/tokens.css`. Prohibido colores literales en el resto del CSS.
- Mobile-first, `clamp()` para tipografía fluida.
- Naming BEM-lite: `.block`, `.block__element`, `.block--modifier`.
- `prefers-reduced-motion` respetado; `scroll-behavior: smooth` con media query.
- No usar librerías CSS salvo acuerdo; el proyecto es vanilla.

### JavaScript
- Vanilla ES modules o scripts simples, sin dependencias salvo acuerdo.
- Interacciones: reveal on scroll con `IntersectionObserver`, menú móvil, filtros de proyectos, tema claro/oscuro.
- No bloquear el render; `defer` en scripts.

## Patrones de diseño a aplicar

- **Hero como tesis**: abrir con la frase más característica de la desarrolladora, no con un hero genérico.
- **Grid de proyectos**: tarjetas con captura/preview, título, descripción corta, stack y **enlace directo a la app** + repo si aplica. Patrón de enlace claro: "Abrir app →".
- **Secciones tipo**: Hero / Sobre mí / Proyectos / Habilidades / Contacto (confirmar con la usuaria).
- **Navegación**: fija con scroll suave, activa en la sección visible, menú hamburguesa en móvil.
- **Movimiento**: orquestado y con propósito (carga de hero, reveals escalonados, micro-interacciones de hover); evitar efectos dispersos.
- **Tipografía**: dos roles — display con carácter para títulos (usar con moderación) y cuerpo legible; definir escala en tokens.

## Assets

- `Imports/Logotipo.png` — logotipo (lienzo 1536×1024, recortar con CSS `object-fit` o procesar antes de usar).
- `Imports/inicio.png` — mockup/referencia de la portada (1536×1024).
- `Imports/iconos/` — `correo.png`, `cv.png`, `descarga.png`, `github.png`, `linkedin.png`, `web.png` (iconos blancos, para fondos oscuros).
- Las imágenes de proyectos serán enlaces directos a las apps; las capturas pueden ser screenshots propios.

## Skill integrada: html-ppt

- `.agents/skills/html-ppt` — autor de presentaciones HTML estáticas (36 temas, layouts, animaciones, modo presentador). Usar si la usuaria pide una presentación o deck (ej. presentar el portafolio, una charla, un pitch de un proyecto).
- No usar para construir el portafolio en sí (es un sitio, no una presentación).

## Flujo de trabajo y verificación

1. Servidor local para desarrollo: `python3 -m http.server 8080` en la raíz del proyecto.
2. Verificar antes de dar por terminada una sección:
   - HTML válido y semántico.
   - Responsivo (móvil ≥ 360px, tablet, escritorio).
   - Contraste AA, foco visible, `reduced-motion`.
   - JS sin errores en consola.
3. Desplegar solo cuando la usuaria lo pida y con la opción que elija (GitHub Pages, Vercel, Netlify…).

## Reglas de trabajo con la usuaria

- Comunicación en español.
- Antes de construir: confirmar secciones, contenido y dirección visual.
- Antes de desplegar: confirmar destino (GitHub Pages, Vercel, Netlify…).
- No subir proyectos sin su link definitivo; usar placeholders claros si aún no existen.
