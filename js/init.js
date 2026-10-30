/*
  ==========================================================================
  init.js · Portfolio Gemma Centrone

  Se carga en el <head> SIN defer a propósito: tiene que ejecutarse antes
  de que se pinte la página. Si el Loader ya se vio en esta sesión, añade
  la clase isLoaded a <html> y el CSS lo oculta desde el primer momento,
  sin parpadeo.
  ==========================================================================
*/

"use strict";

// Si el storage está bloqueado, no hace nada y el Loader se muestra normal
try {
  sessionStorage.getItem("loaded") === "true" &&
    document.documentElement.classList.add("isLoaded");
} catch {}
