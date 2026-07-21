# Course Platform

Un visor de notas de clase (React + Vite + MUI) listo para fundar un curso nuevo: clona este repo, sigue el checklist de abajo, y en unos minutos tienes tu propio sitio de lecciones desplegado en GitHub Pages.

Las lecciones se escriben en Markdown estándar (ver [`classnotesapp/specs/02-dsl.md`](classnotesapp/specs/02-dsl.md) para la sintaxis completa, incluyendo los bloques especiales: diagramas Mermaid, código interactivo con DartPad, videos de YouTube, y el visualizador de beans de Spring). El contenido (`toc.md` + `content/`) se lee en tiempo de ejecución desde este mismo repo vía `raw.githubusercontent.com` — editar una lección y hacer push la actualiza en el sitio ya desplegado, sin necesidad de reconstruir ni redesplegar la app.

## Fundar un curso nuevo

1. **Usa este repo como template** en GitHub ("Use this template" → "Create a new repository"), o clónalo directamente.
2. **Colores** — edita `classnotesapp/src/theme/colors.js`. Mismo shape en `light`/`dark`, solo cambia los valores.
3. **Logo/favicon** — reemplaza `classnotesapp/src/assets/logo.svg` por tu propio logo (mismo nombre de archivo, o actualiza las referencias en `AppBarGlobal.jsx` e `index.html` si usas otro nombre/formato).
4. **Nombre del curso** — dos lugares:
   - `classnotesapp/src/components/AppBarGlobal.jsx`: las dos strings marcadas `FOUNDING A COURSE` (versión larga y versión corta para móvil).
   - `classnotesapp/index.html`: el `<title>`.
5. **Contenido** — reemplaza los archivos de ejemplo en `content/*.md` y `toc.md` (raíz del repo, no dentro de `classnotesapp/`) por tus propias lecciones. Los archivos de ejemplo sirven de referencia de sintaxis mientras tanto — bórralos cuando ya no los necesites.
6. **Apunta la app a tu contenido** — edita `classnotesapp/src/content/config.js`:
   ```js
   tocUrl: 'https://raw.githubusercontent.com/<tu-usuario>/<este-repo>/refs/heads/main/toc.md'
   ```
   Y dentro de tu propio `toc.md`, cada línea `[lesson:url]` debe apuntar de la misma forma a `content/tu-leccion.md` en tu repo.
7. **Push a `main`.**
8. **Activa GitHub Pages**: Settings → Pages → Source = "GitHub Actions". El workflow en `.github/workflows/deploy-pages.yml` construye y despliega automáticamente en cada push a `main` — el base path se calcula solo a partir del nombre del repo, no hay que editarlo.
9. Tu sitio queda en `https://<tu-usuario>.github.io/<este-repo>/`.

## Desarrollo local

Todos los comandos corren desde `classnotesapp/`:

```bash
npm install
npm run dev       # servidor de desarrollo con hot reload
npm run test      # suite de tests (incluye render real de todas las construcciones del DSL)
npm run lint
npm run build      # build de producción
```

## Qué NO es parte de esto

Este template asume GitHub Pages como único método de despliegue — no incluye Docker/nginx. Si necesitas self-hosting, agrégalo tú mismo; no viene por defecto para no arrastrar configuración sin verificar a cada curso nuevo.
