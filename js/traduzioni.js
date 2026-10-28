"use strict";

(() => {
  const translations = {
    it: {
      "nav.percorso": "Percorso",
      "nav.stack": "Stack",
      "nav.progetti": "Progetti",
      "nav.passioni": "Passioni",
      "nav.contatti": "Contatti",
      "nav.cv": "CV",
      "hero.tag": "frontend developer · 5 anni di esperienza",
      "hero.role":
        "Scrivo frontend da 5 anni — Vue 3, TypeScript, SCSS, Git — ma quello che mi fa venire voglia di alzarmi al mattino è il lavoro in team e le sfide nuove: il codice è il mezzo, le persone e i problemi da risolvere insieme sono il motivo.",
      "hero.scroll": "Scorri ↓",
      "divider.percorso": "Percorso",
      "project.view": "Vedi il progetto",
      "contact.heading": "Parliamo del tuo prossimo progetto.",
      "contact.email_btn": "Scrivimi via email",
      "contact.whatsapp_btn": "Scrivimi su WhatsApp",
      "contact.linkedin_btn": "Trovami su LinkedIn",
      "contact.playlist": "Ascolta la mia playlist mentre guardi i progetti ↗",
      "footer.credit": "Design & sviluppo: questo sito",
      "projects.intro":
        "Dal markup scritto a mano ai framework, dai dati alla grafica: front-end, data visualization, UI/UX, 3D e design. Filtra per disciplina.",
      "stat.projects": "progetti da visitare",
      "stat.tech": "tecnologie",
      "stat.disc": "discipline",
      "filter.all": "Tutti",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Data visualization",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Design",
      "badge.hiring": "Prova per assunzione",
      "badge.uni": "Università",
      "badge.desktop": "Ottimizzato per desktop",
      "badge.mobile": "Anche mobile",
      "badge.soon": "Galleria in arrivo",
      "group.main": "Lavori e prove tecniche",
      "group.uni": "Progetti universitari",
      "group.vue": "Siti in Vue 3",
      "note.vuesite":
        "Sito sviluppato con Vue 3, TypeScript e SCSS, versionato con Git.",
      "badge.core": "Stack principale",
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
      "master.meta": "540 h · 9 mesi",
      "modules.label": "Moduli del programma",
      "mod.graphic": "Design grafico (Adobe Tools)",
      "mod.web": "Design web con HTML5, CSS3 e JavaScript",
      "mod.fullstack": "Sviluppo web Full Stack",
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
      "link.site": "Apri il sito ↗",
      "link.figma": "Vedi su Figma ↗",
      "link.prototype": "Vedi il prototipo ↗",
      "title.design": "Design grafico",
      "note.americandrink": "Prova per assunzione: sito in HTML e CSS.",
      "note.satnogs":
        "Prova per assunzione: Index e Home pensate come proposta per il loro sito, con il progetto su Figma.",
      "note.react": "Prova per assunzione sviluppata in React.",
      "note.kikeroo": "Prova per assunzione costruita con EJS e Leaflet.",
      "note.massacre":
        "Ontologia pubblicata come sito, con visualizzazione WebVOWL.",
      "note.dataviz": "Data visualization con dati gestiti in Python.",
      "note.maderna":
        "Progettazione di una biblioteca in 3D, realizzata con Blender.",
      "note.mirabilia": "Sito in JavaScript, pensato anche per mobile.",
      "note.biopharm": "Redesign del Register: prototipo interattivo su Figma.",
      "note.design": "Lavori di grafica con Illustrator, InDesign e Photoshop.",
      "cv.kicker": "Curriculum",
      "cv.download": "Scarica il CV",
      "playlist.label": "Musica di sottofondo?",
      "playlist.open": "Apri in Spotify →",
      "contact.cta": "Scrivimi",
      "role.mamo": "Cliente · Design · Code",
      "role.maderna": "Università di Bologna · 3D",
      "role.mirabilia": "Rivista web",
      "nav.about": "Chi sono",
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
      "about.kicker": "Frontend developer · Vue 3",
      "about.title": "Ciao, sono Gemma.",
      "about.text":
        "Dalla comunicazione al codice: il mio obiettivo rimane comunicare.",
      "badge.published": "Pubblicato",
      "note.book": "Progetto grafico, copertina e impaginazione del libro.",
      "link.book": "Vedi il libro ↗",
    },
    en: {
      "nav.percorso": "Journey",
      "nav.stack": "Stack",
      "nav.progetti": "Projects",
      "nav.passioni": "Interests",
      "nav.contatti": "Contact",
      "nav.cv": "CV",
      "hero.tag": "frontend developer · 5 years of experience",
      "hero.role":
        "I've been writing frontend code for 5 years — Vue 3, TypeScript, SCSS, Git — but what actually gets me up in the morning is working in a team and tackling new challenges: code is the means, people and problems worth solving together are the reason.",
      "hero.scroll": "Scroll ↓",
      "divider.percorso": "Journey",
      "project.view": "View project",
      "contact.heading": "Let's talk about your next project.",
      "contact.email_btn": "Email me",
      "contact.whatsapp_btn": "Message me on WhatsApp",
      "contact.linkedin_btn": "Find me on LinkedIn",
      "contact.playlist":
        "Listen to my playlist while you browse the projects ↗",
      "footer.credit": "Design & build: this site",
      "projects.intro":
        "From hand-written markup to frameworks, from data to graphics: front-end, data visualisation, UI/UX, 3D and design. Filter by discipline.",
      "stat.projects": "projects to visit",
      "stat.tech": "technologies",
      "stat.disc": "disciplines",
      "filter.all": "All",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Data visualisation",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Design",
      "badge.hiring": "Hiring test",
      "badge.uni": "University",
      "badge.desktop": "Desktop-optimised",
      "badge.mobile": "Mobile too",
      "badge.soon": "Gallery coming soon",
      "group.main": "Work and technical tests",
      "group.uni": "University projects",
      "group.vue": "Vue 3 sites",
      "note.vuesite":
        "Site built with Vue 3, TypeScript and SCSS, versioned with Git.",
      "badge.core": "Core stack",
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
      "master.meta": "540 h · 9 months",
      "modules.label": "Programme modules",
      "mod.graphic": "Graphic design (Adobe Tools)",
      "mod.web": "Web design with HTML5, CSS3 and JavaScript",
      "mod.fullstack": "Full Stack web development",
      "desc.mrapps":
        "Building fast, responsive web applications with Vue 3 (Composition API, SPAs and reusable components), TypeScript, Vite and SCSS. Git with GitHub and GitLab, REST API testing with Postman.",
      "desc.alten2":
        "Backend services in .NET (C#, Microsoft SQL Server) within the Credem development team: microservices and REST APIs on banking data, under strict security and code-quality standards. An API built with Dapper, internal tools to test endpoints with Swagger, code reviews and deployments.",
      "desc.alten1":
        "First hands-on frontend experience with React (Hooks such as useState, useEffect, useContext) on a project already in production for over 3 years: legacy code, CSS styling, deployment on AWS, tasks managed in Trello.",
      "desc.cyclando":
        "Performance tuning of a WordPress site (plugins, bottlenecks found with GTmetrix), an AWS S3 bucket for heavy assets, HubSpot API integration for the Sales team. Agile methodology: stand-ups, Scrum, Jira.",
      "desc.southtours":
        "Managing a WordPress site (plugins, content updates, optimisation), first steps in PHP with a local XAMPP environment. First in-office team experience in an international setting, with everything in English.",
      "link.site": "Open the site ↗",
      "link.figma": "View on Figma ↗",
      "link.prototype": "View the prototype ↗",
      "title.design": "Graphic design",
      "note.americandrink": "Hiring test: a site built in HTML and CSS.",
      "note.satnogs":
        "Hiring test: Index and Home pages designed as a proposal for their site, with the design on Figma.",
      "note.react": "Hiring test built with React.",
      "note.kikeroo": "Hiring test built with EJS and Leaflet.",
      "note.massacre":
        "An ontology published as a website, with WebVOWL visualisation.",
      "note.dataviz": "Data visualisation with data handled in Python.",
      "note.maderna": "Design of a 3D library, created in Blender.",
      "note.mirabilia": "A JavaScript site, built to work on mobile too.",
      "note.biopharm": "Register redesign: interactive prototype on Figma.",
      "note.design": "Graphic work with Illustrator, InDesign and Photoshop.",
      "cv.kicker": "Résumé",
      "cv.download": "Download my CV",
      "playlist.label": "Background music?",
      "playlist.open": "Open in Spotify →",
      "contact.cta": "Write me",
      "role.mamo": "Client · Design · Code",
      "role.maderna": "University of Bologna · 3D",
      "role.mirabilia": "Web magazine",
      "nav.about": "About",
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
      "about.kicker": "Frontend developer · Vue 3",
      "about.title": "Hi, I'm Gemma.",
      "about.text":
        "From communication to code: my goal is still to communicate.",
      "badge.published": "Published",
      "note.book": "Graphic concept, cover and layout of the book.",
      "link.book": "See the book ↗",
    },
    es: {
      "nav.percorso": "Trayecto",
      "nav.stack": "Stack",
      "nav.progetti": "Proyectos",
      "nav.passioni": "Intereses",
      "nav.contatti": "Contacto",
      "nav.cv": "CV",
      "hero.tag": "frontend developer · 5 años de experiencia",
      "hero.role":
        "Llevo 5 años escribiendo frontend — Vue 3, TypeScript, SCSS, Git — pero lo que de verdad me hace levantarme por la mañana es trabajar en equipo y afrontar retos nuevos: el código es el medio, las personas y los problemas que vale la pena resolver juntos son el motivo.",
      "hero.scroll": "Desliza ↓",
      "divider.percorso": "Trayecto",
      "project.view": "Ver proyecto",
      "contact.heading": "Hablemos de tu próximo proyecto.",
      "contact.email_btn": "Escríbeme por email",
      "contact.whatsapp_btn": "Escríbeme por WhatsApp",
      "contact.linkedin_btn": "Encuéntrame en LinkedIn",
      "contact.playlist": "Escucha mi playlist mientras miras los proyectos ↗",
      "footer.credit": "Diseño y desarrollo: este sitio",
      "projects.intro":
        "Del maquetado a mano a los frameworks, de los datos a la gráfica: front-end, visualización de datos, UI/UX, 3D y diseño. Filtra por disciplina.",
      "stat.projects": "proyectos para visitar",
      "stat.tech": "tecnologías",
      "stat.disc": "disciplinas",
      "filter.all": "Todos",
      "filter.frontend": "Front-end",
      "filter.dataviz": "Visualización de datos",
      "filter.uiux": "UI/UX",
      "filter.3d": "3D",
      "filter.design": "Diseño",
      "badge.hiring": "Prueba de selección",
      "badge.uni": "Universidad",
      "badge.desktop": "Optimizado para escritorio",
      "badge.mobile": "También móvil",
      "badge.soon": "Galería próximamente",
      "group.main": "Trabajos y pruebas técnicas",
      "group.uni": "Proyectos universitarios",
      "group.vue": "Sitios en Vue 3",
      "note.vuesite":
        "Sitio desarrollado con Vue 3, TypeScript y SCSS, versionado con Git.",
      "badge.core": "Stack principal",
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
      "master.meta": "540 h · 9 meses",
      "modules.label": "Módulos del programa",
      "nav.about": "Sobre mí",
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
      "about.kicker": "Frontend developer · Vue 3",
      "about.title": "Hola, soy Gemma.",
      "about.text":
        "De la comunicación al código: mi objetivo sigue siendo comunicar.",
      "badge.published": "Publicado",
      "note.book": "Concepto gráfico, portada y maquetación del libro.",
      "link.book": "Ver el libro ↗",
      "mod.graphic": "Diseño gráfico (Adobe Tools)",
      "mod.web": "Diseño web con HTML5, CSS3 y JavaScript",
      "mod.fullstack": "Desarrollo web Full Stack",
      "desc.mrapps":
        "Desarrollo de aplicaciones web rápidas y responsive con Vue 3 (Composition API, SPA y componentes reutilizables), TypeScript, Vite y SCSS. Git con GitHub y GitLab, pruebas de APIs REST con Postman.",
      "desc.alten2":
        "Servicios backend en .NET (C#, Microsoft SQL Server) en el equipo de desarrollo de Credem: microservicios y APIs REST sobre datos bancarios, con estándares estrictos de seguridad y calidad. Una API con Dapper, herramientas internas para probar endpoints con Swagger, code reviews y despliegues.",
      "desc.alten1":
        "Primera experiencia frontend con React (Hooks como useState, useEffect, useContext) en un proyecto que ya llevaba más de 3 años en producción: código legacy, estilos con CSS, despliegue en AWS, tareas gestionadas en Trello.",
      "desc.cyclando":
        "Optimización del rendimiento de un sitio WordPress (plugins, cuellos de botella detectados con GTmetrix), un bucket de AWS S3 para los recursos pesados, integración de las APIs de HubSpot para el equipo de Ventas. Metodología Agile: stand-ups, Scrum, Jira.",
      "desc.southtours":
        "Gestión de un sitio WordPress (plugins, actualización de contenidos, optimización), primeros pasos en PHP con un entorno local XAMPP. Primera experiencia en equipo presencial en un entorno internacional, con todo en inglés.",
      "link.site": "Abrir el sitio ↗",
      "link.figma": "Ver en Figma ↗",
      "link.prototype": "Ver el prototipo ↗",
      "title.design": "Diseño gráfico",
      "note.americandrink": "Prueba de selección: sitio en HTML y CSS.",
      "note.satnogs":
        "Prueba de selección: páginas Index y Home pensadas como propuesta para su sitio, con el diseño en Figma.",
      "note.react": "Prueba de selección desarrollada con React.",
      "note.kikeroo": "Prueba de selección creada con EJS y Leaflet.",
      "note.massacre":
        "Ontología publicada como sitio web, con visualización WebVOWL.",
      "note.dataviz": "Visualización de datos gestionados con Python.",
      "note.maderna": "Diseño de una biblioteca en 3D, creado con Blender.",
      "note.mirabilia": "Sitio en JavaScript, pensado también para móvil.",
      "note.biopharm": "Rediseño del Register: prototipo interactivo en Figma.",
      "note.design": "Trabajos gráficos con Illustrator, InDesign y Photoshop.",
      "cv.kicker": "Currículum",
      "cv.download": "Descarga mi CV",
      "playlist.label": "¿Música de fondo?",
      "playlist.open": "Abrir en Spotify →",
      "contact.cta": "Escríbeme",
      "role.mamo": "Cliente · Diseño · Código",
      "role.maderna": "Universidad de Bolonia · 3D",
      "role.mirabilia": "Revista web",
    },
  };

  const langButtons = document.querySelectorAll(".Lang-button");
  const textsToTranslate = document.querySelectorAll("[data-i18n]");

  const changeLanguage = (lang) => {
    textsToTranslate.forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("isActive", isActive);
      button.setAttribute("aria-pressed", isActive);
    });

    document.documentElement.lang = lang;
  };

  const langButtonHandler = (e) => {
    changeLanguage(e.currentTarget.dataset.lang);
  };

  langButtons.forEach((button) => {
    button.addEventListener("click", langButtonHandler);
  });
})();
