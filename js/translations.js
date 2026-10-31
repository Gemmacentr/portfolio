/*
  ==========================================================================
  translations.js · Portfolio Gemma Centrone

  Cambia el idioma de la web (IT / EN / ES) sin recargar la página.
  Cada texto traducible lleva en el HTML un atributo data-i18n con su clave;
  al pulsar un botón de idioma se sustituye su textContent por el texto
  de esa clave en el diccionario.

  Estructura (dentro de una IIFE):
    1. Constantes ..... diccionario de textos y elementos del DOM
    2. Funciones ...... cambio de idioma y handler de los botones
    3. Asignaciones ... eventos de los botones de idioma

  Nota: los textos con <br> o varias líneas usan un <span> por línea,
  porque textContent borraría las etiquetas internas.
  ==========================================================================
*/

"use strict";

(() => {
  // ===== 1. CONSTANTES =====

  // Diccionario: un objeto por idioma con las mismas claves que data-i18n
  const translations = {
    // --- Italiano (idioma por defecto del HTML) ---
    it: {
      "nav.about": "Chi sono",
      "nav.percorso": "Percorso",
      "nav.stack": "Stack",
      "nav.progetti": "Progetti",
      "nav.passioni": "Passioni",
      "nav.contatti": "Contatti",

      "contact.cta": "Scrivimi",
      "cv.kicker": "Curriculum",
      "cv.download": "Scarica il CV",
      "about.title": "Ciao, sono Gemma.",
      "about.claim": "L'IA scrive codice. Io so cosa farne.",
      "about.text":
        "Frontend developer da 5 anni. Esperienza, visione e cura dei dettagli.",
      "passions.cta": "Fuori dallo schermo ↓",
      "role.mamo": "Cliente · Design · Code",
      "role.kikeroo": "Prova tecnica · EJS · Leaflet",
      "role.mirabilia": "Rivista web",
      "playlist.label": "Musica di sottofondo?",
      "playlist.open": "Apri in Spotify →",

      "story.intro1": "Ho studiato comunicazione a Siena.",
      "story.intro2":
        "Poi, a Bologna, ho scoperto che anche il codice può essere un modo di comunicare.",
      "story.t1": "Comunicare",
      "story.p1": "Laurea in Comunicazione e master in Digital Humanities.",
      "story.t2": "Progettare",
      "story.p2":
        "Figma, InDesign e impaginazione: prima il disegno, poi il codice.",
      "story.t3": "Sviluppare",
      "story.p3": "Frontend developer dal 2022, oggi con Vue 3 e TypeScript.",

      "divider.percorso": "Percorso",
      "studies.work": "Esperienza lavorativa",
      "studies.edu": "Formazione",
      "date.mrapps": "Apr 2024 — Oggi",
      "date.alten2": "Gen 2023 — Apr 2024",
      "date.alten1": "Apr 2022 — Dic 2022",
      "date.cyclando": "Gen 2022 — Mar 2022",
      "date.southtours": "Set 2021 — Dic 2021",
      "date.cei": "In corso",
      "mode.remote": "Remoto",
      "mode.hybrid": "Ibrido",
      "mode.onsite": "In sede",
      "type.internship": "Tirocinio",
      "desc.mrapps":
        "Sviluppo applicazioni web veloci e responsive con Vue 3 (Composition API, SPA e componenti riutilizzabili), TypeScript, Vite e SCSS. Git con GitHub e GitLab, test delle API REST con Postman.",
      "desc.alten2":
        "Servizi backend in .NET (C#, Microsoft SQL Server) nel team di sviluppo di Credem: microservizi e API REST su dati bancari, nel rispetto di standard rigorosi di sicurezza e qualità. API con Dapper, strumenti interni per testare gli endpoint con Swagger, code review e deploy.",
      "desc.alten1":
        "Prima esperienza frontend con React (Hooks come useState, useEffect, useContext) su un progetto già in produzione da oltre 3 anni: codice legacy, stili in CSS, deploy su AWS, gestione dei task con Trello.",
      "desc.cyclando":
        "Ottimizzazione delle prestazioni di un sito WordPress (plugin, colli di bottiglia individuati con GTmetrix), bucket AWS S3 per gli asset pesanti, integrazione delle API HubSpot per il team Sales. Metodologia Agile: stand-up, Scrum, Jira.",
      "desc.southtours":
        "Gestione di un sito WordPress (plugin, aggiornamento dei contenuti, ottimizzazione), primi passi in PHP con ambiente locale XAMPP. Primo team in ufficio in un contesto internazionale, con comunicazione tutta in inglese.",
      "master.meta": "540 h · 9 mesi",
      "modules.label": "Moduli del programma",
      "mod.graphic": "Design grafico (Adobe Tools)",
      "mod.web": "Design web con HTML5, CSS3 e JavaScript",
      "mod.fullstack": "Sviluppo web Full Stack",

      "projects.intro":
        "Dal markup scritto a mano ai framework, dai dati alla grafica: front-end, data visualization, UI/UX, 3D e design. Filtra per disciplina.",
      "filter.all": "Tutti",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Data visualization",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Design",
      "group.vue": "Siti in Vue 3",
      "group.vue.intro":
        "Creati con l'IA in 4-5 prompt. I prompt giusti vengono da tre anni di Vue 3: senza di me l'IA non li avrebbe fatti, io senza l'IA sì, solo in più tempo.",
      "group.main": "Lavori e prove tecniche",
      "group.uni": "Progetti universitari",
      "group.uni.intro":
        "Quando l'IA non esisteva: codice scritto riga per riga, tra Bologna e il primo lavoro.",
      "toggle.show": "Vedi i progetti",
      "badge.core": "Stack principale",
      "badge.ai": "IA · 4-5 prompt",
      "badge.hiring": "Prova per assunzione",
      "badge.uni": "Università",
      "badge.desktop": "Ottimizzato per desktop",
      "badge.mobile": "Anche mobile",
      "badge.client": "Cliente",
      "note.vuesite":
        "Io ho dato direzione e controllo, l'IA ha scritto il codice.",
      "note.mamo":
        "Sito per M.A.MO (HK) Ltd: design, sviluppo e indicizzazione su Google.",
      "note.americandrink": "Prova per assunzione: sito in HTML e CSS.",
      "note.satnogs":
        "Prova per assunzione: Index e Home pensate come proposta per il loro sito, con il progetto su Figma.",
      "note.react": "Prova per assunzione sviluppata in React.",
      "note.kikeroo": "Prova per assunzione costruita con EJS e Leaflet.",
      "note.mappe":
        "Mappa di Bologna con sette stili di OpenStreetMap, costruita con Leaflet.",
      "note.biopharm": "Redesign del Register: prototipo interattivo su Figma.",
      "note.design":
        "Rivista sul Cammino di Santiago presentata all'esame di Design grafico del máster: versione per la stampa, con copertina, impaginazione e immagini.",
      "note.massacre":
        "Ontologia pubblicata come sito, con visualizzazione WebVOWL.",
      "note.dataviz": "Data visualization con dati gestiti in Python.",
      "note.maderna":
        "Progettazione di una biblioteca in 3D, realizzata con Blender.",
      "note.mirabilia": "Sito in JavaScript, pensato anche per mobile.",
      "link.site": "Apri il sito →",
      "link.figma": "Vedi su Figma →",
      "link.prototype": "Vedi il prototipo →",

      "trek.altavia": "Dolomiti · 8 tappe",
      "trek.camino": "Rivista · InDesign",
      "trek.link": "Sfoglia la rivista →",

      "contact.heading": "Parliamo del tuo prossimo progetto.",
      "contact.email_btn": "Scrivimi via email",

      "footer.sections": "Sezioni",
      "footer.more": "Risorse",
      "footer.magazine": "La rivista",
      "footer.privacy1": "Questo sito non usa cookie di tracciamento.",
      "footer.privacy2": "La playlist si carica da Spotify solo se la apri.",
      "footer.top": "Torna su ↑",
    },
    // --- Inglés ---
    en: {
      "nav.about": "About",
      "nav.percorso": "Journey",
      "nav.stack": "Stack",
      "nav.progetti": "Projects",
      "nav.passioni": "Passions",
      "nav.contatti": "Contact",

      "contact.cta": "Write to me",
      "cv.kicker": "Curriculum",
      "cv.download": "Download my CV",
      "about.title": "Hi, I'm Gemma.",
      "about.claim": "AI writes code. I know what to do with it.",
      "about.text":
        "Frontend developer for 5 years. Experience, vision and care for detail.",
      "passions.cta": "Away from the screen ↓",
      "role.mamo": "Client · Design · Code",
      "role.kikeroo": "Technical test · EJS · Leaflet",
      "role.mirabilia": "Web magazine",
      "playlist.label": "Background music?",
      "playlist.open": "Open in Spotify →",

      "story.intro1": "I studied communication in Siena.",
      "story.intro2":
        "Then, in Bologna, I discovered that code can also be a way to communicate.",
      "story.t1": "Communicate",
      "story.p1": "Degree in Communication and master's in Digital Humanities.",
      "story.t2": "Design",
      "story.p2":
        "Figma, InDesign and layout: first the design, then the code.",
      "story.t3": "Develop",
      "story.p3":
        "Frontend developer since 2022, now with Vue 3 and TypeScript.",

      "divider.percorso": "Journey",
      "studies.work": "Work experience",
      "studies.edu": "Education",
      "date.mrapps": "Apr 2024 — Present",
      "date.alten2": "Jan 2023 — Apr 2024",
      "date.alten1": "Apr 2022 — Dec 2022",
      "date.cyclando": "Jan 2022 — Mar 2022",
      "date.southtours": "Sep 2021 — Dec 2021",
      "date.cei": "In progress",
      "mode.remote": "Remote",
      "mode.hybrid": "Hybrid",
      "mode.onsite": "On-site",
      "type.internship": "Internship",
      "desc.mrapps":
        "Building fast, responsive web applications with Vue 3 (Composition API, SPAs and reusable components), TypeScript, Vite and SCSS. Git with GitHub and GitLab, REST API testing with Postman.",
      "desc.alten2":
        "Backend services in .NET (C#, Microsoft SQL Server) within the Credem development team: microservices and REST APIs on banking data, under strict security and quality standards. APIs with Dapper, internal tools to test endpoints with Swagger, code reviews and deployments.",
      "desc.alten1":
        "First frontend experience with React (Hooks such as useState, useEffect, useContext) on a project already in production for over 3 years: legacy code, CSS styling, deployment on AWS, tasks managed in Trello.",
      "desc.cyclando":
        "Performance tuning of a WordPress site (plugins, bottlenecks found with GTmetrix), an AWS S3 bucket for heavy assets, HubSpot API integration for the Sales team. Agile methodology: stand-ups, Scrum, Jira.",
      "desc.southtours":
        "Managing a WordPress site (plugins, content updates, optimisation), first steps in PHP with a local XAMPP environment. First in-office team in an international setting, with everything in English.",
      "master.meta": "540 h · 9 months",
      "modules.label": "Programme modules",
      "mod.graphic": "Graphic design (Adobe Tools)",
      "mod.web": "Web design with HTML5, CSS3 and JavaScript",
      "mod.fullstack": "Full Stack web development",

      "projects.intro":
        "From hand-written markup to frameworks, from data to graphics: front-end, data visualisation, UI/UX, 3D and design. Filter by discipline.",
      "filter.all": "All",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Data visualisation",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Design",
      "group.vue": "Vue 3 sites",
      "group.vue.intro":
        "Built with AI in 4-5 prompts. The right prompts come from three years of Vue 3: without me the AI couldn't have built them; without the AI I could, just more slowly.",
      "group.main": "Work and technical tests",
      "group.uni": "University projects",
      "group.uni.intro":
        "Before AI existed: code written line by line, between Bologna and my first job.",
      "toggle.show": "See the projects",
      "badge.core": "Core stack",
      "badge.ai": "AI · 4-5 prompts",
      "badge.hiring": "Hiring test",
      "badge.uni": "University",
      "badge.desktop": "Desktop-optimised",
      "badge.mobile": "Mobile too",
      "badge.client": "Client",
      "note.vuesite":
        "I set the direction and checked the work; the AI wrote the code.",
      "note.mamo":
        "Website for M.A.MO (HK) Ltd: design, development and Google indexing.",
      "note.americandrink": "Hiring test: a site built in HTML and CSS.",
      "note.satnogs":
        "Hiring test: Index and Home pages designed as a proposal for their site, with the design on Figma.",
      "note.react": "Hiring test built with React.",
      "note.kikeroo": "Hiring test built with EJS and Leaflet.",
      "note.mappe":
        "Map of Bologna with seven OpenStreetMap styles, built with Leaflet.",
      "note.biopharm": "Register redesign: interactive prototype on Figma.",
      "note.design":
        "Magazine about the Camino de Santiago presented for the master's Graphic Design exam: print version, with cover, layout and images.",
      "note.massacre":
        "An ontology published as a website, with WebVOWL visualisation.",
      "note.dataviz": "Data visualisation with data handled in Python.",
      "note.maderna": "Design of a 3D library, created in Blender.",
      "note.mirabilia": "A JavaScript site, built to work on mobile too.",
      "link.site": "Open the site →",
      "link.figma": "View on Figma →",
      "link.prototype": "View the prototype →",

      "trek.altavia": "Dolomites · 8 stages",
      "trek.camino": "Magazine · InDesign",
      "trek.link": "Browse the magazine →",

      "contact.heading": "Let's talk about your next project.",
      "contact.email_btn": "Email me",

      "footer.sections": "Sections",
      "footer.more": "Resources",
      "footer.magazine": "The magazine",
      "footer.privacy1": "This site doesn't use tracking cookies.",
      "footer.privacy2": "The playlist loads from Spotify only if you open it.",
      "footer.top": "Back to top ↑",
    },
    // --- Español ---
    es: {
      "nav.about": "Sobre mí",
      "nav.percorso": "Trayectoria",
      "nav.stack": "Stack",
      "nav.progetti": "Proyectos",
      "nav.passioni": "Pasiones",
      "nav.contatti": "Contacto",

      "contact.cta": "Escríbeme",
      "cv.kicker": "Currículum",
      "cv.download": "Descarga mi CV",
      "about.title": "Hola, soy Gemma.",
      "about.claim": "La IA escribe código. Yo sé qué hacer con él.",
      "about.text":
        "Frontend developer desde hace 5 años. Experiencia, visión y cuidado por los detalles.",
      "passions.cta": "Fuera de la pantalla ↓",
      "role.mamo": "Cliente · Diseño · Código",
      "role.kikeroo": "Prueba técnica · EJS · Leaflet",
      "role.mirabilia": "Revista web",
      "playlist.label": "¿Música de fondo?",
      "playlist.open": "Abrir en Spotify →",

      "story.intro1": "Estudié comunicación en Siena.",
      "story.intro2":
        "Después, en Bolonia, descubrí que el código también puede ser una forma de comunicar.",
      "story.t1": "Comunicar",
      "story.p1": "Grado en Comunicación y máster en Humanidades Digitales.",
      "story.t2": "Diseñar",
      "story.p2":
        "Figma, InDesign y maquetación: primero el diseño, luego el código.",
      "story.t3": "Desarrollar",
      "story.p3": "Frontend developer desde 2022, hoy con Vue 3 y TypeScript.",

      "divider.percorso": "Trayectoria",
      "studies.work": "Experiencia laboral",
      "studies.edu": "Formación",
      "date.mrapps": "Abr 2024 — Actualidad",
      "date.alten2": "Ene 2023 — Abr 2024",
      "date.alten1": "Abr 2022 — Dic 2022",
      "date.cyclando": "Ene 2022 — Mar 2022",
      "date.southtours": "Sep 2021 — Dic 2021",
      "date.cei": "En curso",
      "mode.remote": "Remoto",
      "mode.hybrid": "Híbrido",
      "mode.onsite": "Presencial",
      "type.internship": "Prácticas",
      "desc.mrapps":
        "Desarrollo de aplicaciones web rápidas y responsive con Vue 3 (Composition API, SPA y componentes reutilizables), TypeScript, Vite y SCSS. Git con GitHub y GitLab, pruebas de APIs REST con Postman.",
      "desc.alten2":
        "Servicios backend en .NET (C#, Microsoft SQL Server) en el equipo de desarrollo de Credem: microservicios y APIs REST sobre datos bancarios, con estándares estrictos de seguridad y calidad. APIs con Dapper, herramientas internas para probar endpoints con Swagger, code reviews y despliegues.",
      "desc.alten1":
        "Primera experiencia frontend con React (Hooks como useState, useEffect, useContext) en un proyecto que ya llevaba más de 3 años en producción: código legacy, estilos con CSS, despliegue en AWS, tareas gestionadas en Trello.",
      "desc.cyclando":
        "Optimización del rendimiento de un sitio WordPress (plugins, cuellos de botella detectados con GTmetrix), un bucket de AWS S3 para los recursos pesados, integración de las APIs de HubSpot para el equipo de Ventas. Metodología Agile: stand-ups, Scrum, Jira.",
      "desc.southtours":
        "Gestión de un sitio WordPress (plugins, actualización de contenidos, optimización), primeros pasos en PHP con un entorno local XAMPP. Primer equipo presencial en un entorno internacional, con todo en inglés.",
      "master.meta": "540 h · 9 meses",
      "modules.label": "Módulos del programa",
      "mod.graphic": "Diseño gráfico (Adobe Tools)",
      "mod.web": "Diseño web con HTML5, CSS3 y JavaScript",
      "mod.fullstack": "Desarrollo web Full Stack",

      "projects.intro":
        "Del maquetado a mano a los frameworks, de los datos a la gráfica: front-end, visualización de datos, UI/UX, 3D y diseño. Filtra por disciplina.",
      "filter.all": "Todos",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Visualización de datos",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Diseño",
      "group.vue": "Sitios en Vue 3",
      "group.vue.intro":
        "Creados con IA en 4-5 prompts. Los prompts correctos vienen de tres años de Vue 3: sin mí la IA no los habría hecho; yo sin la IA sí, solo con más tiempo.",
      "group.main": "Trabajos y pruebas técnicas",
      "group.uni": "Proyectos universitarios",
      "group.uni.intro":
        "Cuando la IA no existía: código escrito línea a línea, entre Bolonia y mi primer trabajo.",
      "toggle.show": "Ver los proyectos",
      "badge.core": "Stack principal",
      "badge.ai": "IA · 4-5 prompts",
      "badge.hiring": "Prueba de selección",
      "badge.uni": "Universidad",
      "badge.desktop": "Optimizado para escritorio",
      "badge.mobile": "También móvil",
      "badge.client": "Cliente",
      "note.vuesite":
        "Yo marqué la dirección y revisé el trabajo; la IA escribió el código.",
      "note.mamo":
        "Web para M.A.MO (HK) Ltd: diseño, desarrollo e indexación en Google.",
      "note.americandrink": "Prueba de selección: sitio en HTML y CSS.",
      "note.satnogs":
        "Prueba de selección: páginas Index y Home pensadas como propuesta para su sitio, con el diseño en Figma.",
      "note.react": "Prueba de selección desarrollada con React.",
      "note.kikeroo": "Prueba de selección creada con EJS y Leaflet.",
      "note.mappe":
        "Mapa de Bolonia con siete estilos de OpenStreetMap, hecho con Leaflet.",
      "note.biopharm": "Rediseño del Register: prototipo interactivo en Figma.",
      "note.design":
        "Revista sobre el Camino de Santiago presentada en el examen de Diseño gráfico del máster: versión para imprenta, con portada, maquetación e imágenes.",
      "note.massacre":
        "Ontología publicada como sitio web, con visualización WebVOWL.",
      "note.dataviz": "Visualización de datos gestionados con Python.",
      "note.maderna": "Diseño de una biblioteca en 3D, creado con Blender.",
      "note.mirabilia": "Sitio en JavaScript, pensado también para móvil.",
      "link.site": "Abrir el sitio →",
      "link.figma": "Ver en Figma →",
      "link.prototype": "Ver el prototipo →",

      "trek.altavia": "Dolomitas · 8 etapas",
      "trek.camino": "Revista · InDesign",
      "trek.link": "Hojea la revista →",

      "contact.heading": "Hablemos de tu próximo proyecto.",
      "contact.email_btn": "Escríbeme por email",

      "footer.sections": "Secciones",
      "footer.more": "Recursos",
      "footer.magazine": "La revista",
      "footer.privacy1": "Esta web no usa cookies de seguimiento.",
      "footer.privacy2": "La playlist se carga desde Spotify solo si la abres.",
      "footer.top": "Volver arriba ↑",
    },
  };

  // Botones de idioma y elementos con texto traducible
  const langButtons = document.querySelectorAll(".Lang-button");
  const textsToTranslate = document.querySelectorAll("[data-i18n]");

  // ===== 2. FUNCIONES =====

  // Cambia todos los textos al idioma indicado
  const changeLanguage = (lang) => {
    // Sustituye el texto de cada elemento si su clave existe en ese idioma
    textsToTranslate.forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Marca el botón del idioma activo
    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("isActive", isActive);
      button.setAttribute("aria-pressed", isActive);
    });

    // Actualiza el idioma de la página para lectores de pantalla y buscadores
    document.documentElement.lang = lang;
  };

  // Cambia al idioma del botón pulsado
  const langButtonHandler = (e) => {
    changeLanguage(e.currentTarget.dataset.lang);
  };

  // ===== 3. ASIGNACIONES =====

  langButtons.forEach((button) => {
    button.addEventListener("click", langButtonHandler);
  });
})();
