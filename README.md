# The Carrete — Landing Page

SPA de fotografía profesional construida con **React + TypeScript + Vite + Tailwind CSS**.

## Requisitos

- Node.js 18 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build   # genera la carpeta /dist
npm run preview # sirve /dist localmente para verificar el build
```

## Despliegue en GitHub Pages

Hay dos formas, elige una:

### Opción A — GitHub Actions (recomendada, automática)

Ya incluida en `.github/workflows/deploy.yml`. Solo necesitas:

1. Subir el repo a GitHub.
2. En **Settings → Pages → Build and deployment → Source**, elegir **GitHub Actions**.
3. Hacer push a `main`. El workflow compila y publica automáticamente.

### Opción B — `gh-pages` manual

```bash
npm run deploy
```

Esto publica el contenido de `/dist` en la rama `gh-pages`. Actívala en
**Settings → Pages → Source → Deploy from a branch → gh-pages**.

### Nota sobre `base` en `vite.config.ts`

- Publicando en `https://usuario.github.io/nombre-repo/` → deja `base: './'`
  (ya configurado) o cámbialo a `'/nombre-repo/'`.
- Publicando en un dominio propio o en la raíz de `usuario.github.io` → deja
  `base: './'`.

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Colores, tipografías, animaciones | `tailwind.config.js` |
| Textos, servicios, imágenes, redes sociales | `src/data/content.ts` |
| Foto de fondo global | `src/components/layout/BackgroundLayer.tsx` |
| Datos de contacto / envío de formulario | `src/components/sections/Contact.tsx` |

Todas las imágenes actuales usan `picsum.photos` como **placeholder** —
reemplázalas por fotos reales antes de publicar.

## Estructura

```
src/
├── components/
│   ├── ui/          # Button, Card, SectionTitle, Container
│   ├── layout/      # Header, Footer, BackgroundLayer
│   ├── sections/    # Hero, About, Services, Gallery, Contact
│   ├── Carousel.tsx
│   ├── Lightbox.tsx
│   └── SocialIcon.tsx
├── data/content.ts  # todo el contenido textual y las imágenes
├── types/index.ts
├── hooks/useActiveSection.ts
├── App.tsx
├── main.tsx
└── index.css
```
