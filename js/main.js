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
let progress = 0;

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

// ===== Asignaciones =====

if (hasSeenLoader()) {
  revealSite();
} else {
  markLoaderSeen();
  requestAnimationFrame(updateLoader);
}

buttonNav.addEventListener("click", () => {
  buttonNav.classList.toggle("isOpen");
  navigationHeader.classList.toggle("isOpen");
  headerLogo.classList.toggle("isOpen");
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

const playlistOpen = document.querySelector(".Playlist-open");
const lightbox = document.querySelector(".Lightbox");
const lightboxClose = document.querySelector(".Lightbox-close");
const lightboxPlayer = document.querySelector(".Lightbox-player");

const openLightboxHandler = () => {
  !lightboxPlayer.src && (lightboxPlayer.src = lightboxPlayer.dataset.src);
  lightbox.classList.add("isVisible");
  lightboxClose.focus();
};
const closeLightboxHandler = () => {
  lightbox.classList.remove("isVisible");
  playlistOpen.focus();
};
const backdropClickHandler = (e) => {
  e.target === lightbox && closeLightboxHandler();
};
const escapeKeyHandler = (e) => {
  e.key === "Escape" &&
    lightbox.classList.contains("isVisible") &&
    closeLightboxHandler();
};

playlistOpen.addEventListener("click", openLightboxHandler);
lightboxClose.addEventListener("click", closeLightboxHandler);
lightbox.addEventListener("click", backdropClickHandler);
document.addEventListener("keydown", escapeKeyHandler);
