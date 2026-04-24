/* ============================================
   PORTAFOLIO PROFESIONAL — JAVASCRIPT
   Navegación dinámica, interactividad y efectos
   ============================================ */
// === DATOS DEL PORTAFOLIO ===
// Aquí se definen todas las materias con sus competencias, info de asignatura y evidencias.
// Para agregar evidencias reales, modifica los arrays de "evidencias" con tus archivos.
const portfolioData = [
  {
    id: "app-tecnologicas",
    title: "Aplicaciones Tecnológicas en los Procesos de Enseñanza y Aprendizaje",
    shortTitle: "App. Tecnológicas",
    icon: "fa-solid fa-microchip",
    iconClass: "subject-card__icon--tech",
    description: "Integración de herramientas de IA como tecnología emergente en el aula para potenciar los procesos educativos.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      // Ejemplo de evidencias — reemplaza con tus archivos reales
      { type: "pdf", name: "Micro taller de IA 1", desc: "Cómo diseñar clases efectivas con IA educativa", file: "evidencias/app-tec/Tarea1.pdf" },
      // { type: "image", name: "Micro taller de IA 2", desc: "Mapa de herramientas educativas digitales", file: "evidencias/app-tec/Tarea2.pdf" },
      { type: "pdf", name: "Micro taller de IA 2", desc: "Crea evaluaciones asistidas por IA M26", file: "evidencias/app-tec/Tarea2.pdf" },
      { type: "pdf", name: "Micro taller de IA 3", desc: "Creación de materiales visuales con herramientas IA", file: "evidencias/app-tec/Tarea3.pdf" }
    ]
  },
  {
    id: "cosmovision",
    title: "Cosmovisión para el Desarrollo Profesional",
    shortTitle: "Cosmovisión",
    icon: "fa-solid fa-globe",
    iconClass: "subject-card__icon--cosmos",
    description: "Reflexión sobre los fundamentos filosóficos y éticos que guían la práctica profesional educativa.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "El rol de la Biblia en la cosmovisión de mi tarea docente", desc: "Centralidad de la Biblia en mi área de trabajo", file: "evidencias/cosmovision/Ensayo1.pdf" },
      { type: "pdf", name: "Desarrollo docente desde una cosmovisión Bíblica", desc: "La Biblia como fundamento de una cosmovisión para mi desarrollo docente", file: "evidencias/cosmovision/Ensayo2.pdf" },
      { type: "pdf", name: "Elementos fundamentales de la formación general universitaria para la conformación de una cosmovisión bíblica.", desc: "La formación general en la conformación de una cosmovisión bíblica en los estudiantes", file: "evidencias/cosmovision/Ensayo3.pdf" }
    ]
  },
  {
    id: "tutoria",
    title: "Tutoría Académica",
    shortTitle: "Tutoría",
    icon: "fa-solid fa-user-graduate",
    iconClass: "subject-card__icon--tutoria",
    description: "Estrategias y técnicas de acompañamiento estudiantil para favorecer el éxito académico y desarrollo integral.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "Diagnóstico de la realidad tutorial", desc: "Conocimiento de los resultados del diagnóstico de tutoría.", file: "evidencias/tutoria/uno.pdf" },
      { type: "pdf", name: "Elaboración e implementación del Plan de acción tutorial", desc: "Plan de acción tutorial", file: "evidencias/tutoria/dos.pdf" },
      { type: "pdf", name: "Resultados de la evaluación tutorial.", desc: "Dimensión Tutor y Mentor", file: "evidencias/tutoria/tres.pdf" }
    ]
  },
  {
    id: "eval-aprendizaje",
    title: "Taller de Evaluación del Aprendizaje",
    shortTitle: "Eval. Aprendizaje",
    icon: "fa-solid fa-clipboard-check",
    iconClass: "subject-card__icon--eval",
    description: "Diseño y aplicación de instrumentos y técnicas para evaluar competencias y aprendizajes significativos.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "Reflexión sobre los fundamentos bíblicos de la evaluación del aprendizaje", desc: "Fundamentos bíblicos de la evaluación", file: "evidencias/aprendizaje/uno.pdf" },
      { type: "pdf", name: "Análisis y proyección de la evaluación del aprendizaje de una unidad", desc: "Diagnóstico de evaluación del aprendizaje", file: "evidencias/aprendizaje/dos.pdf" },
      { type: "pdf", name: "Ensayo reflexivo de la experiencia de evaluación", desc: "Experiencia de evaluación", file: "evidencias/aprendizaje/tres.pdf" }
    ]
  },
  {
    id: "innov-didactica",
    title: "Taller de Innovación Didáctica",
    shortTitle: "Innov. Didáctica",
    icon: "fa-solid fa-lightbulb",
    iconClass: "subject-card__icon--innov",
    description: "Desarrollo de propuestas didácticas innovadoras que transformen la práctica docente en el siglo XXI.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "Fundamentos bíblicos de la didáctica-Modelo Didáctico UM", desc: "Mis estrategias didácticas basados en los fundamentos bíblicos:", file: "evidencias/innov/uno.pdf" },
      { type: "pdf", name: "Aplicación de estrategias didácticas activas", desc: "Aplicación de estrategias didácticas en un ambiente formal", file: "evidencias/innov/dos.pdf" },
      { type: "pdf", name: "Estrategia activa en ambiente no formal", desc: "Estrategia activa en ambiente no formal", file: "evidencias/innov/tres.pdf" },
      { type: "pdf", name: "La tecnología y la inteligencia artificial en la enseñanza y el aprendizaje.", desc: "La tecnología y la inteligencia artificia", file: "evidencias/innov/cuatro.pdf" }
    ]
  },
  {
    id: "eval-curricular",
    title: "Evaluación Curricular",
    shortTitle: "Eval. Curricular",
    icon: "fa-solid fa-sitemap",
    iconClass: "subject-card__icon--curric",
    description: "Análisis, evaluación y rediseño de planes y programas de estudio para la mejora continua educativa.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "Ensayo reflexivo de los fundamentos bíblicos de la evaluación curricular", desc: "Fundamentos bíblicos de la evaluación curricular", file: "evidencias/curricular/uno.pdf" },
      { type: "pdf", name: "Trabajo colaborativo en Consejo Técnico: Evaluación de un programa académico", desc: "Trabajo colaborativo en Consejo Técnico: Evaluación de un programa académico", file: "evidencias/curricular/dos.uno.pdf" },
      { type: "pdf", name: "Escenarios del Plan Diamante para la mejora continua", desc: "Evaluación de un programa académico", file: "evidencias/curricular/tres.pdf" },
      { type: "pdf", name: "Trabajo colaborativo en Consejo Técnico: Plan de mejora continua de una carrera/programa", desc: "La evaluación curricular y la calidad en la mejora continua", file: "evidencias/curricular/tres.uno.pdf" },
      { type: "pdf", name: "Reflexión individual del aporte de las asignaturas que enseño a la mejora continua del programa.", desc: "Aporte de las asignaturas que enseño a la mejora continua del programa.", file: "evidencias/curricular/cuatro.pdf" }
    ]
  },
  {
    id: "gestion-proyectos",
    title: "Gestión de Proyectos",
    shortTitle: "Gest. Proyectos",
    icon: "fa-solid fa-diagram-project",
    iconClass: "subject-card__icon--gestion",
    description: "Planificación, ejecución y evaluación de proyectos educativos con enfoque estratégico y colaborativo.",
    competencias: [
      "<strong>Tomar decisiones sabias basadas en los principios de la Santa Biblia y ser capaz de:</strong> Fundamentarlas en ambientes académicos."
    ],
    evidencias: [
      { type: "pdf", name: "Análisis del Proyecto integrador de un semestre de una carrera", desc: "Definición del proyecto integrador. Análisis de una experiencia", file: "evidencias/gestion/uno.pdf" },
      { type: "pdf", name: "Plan de acción de un Proyecto integrador: Una propuesta nueva o revisada", desc: "Proyecto: Desarrollo de Soluciones Web", file: "evidencias/gestion/dos.uno.pdf" },
      { type: "pdf", name: "Plan de acción de un Proyecto integrador: Una propuesta nueva o revisada", desc: "Presentación de una propuesta", file: "evidencias/gestion/cuatro.pdf" }
    ]
  },
  {
    id: "investigacion I",
    title: "Investigación I",
    shortTitle: "Investigación I",
    icon: "fa-solid fa-flask",
    iconClass: "subject-card__icon--invest",
    description: "Metodologías de investigación educativa para la generación de conocimiento y mejora de la práctica.",
    competencias: [
      "Desarrollar y dirigir propuestas innovadoras fundamentadas metodológicamente para el desarrollo de la educación y la sociedad.",
      "Desarrollar e implementar creativamente estrategias didácticas y actividades de aprendizaje",
      "Diseñar e implementar estrategias de evaluación del aprendizaje."
    ],
    evidencias: [
      { type: "pdf", name: "Elaboración del protocolo", desc: "Protocolo de investigación", file: "evidencias/inve/uno.pdf" },
      { type: "pdf", name: "Presentación de Skepsis", desc: "Skepsis", file: "evidencias/inve/dos.pdf" }
    ]
  },
  {
    id: "investigacion II",
    title: "Investigación II",
    shortTitle: "Investigación II",
    icon: "fa-solid fa-flask",
    iconClass: "subject-card__icon--invest",
    description: "Metodologías de investigación educativa para la generación de conocimiento y mejora de la práctica.",
    competencias: [
      "Desarrollar y dirigir propuestas innovadoras fundamentadas metodológicamente para el desarrollo de la educación y la sociedad.",
      "Desarrollar e implementar creativamente estrategias didácticas y actividades de aprendizaje",
      "Diseñar e implementar estrategias de evaluación del aprendizaje."
    ],
    evidencias: [
      { type: "pdf", name: "Elaboración del protocolo", desc: "Protocolo de investigación", file: "evidencias/inve2/uno.pdf" },
      { type: "pdf", name: "Presentación de Anáptixi", desc: "Anáptixi", file: "evidencias/inve2/dos.pdf" }
    ]
  }
];
// ============================================
//  INICIALIZACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderSubjectCards();
  initScrollReveal();
  initScrollProgress();
  initScrollTop();
  initSectionDots();
  initContactForm();
});
// ============================================
//  NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  const links = menu.querySelectorAll(".navbar__link");
  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("open");
  });
  // Close menu on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("open");
    });
  });
  // Active link on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
// ============================================
//  RENDERIZAR TARJETAS DE MATERIAS
// ============================================
function renderSubjectCards() {
  const grid = document.getElementById("subjectsGrid");
  if (!grid) return;
  grid.innerHTML = portfolioData.map((subject, idx) => `
    <div class="subject-card reveal reveal-delay-${(idx % 4) + 1}" onclick="openSubjectDetail('${subject.id}')" id="card-${subject.id}">
      <div class="subject-card__icon ${subject.iconClass}">
        <i class="${subject.icon}"></i>
      </div>
      <h3 class="subject-card__title">${subject.title}</h3>
      <p class="subject-card__description">${subject.description}</p>
      <div class="subject-card__footer">
        <span class="subject-card__tag">
          <i class="fa-solid fa-folder-open"></i>
          ${subject.evidencias.length} evidencia${subject.evidencias.length !== 1 ? 's' : ''}
        </span>
        <span class="subject-card__arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  `).join("");
  // Re-init reveal for dynamically created cards
  initScrollReveal();
}
// ============================================
//  VISTA DETALLE DE MATERIA
// ============================================
function openSubjectDetail(subjectId) {
  const subject = portfolioData.find(s => s.id === subjectId);
  if (!subject) return;
  const gridSection = document.getElementById("subjectsGrid");
  const detailSection = document.getElementById("subjectDetail");
  // Hide grid, show detail
  gridSection.style.display = "none";
  detailSection.classList.add("active");
  // Scroll to top of section
  document.getElementById("portafolio").scrollIntoView({ behavior: "smooth" });
  // Render detail content
  detailSection.innerHTML = `
    <button class="subject-detail__back" onclick="closeSubjectDetail()">
      <i class="fa-solid fa-arrow-left"></i>
      Volver al portafolio
    </button>

    <div class="subject-detail__header">
      <h2 class="subject-detail__title">${subject.title}</h2>
      <div class="subject-detail__divider"></div>
    </div>

    <div class="detail-tabs" id="detailTabs">
      <button class="detail-tab active" data-tab="competencias" onclick="switchTab('competencias')">
        <i class="fa-solid fa-bullseye"></i> Competencias
      </button>

      <button class="detail-tab" data-tab="evidencias" onclick="switchTab('evidencias')">
        <i class="fa-solid fa-file-lines"></i> Evidencias
      </button>
    </div>

    <!-- Panel Competencias -->
    <div class="detail-panel active" id="panel-competencias">
      <div class="competencias-list">
        ${subject.competencias.map((comp, i) => `
          <div class="competencia-item reveal reveal-delay-${(i % 4) + 1}">
            <div class="competencia-item__icon">
              <i class="fa-solid fa-check"></i>
            </div>
            <p class="competencia-item__text">${comp}</p>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Panel Evidencias -->
    <div class="detail-panel" id="panel-evidencias">
      <div class="evidencias-grid">
        ${subject.evidencias.length > 0 ? subject.evidencias.map((ev, i) => `
          <div class="evidencia-card reveal reveal-delay-${(i % 4) + 1}">
            <div class="evidencia-card__preview evidencia-card__preview--${ev.type}" onclick="openModal('${ev.type}', '${ev.file}', '${ev.name.replace(/'/g, "\\'")}')">
              ${ev.type === 'pdf'
      ? '<i class="fa-solid fa-file-pdf"></i>'
      : `<img src="${ev.file}" alt="${ev.name}" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid fa-image\\'></i>'" />`
    }
              <div class="evidencia-card__preview-overlay">
                <i class="fa-solid fa-${ev.type === 'pdf' ? 'eye' : 'expand'}"></i>
              </div>
            </div>
            <div class="evidencia-card__body">
              <span class="evidencia-card__type evidencia-card__type--${ev.type}">
                <i class="fa-solid fa-${ev.type === 'pdf' ? 'file-pdf' : 'image'}"></i>
                ${ev.type.toUpperCase()}
              </span>
              <h4 class="evidencia-card__name">${ev.name}</h4>
              <p class="evidencia-card__desc">${ev.desc}</p>
              <div class="evidencia-card__actions">
                <button class="btn btn--outline btn--sm" onclick="openModal('${ev.type}', '${ev.file}', '${ev.name.replace(/'/g, "\\'")}')">
                  <i class="fa-solid fa-eye"></i> Ver
                </button>
                <a href="${ev.file}" download class="btn btn--primary btn--sm">
                  <i class="fa-solid fa-download"></i> Descargar
                </a>
              </div>
            </div>
          </div>
        `).join("") : `
          <div class="evidencias-empty">
            <i class="fa-solid fa-folder-open"></i>
            <p>No hay evidencias cargadas aún para esta materia.</p>
          </div>
        `}
      </div>
    </div>
  `;
  // Re-init scroll reveal for new elements
  initScrollReveal();
}
function closeSubjectDetail() {
  const gridSection = document.getElementById("subjectsGrid");
  const detailSection = document.getElementById("subjectDetail");
  detailSection.classList.remove("active");
  gridSection.style.display = "";
  document.getElementById("portafolio").scrollIntoView({ behavior: "smooth" });
}
// ============================================
//  TABS
// ============================================
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll(".detail-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  // Update panels
  document.querySelectorAll(".detail-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  const targetPanel = document.getElementById(`panel-${tabName}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
    // Re-reveal elements in the newly visible panel
    targetPanel.querySelectorAll(".reveal").forEach(el => {
      el.classList.remove("revealed");
      void el.offsetWidth; // Force reflow
      el.classList.add("revealed");
    });
  }
}
// ============================================
//  MODAL
// ============================================
function openModal(type, fileSrc, title) {
  const overlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalFooter = document.getElementById("modalFooter");
  modalTitle.textContent = title;
  if (type === "image") {
    modalBody.innerHTML = `<img src="${fileSrc}" alt="${title}" onerror="this.src=''; this.alt='Imagen no disponible'; this.style.padding='40px'; this.style.color='var(--text-muted)'; this.parentElement.innerHTML='<p style=\\'color:var(--text-muted); text-align:center; padding:40px\\'>No se pudo cargar la imagen.<br>Verifica que el archivo exista en: <code>${fileSrc}</code></p>'" />`;
  } else if (type === "pdf") {
    modalBody.innerHTML = `<iframe src="${fileSrc}" title="${title}"></iframe>`;
  }
  modalFooter.innerHTML = `
    <a href="${fileSrc}" download class="btn btn--outline btn--sm">
      <i class="fa-solid fa-download"></i> Descargar
    </a>
    <button class="btn btn--primary btn--sm" onclick="closeModal()">Cerrar</button>
  `;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}
// Close modal on overlay click
document.addEventListener("click", (e) => {
  const overlay = document.getElementById("modalOverlay");
  if (e.target === overlay) {
    closeModal();
  }
});
// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
// ============================================
//  SCROLL REVEAL (animaciones al scroll)
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  document.querySelectorAll(".reveal:not(.revealed)").forEach(el => {
    observer.observe(el);
  });
}
// ============================================
//  BARRA DE PROGRESO
// ============================================
function initScrollProgress() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = `${progress}%`;
  });
}
// ============================================
//  BOTÓN VOLVER ARRIBA
// ============================================
function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// ============================================
//  DOTS DE NAVEGACIÓN LATERAL
// ============================================
function initSectionDots() {
  const dotsContainer = document.getElementById("sectionDots");
  if (!dotsContainer) return;
  const sections = document.querySelectorAll("section[id]");
  const dots = dotsContainer.querySelectorAll(".section-dot");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    dots.forEach(dot => {
      dot.classList.toggle("active", dot.dataset.section === current);
    });
  });
}
// ============================================
//  FORMULARIO DE CONTACTO
// ============================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simple animation feedback
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje enviado!';
    btn.style.background = "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)";
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "";
      form.reset();
    }, 2500);
  });
}
// ============================================
//  SMOOTH SCROLL para links internos
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
