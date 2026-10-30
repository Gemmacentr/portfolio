# Gemma Centrone · Portfolio

Portfolio personal de una sola página, creado como proyecto final del **Máster Avanzado de Diseño y Desarrollo Web** (CEI Madrid).

🔗 **Web online:** [gemmacentr.github.io/portfolio](https://gemmacentr.github.io/portfolio/)

![Vista previa del portfolio](assets/preview.webp)

## Sobre el proyecto

Una landing page que reúne quién soy, mi trayectoria, las tecnologías que uso y los proyectos en los que he trabajado. La portada es una cuadrícula de bloques (foto, contacto, CV, presentación, proyectos destacados, vídeo y playlist) y, debajo, las secciones Chi sono, Percorso, Stack, Progetti, Passioni y Contatti.

## Funcionalidades

- **Loader** con contador y barra de progreso (solo la primera vez en cada sesión).
- **Cursor personalizado** en dispositivos con ratón.
- **Menú responsive**: navegación visible en escritorio y menú a pantalla completa en móvil.
- **Traducción** del contenido en italiano, inglés y español, sin recargar la página.
- **Slider** de proyectos destacados.
- **Filtros de proyectos** por disciplina (front-end, data visualization, UI/UX, 3D y diseño).
- **Grupos de proyectos desplegables** en móvil, para no tener que recorrer toda la lista.
- **Galería** de fotos con puntos de navegación y **carrusel** con scroll-snap de la revista del Camino de Santiago.
- **Aparición de las secciones** al hacer scroll, con IntersectionObserver.
- **Playlist de Spotify** en una lightbox: el reproductor solo se carga si se abre.
- **Descarga del CV** en PDF.
- **Marquee** con las tecnologías que uso.
- Respeto de `prefers-reduced-motion`: las animaciones se desactivan si el usuario lo pide.

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, custom properties, media queries)
- JavaScript vanilla, sin librerías
- Metodología **SUIT CSS** para el nombre de las clases

## Optimización

- Imágenes en WEBP con respaldo en JPG/PNG mediante `<picture>`, con `loading="lazy"`.
- Vídeo en WEBM y MP4 con imagen `poster`.
- Tipografías alojadas en local (woff2) y precargadas.
- Iconos en SVG reutilizados con `<symbol>` y `<use>`.
- Scripts con `defer`.

## Estructura

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── init.js           (oculta el loader si ya se vio en la sesión)
│   ├── main.js           (módulos de la web)
│   └── translations.js   (textos en IT, EN y ES)
├── fonts/
└── assets/               (imágenes, vídeo y PDF)
```

## Cómo verlo en local

No necesita instalación: basta con abrir `index.html` en el navegador o usar la extensión Live Server de VS Code.

## Uso de IA

Parte del código se ha revisado y generado con Claude (Anthropic). Los archivos afectados lo indican en un comentario al principio, con el prompt utilizado.

## Créditos

- Tipografías: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) e [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## Contacto

**Gemma Centrone** · Frontend Developer
[LinkedIn](https://www.linkedin.com/in/gemma-centrone-831376174/) · [GitHub](https://github.com/Gemmacentr)
