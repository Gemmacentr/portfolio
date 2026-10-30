/*
  ==========================================================================
  main.js · Portfolio Gemma Centrone

  Estructura (dentro de una IIFE):
    1. Constantes ..... elementos del DOM y valores fijos
    2. Variables ...... valores que cambian (progreso, slide, temporizador)
    3. Funciones ...... lógica y handlers de cada módulo
    4. Asignaciones ... eventos y arranque

  Módulos:
    Cursor personalizado · Loader · Menú móvil · Slider de proyectos ·
    Lightbox de la playlist · Filtros de proyectos · Grupos desplegables
    en móvil · Aparición al hacer scroll · Galería Alta Via 1

  Uso de IA: este archivo se revisó y reestructuró con Claude (Anthropic)
  a partir de mi código original (cursor y loader con setInterval).
  Prompt: "corrige los errores de mi main.js y adáptalo a la rúbrica del CEI
  (IIFE, handlers, requestAnimationFrame) con clases SUIT CSS".
  ==========================================================================
*/

"use strict";

(() => {
  // ===== 1. CONSTANTES =====

  // Cursor: solo en dispositivos con ratón
  const cursor = document.querySelector(".Cursor");
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  // Loader
  const loader = document.querySelector(".Loader");
  const loaderNumber = document.querySelector(".Loader-number");
  const loaderBar = document.querySelector(".Loader-bar");
  const siteContent = document.querySelector(".SiteContent");
  const loaderStep = 4; // cuánto avanza el porcentaje en cada frame

  // Menú
  const buttonNav = document.querySelector(".Menu-nav");
  const navigationHeader = document.querySelector(".Nav-list");
  const headerLogo = document.querySelector(".Header-logo");
  const navLinks = document.querySelectorAll(".Nav-list a");

  // Slider de proyectos
  const projectSlide = document.querySelectorAll(".Project-slide");
  const projectPrev = document.querySelector(".Project-button--prev");
  const projectNext = document.querySelector(".Project-button--next");
  const currentSlide = document.querySelector(".Project-current");

  // Lightbox de la playlist
  const contenitore = document.querySelector(".Lightbox");
  const img = document.querySelector(".Grid-img");
  const player = document.querySelector(".Lightbox-player");
  const chiudi = document.querySelector(".Lightbox-btn");

  // Filtros y grupos de proyectos
  const cards = document.querySelectorAll(".ProjectCard");
  const groups = document.querySelectorAll(
    ".ProjectGrid-group, .ProjectGrid-intro, .ProjectGrid-toggle",
  );
  const buttons = document.querySelectorAll(".Filters-button");
  const toggles = document.querySelectorAll(".ProjectGrid-toggle");

  // Aparición al hacer scroll
  const revealSections = document.querySelectorAll(".u-reveal");
  const revealOptions = { rootMargin: "-100px 0px" }; // 100px de margen arriba y abajo

  // Galería Alta Via 1
  const galleryTrack = document.querySelector(".Gallery-track");
  const galleryDots = document.querySelectorAll(".Gallery-dot");

  // ===== 2. VARIABLES =====

  let progress = 0; // porcentaje del Loader
  let currentIndex = 0; // slide visible del slider
  let resizeTimer; // temporizador del redimensionado

  // ===== 3. FUNCIONES =====

  // --- Cursor ---

  // Mueve el Cursor a la posición del ratón
  const moveCursorHandler = (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  };

  // --- Loader ---

  // Oculta el Loader, muestra el contenido y vuelve a permitir el scroll
  const revealSite = () => {
    loader.classList.add("isHidden");
    siteContent.classList.add("isVisible");
    document.body.style.overflow = "auto";
  };

  // Si el Loader ya se vio, lo oculta al instante, sin transición
  const skipLoader = () => {
    loader.style.transition = "none";
    siteContent.style.transition = "none";
    revealSite();
  };

  // Avanza el contador y la barra un paso por frame hasta llegar a 100
  const updateLoader = () => {
    progress = Math.min(progress + loaderStep, 100);
    loaderNumber.textContent = progress;
    loaderBar.style.width = `${progress}%`;
    loader.setAttribute("aria-valuenow", progress);

    progress < 100
      ? requestAnimationFrame(updateLoader)
      : setTimeout(revealSite, 200);
  };

  // Comprueba si el Loader ya se mostró en esta sesión
  const hasSeenLoader = () => {
    try {
      return sessionStorage.getItem("loaded") === "true";
    } catch {
      return false;
    }
  };

  // Guarda en la sesión que el Loader ya se mostró
  const markLoaderSeen = () => {
    try {
      sessionStorage.setItem("loaded", "true");
    } catch {
      // si el navegador bloquea el storage, el Loader se mostrará siempre
    }
  };

  // Arranca el Loader la primera vez que se entra en la web
  const startLoader = () => {
    markLoaderSeen();
    requestAnimationFrame(updateLoader);
  };

  // --- Menú ---

  // Abre o cierra el menú móvil
  const toggleMenuHandler = () => {
    const isOpen = buttonNav.classList.toggle("isOpen");
    navigationHeader.classList.toggle("isOpen", isOpen);
    headerLogo.classList.toggle("isOpen", isOpen);
    buttonNav.setAttribute("aria-expanded", isOpen);
  };

  // Cierra el menú al pulsar un enlace
  const closeMenuHandler = () => {
    buttonNav.classList.remove("isOpen");
    navigationHeader.classList.remove("isOpen");
    headerLogo.classList.remove("isOpen");
    buttonNav.setAttribute("aria-expanded", false);
  };

  // Quita la clase que pausa la transición del menú
  const stopResizing = () => {
    document.body.classList.remove("isResizing");
  };

  // Pausa la transición del menú mientras se redimensiona la ventana
  const resizeHandler = () => {
    document.body.classList.add("isResizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(stopResizing, 400);
  };

  // --- Slider de proyectos ---

  // Muestra la slide indicada (el % hace que vuelva al principio o al final)
  const showSlide = (index) => {
    currentIndex = (index + projectSlide.length) % projectSlide.length;

    projectSlide.forEach((slide, i) => {
      slide.classList.toggle("isActive", i === currentIndex);
    });

    currentSlide.textContent = currentIndex + 1;
  };

  const nextSlideHandler = () => showSlide(currentIndex + 1);
  const prevSlideHandler = () => showSlide(currentIndex - 1);

  // --- Lightbox ---

  // Abre el Lightbox y carga el iframe de Spotify solo la primera vez
  const openLightboxHandler = () => {
    !player.src && (player.src = player.dataset.src);
    contenitore.classList.add("isVisible");
  };

  // Cierra el Lightbox
  const closeLightboxHandler = () => {
    contenitore.classList.remove("isVisible");
  };

  // Cierra el Lightbox al pulsar fuera del reproductor
  const lightboxBackdropHandler = (e) => {
    e.target === contenitore && closeLightboxHandler();
  };

  // --- Filtros de proyectos ---

  // Muestra las tarjetas del filtro elegido y oculta los grupos vacíos
  const filterProjects = (filter) => {
    // Muestra u oculta cada tarjeta según sus categorías
    cards.forEach((card) => {
      const categories = card.dataset.cats.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });

    // Marca el botón activo
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.filter === filter);
    });

    // Oculta título, intro y botón de los grupos sin tarjetas visibles
    groups.forEach((group) => {
      const hasVisibleCard = [...cards].some(
        (card) =>
          card.dataset.group === group.dataset.groupLabel && !card.hidden,
      );
      group.hidden = !hasVisibleCard;
    });
  };

  // Filtra según el botón pulsado
  const filterHandler = (e) => {
    filterProjects(e.currentTarget.dataset.filter);
  };

  // --- Grupos desplegables en móvil ---

  // Abre o cierra las tarjetas del grupo del botón pulsado
  const toggleGroupHandler = (e) => {
    const toggle = e.currentTarget;
    const groupName = toggle.dataset.groupLabel;
    const isOpen = toggle.classList.toggle("isOpen");

    toggle.setAttribute("aria-expanded", isOpen);

    cards.forEach((card) => {
      card.dataset.group === groupName &&
        card.classList.toggle("isOpen", isOpen);
    });
  };

  // --- Aparición al hacer scroll ---

  // Añade isVisible a la sección cuando entra en pantalla y la quita al salir
  const revealHandler = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("isVisible", entry.isIntersecting);
    });
  };

  // --- Galería Alta Via 1 ---

  // Mueve el track a la foto indicada y marca su punto
  const showPhoto = (index) => {
    galleryTrack.style.transform = `translateX(${index * -100}%)`;

    galleryDots.forEach((dot, i) => {
      dot.classList.toggle("isActive", i === index);
    });
  };

  // ===== 4. ASIGNACIONES =====

  // Cursor
  canHover && document.addEventListener("mousemove", moveCursorHandler);

  // Loader: se salta si ya se vio en esta sesión
  hasSeenLoader() ? skipLoader() : startLoader();

  // Menú
  buttonNav.addEventListener("click", toggleMenuHandler);
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenuHandler);
  });
  window.addEventListener("resize", resizeHandler);

  // Slider de proyectos
  projectNext.addEventListener("click", nextSlideHandler);
  projectPrev.addEventListener("click", prevSlideHandler);

  // Lightbox
  img.addEventListener("click", openLightboxHandler);
  chiudi.addEventListener("click", closeLightboxHandler);
  contenitore.addEventListener("click", lightboxBackdropHandler);

  // Filtros y grupos
  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleGroupHandler);
  });

  // Aparición al hacer scroll: el observer vigila cada sección
  const revealObserver = new IntersectionObserver(revealHandler, revealOptions);
  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });

  // Galería: cada punto lleva a su foto
  galleryDots.forEach((dot, i) => {
    dot.addEventListener("click", () => showPhoto(i));
  });
})();
