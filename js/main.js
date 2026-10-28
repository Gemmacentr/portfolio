/*
  ==========================================================================
  main.js · Portfolio Gemma Centrone
  Estructura: constantes → variables → funciones → asignaciones (dentro de una IIFE)
  Módulos: Cursor personalizado · Loader con contador y barra de progreso

  Uso de IA: este archivo se revisó y reestructuró con Claude (Anthropic)
  a partir de mi código original (cursor y loader con setInterval).
  Prompt: "corrige los errores de mi main.js y adáptalo a la rúbrica del CEI
  (IIFE, handlers, requestAnimationFrame) con clases SUIT CSS".
  ==========================================================================
*/

"use strict";

// ===== Constantes: elementos del DOM (selectores SUIT) =====
const cursor = document.querySelector(".Cursor");
const loader = document.querySelector(".Loader");
const loaderNumber = document.querySelector(".Loader-number");
const loaderBar = document.querySelector(".Loader-bar");
const siteContent = document.querySelector(".SiteContent");
const loaderStep = 4; // cuánto avanza el porcentaje en cada frame
const buttonNav = document.querySelector(".Menu-nav");
const navigationHeader = document.querySelector(".Nav-list");
const headerLogo = document.querySelector(".Header-logo");
// ===== Variables =====

// ===== Funciones =====

// Mueve el Cursor a la posición del ratón (el -50% lo mantiene centrado)

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

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
let progress = 0;
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

// ===== Asignaciones =====

if (hasSeenLoader()) {
  skipLoader();
} else {
  markLoaderSeen();
  requestAnimationFrame(updateLoader);
}

buttonNav.addEventListener("click", () => {
  buttonNav.classList.toggle("isOpen");
  navigationHeader.classList.toggle("isOpen");
  headerLogo.classList.toggle("isOpen");
});
const navLinks = document.querySelectorAll(".Nav-list a");

const closeMenuHandler = () => {
  buttonNav.classList.remove("isOpen");
  navigationHeader.classList.remove("isOpen");
  headerLogo.classList.remove("isOpen");
};

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenuHandler);
});

const projectSlide = document.querySelectorAll(".Project-slide");
const projectPrev = document.querySelector(".Project-button--prev");
const projectNext = document.querySelector(".Project-button--next");
const currentSlide = document.querySelector(".Project-current");

let currentIndex = 0;

const showSlide = (index) => {
  currentIndex = (index + projectSlide.length) % projectSlide.length;

  projectSlide.forEach((slide, i) => {
    slide.classList.toggle("isActive", i === currentIndex);
  });

  currentSlide.textContent = currentIndex + 1;
};
const nextSlideHandler = () => showSlide(currentIndex + 1);
const prevSlideHandler = () => showSlide(currentIndex - 1);

projectNext.addEventListener("click", nextSlideHandler);
projectPrev.addEventListener("click", prevSlideHandler);

const contenitore = document.querySelector(".Lightbox");
const img = document.querySelector(".Grid-img");
const player = document.querySelector(".Lightbox-player");
const chiudi = document.querySelector(".Lightbox-btn");

(img.addEventListener("click", () => {
  !player.src && (player.src = player.dataset.src);
  contenitore.classList.add("isVisible");
}),
  contenitore.addEventListener("click", (e) => {
    e.target === contenitore && contenitore.classList.remove("isVisible");
  }),
  chiudi.addEventListener("click", () => {
    contenitore.classList.remove("isVisible");
  }));

const cards = document.querySelectorAll(".ProjectCard");
const groups = document.querySelectorAll(".ProjectGrid-group");
const buttons = document.querySelectorAll(".Filters-button");

function filterProjects(filter) {
  // Mostra o nasconde le card
  cards.forEach(function (card) {
    let categories = card.dataset.cats.split(" ");

    if (filter === "all" || categories.includes(filter)) {
      card.hidden = false;
    } else {
      card.hidden = true;
    }
  });

  // Aggiorna i pulsanti
  buttons.forEach(function (button) {
    if (button.dataset.filter === filter) {
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }
  });

  // Nasconde i gruppi vuoti
  groups.forEach(function (group) {
    let groupName = group.dataset.groupLabel;
    let visible = false;

    cards.forEach(function (card) {
      if (card.dataset.group === groupName && !card.hidden) {
        visible = true;
      }
    });

    if (visible) {
      group.hidden = false;
    } else {
      group.hidden = true;
    }
  });
}

// Quando clicco su un pulsante, filtro i progetti
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let filter = button.dataset.filter;
    filterProjects(filter);
  });
});
const revealSections = document.querySelectorAll(".u-reveal");

const revealHandler = () => {
  revealSections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const bottom = section.getBoundingClientRect().bottom;

    if (top < window.innerHeight - 100 && bottom > 100) {
      section.classList.add("isVisible");
    } else {
      section.classList.remove("isVisible");
    }
  });
};

window.addEventListener("scroll", revealHandler);
revealHandler();

const galleryTrack = document.querySelector(".Gallery-track");
const galleryDots = document.querySelectorAll(".Gallery-dot");

galleryDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    galleryTrack.style.transform = `translateX(${i * -100}%)`;

    galleryDots.forEach((d) => d.classList.remove("isActive"));
    dot.classList.add("isActive");
  });
});
