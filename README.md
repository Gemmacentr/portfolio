# Gemma Centrone · Portfolio

Portfolio personal de una sola página, creado como proyecto final del **Máster Avanzado de Diseño y Desarrollo Web** (CEI Madrid).

🔗 **Web online:** [gemmacentr.github.io/portfolio](https://gemmacentr.github.io/portfolio/)

![Vista previa del portfolio](assets/preview.webp)

## Sobre el proyecto

Una landing page que reúne quién soy, mi trayectoria, las tecnologías que uso y los proyectos en los que he trabajado. La portada es una cuadrícula de bloques (foto, CV, vídeo, proyectos destacados, playlist y contacto) y, debajo, las secciones de experiencia, formación y stack.

## Funcionalidades

- **Loader** con contador y barra de progreso (solo la primera vez en cada sesión).
- **Cursor personalizado** en dispositivos con ratón.
- **Menú responsive**: navegación visible en escritorio y menú a pantalla completa en móvil.
- **Traducción** del contenido en italiano, inglés y español.
- **Slider** de proyectos destacados.
- **Playlist de Spotify** en una lightbox, para escuchar música mientras se navega.
- **Descarga del CV** en PDF.
- **Marquee** con las tecnologías que uso.
- Respeto de `prefers-reduced-motion`: las animaciones se desactivan si el usuario lo pide.

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, custom properties, media queries)
- JavaScript (vanilla, sin librerías)
- Metodología **SUIT CSS** para el nombre de las clases

## Estructura

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── init.js
│   ├── main.js
│   └── traduzioni.js
└── assets/
```

## Cómo verlo en local

No necesita instalación: basta con abrir `index.html` en el navegador o usar la extensión Live Server de VS Code.

## Uso de IA

Parte del código se ha revisado y generado con Claude (Anthropic). Los archivos afectados lo indican en un comentario al principio, con el prompt utilizado.

## Créditos

- Tipografías: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) e [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- Iconos: [Icons8](https://icons8.com)

## Contacto

**Gemma Centrone** · Frontend Developer
[LinkedIn](https://es.linkedin.com/in/gemma-centrone-831376174) · [GitHub](https://github.com/Gemmacentr)
