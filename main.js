// Base de datos de las sesiones extraídas del PDF
// Aquí puedes ir rellenando cada día con el texto real y enlaces a vlogs
const sesionesDelPDF = [
  {
    id: 1,
    semana: "Primera Semana",
    fecha: "17/02/2026",
    titulo: "Presentación de la Asignatura",
    apuntes: "El profesor Carlos hizo la presentación de la asignatura. Debatimos sobre la importancia de la didáctica y qué esperamos aprender durante el curso.",
    vlog: "En este primer vlog, el equipo comenta sus primeras impresiones de la asignatura."
  },
  {
    id: 2,
    semana: "Primera Semana",
    fecha: "19/02/2026",
    titulo: "Conceptos clave de Didáctica",
    apuntes: "Trabajamos en grupos para definir conceptos básicos educativos y los pusimos en común con el resto de compañeros.",
    vlog: "Hablamos sobre cómo definiríamos nosotros la didáctica antes y después de la clase."
  },
  {
    id: 3,
    semana: "Segunda Semana",
    fecha: "24/02/2026",
    titulo: "Modelos de enseñanza",
    apuntes: "Análisis de los diferentes modelos pedagógicos tradicionales vs. modernos.",
    vlog: ""
  },
  {
    id: 4,
    semana: "Segunda Semana",
    fecha: "26/02/2026",
    titulo: "Práctica evaluativa",
    apuntes: "Realizamos una dinámica de autoevaluación en clase.",
    vlog: ""
  },
  {
    id: 25,
    semana: "Decimotercera Semana",
    fecha: "18/05/2026",
    titulo: "¡Excursión a Comares!",
    apuntes: "Hoy fuimos de excursión al colegio rural de Comares para ver la aplicación de la didáctica en entornos diferentes.",
    vlog: "Grabamos fragmentos de la excursión y nuestra reflexión sobre la escuela rural."
  }
  // Añade aquí el resto hasta la sesión 28 siguiendo el mismo formato
];

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-sesiones');
  const modal = new bootstrap.Modal(document.getElementById('sesionModal'));

  // 1. Generar las tarjetas de sesiones en el HTML
  sesionesDelPDF.forEach(sesion => {
    // Si la sesión no existe (por si saltas números), la evitamos
    if (!sesion) return;

    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4';

    // Tarjeta HTML con estilos de Bootstrap
    div.innerHTML = `
      <div class="card h-100 p-4 rounded-4 bg-white session-card" onclick="abrirSesion(${sesion.id})">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div class="session-icon bg-primary-subtle text-primary fw-bold">
            ${sesion.id}
          </div>
          <span class="badge bg-light text-secondary border px-2 py-1"><i class="bi bi-calendar3 me-1"></i>${sesion.fecha}</span>
        </div>
        <h5 class="fw-bold mb-2">${sesion.titulo}</h5>
        <p class="text-muted small mb-0 fw-semibold">${sesion.semana}</p>
        <div class="mt-auto pt-3">
          <span class="text-primary small fw-bold">Leer más <i class="bi bi-arrow-right"></i></span>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });

  // 2. Función global para abrir el modal con los datos correctos
  window.abrirSesion = function (id) {
    const sesion = sesionesDelPDF.find(s => s.id === id);
    if (sesion) {
      document.getElementById('modalTitulo').textContent = `Sesión ${sesion.id}: ${sesion.titulo}`;

      document.getElementById('modalBadges').innerHTML = `
        <span class="badge bg-primary px-3 py-2 rounded-pill"><i class="bi bi-tag me-1"></i>${sesion.semana}</span>
        <span class="badge bg-success px-3 py-2 rounded-pill"><i class="bi bi-calendar-event me-1"></i>${sesion.fecha}</span>
      `;

      document.getElementById('modalApuntes').innerHTML = `<p class="mb-0 lh-lg">${sesion.apuntes.replace(/\n/g, '<br>')}</p>`;

      // Control del Vlog
      const vlogContainer = document.getElementById('modalVlog');
      if (sesion.vlog) {
        vlogContainer.innerHTML = `
          <div class="p-4 bg-success-subtle text-success-emphasis rounded-3 border border-success-subtle">
            <i class="bi bi-play-circle-fill fs-4 me-2 align-middle"></i>
            <span class="fst-italic">${sesion.vlog}</span>
          </div>`;
      } else {
        vlogContainer.innerHTML = `<p class="text-muted small fst-italic">No hay vlog registrado para esta sesión.</p>`;
      }

      modal.show();
    }
  };
});