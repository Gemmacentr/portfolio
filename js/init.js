"use strict";

try {
  sessionStorage.getItem("loaded") === "true" &&
    document.documentElement.classList.add("isLoaded");
} catch {}
