// ==========================================
// 1. BASE DE DATOS - DIARIO DE SESIONES (28 DÍAS)
// ==========================================
const sesionesDelPDF = Array.from({ length: 28 }, (_, i) => {
  const id = i + 1;
  const semanaNum = Math.ceil(id / 2);
  
  const semanasLetra = [
    "Primera Semana", "Segunda Semana", "Tercera Semana", "Cuarta Semana",
    "Quinta Semana", "Sexta Semana", "Séptima Semana", "Octava Semana",
    "Novena Semana", "Décima Semana", "Undécima Semana", "Duodécima Semana",
    "Decimotercera Semana", "Decimocuarta Semana"
  ];

  return {
    id: id,
    semana: semanasLetra[semanaNum - 1] || `Semana ${semanaNum}`,
    fecha: id === 1 ? "17/02/2026" : id === 2 ? "19/02/2026" : id === 25 ? "18/05/2026" : "Pendiente",
    titulo: id === 1 ? "Presentación de la Asignatura" : id === 25 ? "¡Excursión a Comares!" : `Sesión Temática ${id}`,
    apuntes: `Aquí va todo el contenido largo y desarrollado de la sesión ${id} obtenido del documento PDF. Puedes escribir con total libertad sin descuadrar la web.`,
    
    // GALERÍA MULTIMEDIA: 2 Fotos y 2 Vídeos para cada día
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  };
});

// ==========================================
// 2. BASE DE DATOS - EPISODIOS VLOG (30 CAPÍTULOS)
// ==========================================
// Generamos automáticamente 30 capítulos. 
const episodiosVlog = Array.from({ length: 30 }, (_, i) => {
  return {
    cap: i + 1,
    titulo: `Episodio ${i + 1}: Resumen de la clase`,
    duracion: `${Math.floor(Math.random() * 5 + 4)}:${Math.floor(Math.random() * 50 + 10)}`, // Duración aleatoria para que quede real
    thumb: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80` // Pon la miniatura que quieras
  };
});

// ==========================================
// 3. LÓGICA DE RENDERIZADO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const contenedorSesiones = document.getElementById('contenedor-sesiones');
  const modal = new bootstrap.Modal(document.getElementById('sesionModal'));

  // A) Inyectar Tarjetas de Sesiones
  sesionesDelPDF.forEach(sesion => {
    if(!sesion) return;

    const div = document.createElement('div');
    div.className = 'col-sm-6 col-md-6 col-lg-4';
    
    div.innerHTML = `
      <div class="card h-100 p-4 rounded-4 bg-white session-card shadow-sm" onclick="abrirSesion(${sesion.id})">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div class="session-icon bg-primary-subtle text-primary fw-bold">
            ${sesion.id}
          </div>
          <span class="badge bg-light text-secondary border px-2 py-1"><i class="bi bi-calendar3 me-1"></i>${sesion.fecha}</span>
        </div>
        <h5 class="fw-bold text-dark mb-2">${sesion.titulo}</h5>
        <p class="text-muted small mb-0 fw-semibold"><i class="bi bi-clock me-1"></i>${sesion.semana}</p>
        
        <div class="mt-2">
          <span class="badge bg-dark text-white"><i class="bi bi-images me-1"></i> Galería 2x2</span>
        </div>
        
        <div class="mt-auto pt-3 d-flex align-items-center justify-content-between">
          <span class="text-primary small fw-bold">Abrir sesión</span>
          <i class="bi bi-arrow-right-short text-primary fs-4"></i>
        </div>
      </div>
    `;
    contenedorSesiones.appendChild(div);
  });

  // B) Inyectar Vlogs en Temporadas (10 capítulos por Temporada en un Grid responsive)
  const containerT1 = document.getElementById('vlog-t1-container');
  const containerT2 = document.getElementById('vlog-t2-container');
  const containerT3 = document.getElementById('vlog-t3-container');

  episodiosVlog.forEach((ep, index) => {
    const div = document.createElement('div');
    div.className = 'col-12 col-sm-6 col-md-4 col-lg-3'; // Columnas para la cuadrícula
    
    div.innerHTML = `
      <div class="vlog-card shadow-sm">
        <div class="vlog-thumbnail">
          <img src="${ep.thumb}" alt="${ep.titulo}">
          <div class="play-btn-overlay"><i class="bi bi-play-circle-fill"></i></div>
        </div>
        <div class="p-3">
          <div class="d-flex justify-content-between small text-white-50 mb-1">
            <span class="fw-bold text-danger">Capítulo ${ep.cap}</span>
            <span>${ep.duracion} min</span>
          </div>
          <h6 class="fw-bold mb-0 text-white fs-6">${ep.titulo}</h6>
        </div>
      </div>`;

    // Lógica para repartir los capítulos (1-10 en T1, 11-20 en T2, 21-30 en T3)
    if (index < 10) {
      containerT1.appendChild(div);
    } else if (index < 20) {
      containerT2.appendChild(div);
    } else {
      containerT3.appendChild(div);
    }
  });

  // C) Función para abrir la sesión en el Modal
  window.abrirSesion = function(id) {
    const sesion = sesionesDelPDF.find(s => s.id === id);
    if(sesion) {
      document.getElementById('modalTitulo').textContent = `Sesión ${sesion.id}: ${sesion.titulo}`;
      
      document.getElementById('modalBadges').innerHTML = `
        <span class="badge bg-primary px-3 py-2 rounded-pill"><i class="bi bi-tag me-1"></i>${sesion.semana}</span>
        <span class="badge bg-success px-3 py-2 rounded-pill"><i class="bi bi-calendar-event me-1"></i>${sesion.fecha}</span>
      `;
      
      document.getElementById('modalApuntes').innerHTML = `<p class="mb-0 lh-lg">${sesion.apuntes.replace(/\n/g, '<br>')}</p>`;
      
      // Control de Multimedia (2 fotos y 2 videos)
      const multimediaContainer = document.getElementById('modalMultimedia');
      multimediaContainer.innerHTML = `
        <div class="col-12 col-md-6">
          <div class="media-box" style="cursor:zoom-in;" onclick="abrirFoto('${sesion.fotos[0]}')">
            <img src="${sesion.fotos[0]}" alt="Foto 1">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="media-box" style="cursor:zoom-in;" onclick="abrirFoto('${sesion.fotos[1]}')">
            <img src="${sesion.fotos[1]}" alt="Foto 2">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="media-box">
            <iframe src="${sesion.videos[0]}" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="media-box">
            <iframe src="${sesion.videos[1]}" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      `;
      
      modal.show();
    }
  };

  // D) Función para hacer zoom a las fotos (Lightbox)
  window.abrirFoto = function(src) {
    const modalImg = document.createElement("div");
    modalImg.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;backdrop-filter:blur(8px);";
    modalImg.innerHTML = `<img src="${src}" class="img-fluid rounded-4 shadow-lg border border-secondary" style="max-width:90vw;max-height:90vh;">`;
    modalImg.onclick = () => modalImg.remove();
    document.body.appendChild(modalImg);
  };
});