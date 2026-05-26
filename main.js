// ==========================================
// 1. BASE DE DATOS - DIARIO DE SESIONES
// ==========================================
const sesionesDelPDF = [
  
// ------------------ SESIÓN 1 ------------------
  {
    id: 1,
    semana: "Primera Semana",
    fecha: "17/02/2026",
    titulo: "Presentación de la Asignatura y Creación del Grupo",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy ha sido nuestro primer día de Didáctica General con el profesor Carlos Guirado. Nos ha presentado una asignatura con bastante peso (9 créditos) y nos ha explicado las dos opciones de itinerario para aprobar:</p>
        
        <div class="row g-3 my-3">
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-primary bg-opacity-10 p-3 rounded-4">
              <h6 class="fw-bold text-primary mb-1"><i class="bi bi-journal-check me-2"></i>Opción A (Nuestra elección)</h6>
              <p class="small mb-0 text-dark">Basada en la evaluación continua, el trabajo diario, la asistencia y la creación de este portfolio.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-danger bg-opacity-10 p-3 rounded-4">
              <h6 class="fw-bold text-danger mb-1"><i class="bi bi-x-octagon me-2"></i>Opción B</h6>
              <p class="small mb-0 text-dark">Para quienes prefieran jugársela al 100% en un examen final tradicional.</p>
            </div>
          </div>
        </div>

        <p>Carlos nos ha dejado claro que la clase debe ser un <strong>espacio seguro</strong>. Los pilares fundamentales van a ser el respeto, el enfoque hacia la diversidad, la transformación social y la confianza. El aula es un lugar para equivocarse y aprender de los errores, donde el profesor actuará como un guía que nos acompañará en el proceso.</p>

        <h5 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-gear-fill text-secondary me-2"></i>Metodología y Evaluación</h5>
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Trabajo por proyectos (ABP), asambleas, salidas fuera del aula y uso de una cuenta de TikTok grupal.</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Se permite el uso ético de la Inteligencia Artificial, pero el plagio o las faltas de respeto suponen el suspenso directo.</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>La nota se divide al 50%: mitad trabajos/portfolio y mitad el proceso diario y la asamblea final. <em>"No sirve un trabajo perfecto al final si no se ha visto la evolución"</em>.</li>
        </ul>

        <div class="alert alert-warning border-0 rounded-4 mt-4">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-people-fill me-2"></i>La Creación del Equipo</h6>
          <p class="small mb-0 text-dark">La regla para repartir los roles era muy curiosa: cada uno debía elegir el rol que peor se le da para así obligarse a mejorar. Tras debatir, así nació oficialmente nuestro grupo: <strong>Glori, Pacheco, Joselu y Nathalie</strong>.</p>
        </div>
      </div>
    `,
    fotos: [
      "./img/clase.png",
      "./img/img.JPG"
    ],
    videos: []
  },

  // ------------------ SESIÓN 2 ------------------
  {
    id: 2,
    semana: "Primera Semana",
    fecha: "19/02/2026",
    titulo: "Vínculos, TikTok y Asignación de Roles",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy tuvimos nuestra primera clase en grupos reducidos. Empezamos en asamblea leyendo un texto de Donna Haraway, la primera de las "Cuestiones Previas" para trabajar por Proyectos de Investigación.</p>
        
        <div class="border-start border-4 border-info bg-light p-3 rounded-end-3 my-4">
          <p class="mb-0 text-dark fst-italic">La lectura nos hizo reflexionar sobre la importancia de crear vínculos reales y profundos desde el primer día, no solo saber cómo nos llamamos. El aula debe ser un <strong>"cerebro social"</strong> basado en la confianza, el diálogo y el respeto mutuo, rompiendo con la idea tradicional de escuela.</p>
        </div>

        <p>Para poner esto en práctica, dedicamos un rato a presentarnos todos a fondo, incluido el profesor. Después, Carlos nos sorprendió pidiéndonos propuestas para la excursión que haremos más adelante; nos gustó mucho este detalle de darnos voz y voto, ya que normalmente los profesores imponen las salidas sin opción a réplica.</p>

        <h5 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-camera-video-fill text-danger me-2"></i>Iniciativa TikTok</h5>
        <p>Arrancamos oficialmente con la cuenta de TikTok de la clase. Nosotros, los <em>Profequerones</em>, nos ofrecimos voluntarios para gestionarla y subir los vídeos de esta primera semana. Glori y Pacheco se encargaron de crearla y mandarle las claves a Carlos.</p>

        <h5 class="fw-bold text-dark mt-5 mb-3 border-bottom pb-2">Asignación de Roles: El Reto Personal</h5>
        <p class="small">Como acordamos el primer día, elegimos lo que peor se nos da para forzarnos a mejorar:</p>
        <div class="row g-3 mt-1">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 class="fw-bold text-primary mb-1">Nathalie (Coordinación)</h6>
              <p class="small mb-0">Para aprender a delegar tareas y confiar en el equipo, ya que tiende a asumir todo el trabajo ella sola.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 class="fw-bold text-success mb-1">Joselu (Secretaría)</h6>
              <p class="small mb-0">Suele trabajar bien, pero a veces se distrae. Este rol le obligará a mantener la atención y anotarlo todo.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 class="fw-bold text-warning mb-1">Pacheco (Portavoz)</h6>
              <p class="small mb-0">No le gusta nada hablar en público, así que esto le servirá para ganar seguridad y perder el miedo.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <h6 class="fw-bold text-danger mb-1">Glori (Material)</h6>
              <p class="small mb-0">Aunque toma buenos apuntes, es bastante despistada. Esto le ayudará a ser más atenta a los detalles y organizada.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    fotos: [
      "./img/img1.JPG",
      "./img/img2.JPG"
    ],
    videos: []
  },

  // ------------------ SESIÓN 3 ------------------
  {
    id: 3,
    semana: "Segunda Semana",
    fecha: "24/02/2026",
    titulo: "Modelos, el Aula como Cerebro y Escape Room",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Empezamos la sesión analizando los diferentes planos de la realidad y cómo la Didáctica se sitúa a medio camino entre el modelo repetidor y el transformador. Surgió un debate muy interesante en clase: <em>¿educamos para repetir o para transformar?</em> Concluimos que, aunque el cerebro necesita estímulos nuevos para aprender, cierta base de memorización y repetición sigue siendo necesaria dependiendo de la asignatura.</p>
        
        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-diagram-3-fill text-primary me-2"></i>Proyecto Roma: Organizando el Aula</h4>
        <p>Carlos nos introdujo el Proyecto Roma. El reto era organizar el aula basándonos en el Proceso Lógico de Pensamiento, funcionando como si fuera un cerebro. Diseñamos un aula en forma de "U" (como una grada) para vernos las caras, dividida en zonas estratégicas:</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-heart-fill text-danger me-2"></i><strong>Afectividad y Normas:</strong> Un tablón de normas creado por todos.</li>
          <li class="mb-2"><i class="bi bi-activity text-success me-2"></i><strong>Movimiento y Autonomía:</strong> Una alfombra central para dinámicas y mesas redondas para fomentar el trabajo en equipo.</li>
          <li class="mb-2"><i class="bi bi-brain text-info me-2"></i><strong>Lenguaje y Cognición:</strong> Estanterías de libros, diarios de clase y espacio para un concurso matemático semanal.</li>
        </ul>

        <div class="minecraft-work-callout p-4 p-md-5 rounded-4 shadow-sm text-center text-md-start my-4">
          <div class="d-flex flex-column flex-md-row align-items-center gap-4 mb-4">
            <i class="bi bi-box-fill text-success" style="font-size: 3rem;"></i>
            <div>
              <h4 class="fw-bold text-white mb-2">Proyecto Especial: El Aula-Cerebro en Minecraft</h4>
              <p class="text-white-50 mb-0 lh-lg">Llevamos nuestra planificación teórica a la práctica diseñando nuestra aula ideal dentro de Minecraft. Creamos un entorno visual que refleja las cuatro dimensiones del Proceso Lógico de Pensamiento, funcionando como un 'cerebro social'.</p>
            </div>
          </div>
          <div class="media-box rounded-4 overflow-hidden border border-success border-opacity-25 shadow" data-youtube-src="https://www.youtube.com/embed/8lUW9aiSqmY" data-youtube-title="Proyecto Aula-Cerebro en Minecraft"></div>
        </div>

        <p>Después de nombrar a teóricos como Vigotsky o Bruner, consensuamos las normas de convivencia reales de nuestra clase: levantar la mano, respeto mutuo, entrar con buen humor y poder comer siempre que dejemos todo limpio.</p>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-unlock-fill text-warning me-2"></i>Escape Room Didáctico</h4>
        <p>La segunda mitad de la clase fue pura acción: ¡un Escape Room por el Día de Andalucía! Nos unimos al grupo "Los Silbones" y diseñamos una gymkana por provincias, utilizando portátiles y fomentando la inclusión bajo el lema de que "todos somos andaluces".</p>
        <p>Gloria formó parte de la Comisión Evaluadora. Las valoraciones fueron totalmente objetivas y sinceras, puntuando como "Pobre" a los grupos que carecieron de coherencia o inclusividad real. Al final, nuestro esfuerzo se vio recompensado y quedamos en un merecidísimo <strong>2º puesto</strong>.</p>

        <div class="row my-5 g-4">
          <div class="col-12 col-md-6">
            <a href="https://www.tiktok.com/@1dprimariaa_/video/7610893785320443158?is_from_webapp=1&sender_device=pc&web_id=7611210260893091350" target="_blank" class="tiktok-link-button card h-100 p-4 rounded-4 shadow-sm text-center align-items-center justify-content-center flex-column d-flex gap-2 text-decoration-none">
              <i class="bi bi-tiktok fs-1 text-dark"></i>
              <span class="fw-bold fs-6 text-dark">TikTok: Ping-Pong 1</span>
              <span class="text-muted small">Ver TikTok en formato "Ping-pong" con Nathalie entrevistando a Mario</span>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="https://www.tiktok.com/@1dprimariaa_/video/7611093612033543446?is_from_webapp=1&sender_device=pc&web_id=7611210260893091350" target="_blank" class="tiktok-link-button card h-100 p-4 rounded-4 shadow-sm text-center align-items-center justify-content-center flex-column d-flex gap-2 text-decoration-none">
              <i class="bi bi-tiktok fs-1 text-dark"></i>
              <span class="fw-bold fs-6 text-dark">TikTok: Ping-Pong 2</span>
              <span class="text-muted small">Ver TikTok en formato "Ping-pong" con Pacheco entrevistando a Joselu</span>
            </a>
          </div>
        </div>

        <p class="mb-0">Cerramos el día grabando nuestro primer TikTok como encargados de la semana. Para la próxima clase, tenemos el encargo de investigar a un autor andaluz.</p>
      </div>
    `,
    fotos: [
      "./img/img4.png",
      "./img/img8.png",
      "./img/img6.png",
      "./img/img7.png"
    ],
    videos: []
  },

// ------------------ SESIÓN 4 ------------------
  {
    id: 4,
    semana: "Segunda Semana",
    fecha: "26/02/2026",
    titulo: "María Zambrano, Sueños y Encuentro con la Clase C",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Siguiendo con la temática del Día de Andalucía, hoy en los grupos reducidos tocó investigar sobre una figura andaluza importante. Nosotros elegimos a la veleña <strong>María Zambrano</strong>, la primera mujer filósofa en lengua española y una intelectual clave de nuestra historia.</p>
        
        <div class="bg-light p-4 rounded-3 border-start border-4 border-info my-4">
          <h6 class="fw-bold text-dark mb-2">Los Sueños y El Tiempo</h6>
          <p class="mb-0 small">Nos centramos en un fragmento de este libro. Nos pareció fascinante cómo distingue dos tipos de sueños: los de la <strong>"psique"</strong> (pasivos, desordenados y dominados por el deseo) y los de la <strong>"persona"</strong>. Estos últimos son muy especiales porque, aunque tampoco actuamos voluntariamente en ellos, nos presentan de golpe descubrimientos o soluciones a dilemas de nuestra vida real. Tienen una trascendencia que nos ayuda a comprendernos.</p>
        </div>

        <p>Para poner nuestras investigaciones en común, Carlos propuso una dinámica de rotación: dos miembros del grupo se quedaban en la mesa explicando a Zambrano, mientras los otros dos rotábamos por el resto de grupos para aprender sobre sus autores. Lamentablemente, solo nos dio tiempo a escuchar al grupo de Mario, porque teníamos una cita importante fuera del aula.</p>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-people-fill text-success me-2"></i>¡Encuentro con la clase de 1ºC!</h4>
        <p>Nos fuimos al hall de la facultad para reunirnos con ellos. El objetivo principal de este encuentro era invitarles a participar juntos en una actividad de <strong>"narrativa textil"</strong> para la próxima semana (con motivo del Día de la Mujer), en la que reflexionaremos sobre la mujer más importante de nuestras vidas. ¡Aceptaron la invitación sin dudarlo!</p>

        <div class="alert alert-success border-0 rounded-4 mt-3">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-controller me-2"></i>Dinámicas para romper el hielo</h6>
          <ul class="list-unstyled mb-0 small text-dark">
            <li class="mb-1"><i class="bi bi-cloud-rain-fill me-2"></i>Simulamos el sonido de una tormenta de forma coordinada.</li>
            <li class="mb-1"><i class="bi bi-magic me-2"></i>Hicimos interpretaciones creativas usando el palo de una escoba.</li>
            <li><i class="bi bi-hand-index-thumb-fill me-2"></i>Terminamos con un reto de coordinación donde grupos de cinco teníamos que bajar el palo hasta el suelo usando solo dos dedos.</li>
          </ul>
        </div>

        <p class="mt-4 mb-0 fw-bold">Salir de las cuatro paredes del aula a las que estamos acostumbrados y convivir con otra clase es un soplo de aire fresco que enriquece un montón la asignatura.</p>
      </div>
    `,
    fotos: [],
    videos: [
      "./img/video1.MP4", 
      "./img/video2.MP4",
      "./img/video3.MP4",
      "./img/video4.MP4"
    ]
  },

  // ------------------ SESIÓN 5 ------------------
  {
    id: 5,
    semana: "Tercera Semana",
    fecha: "03/03/2026",
    titulo: "Proceso Lógico de Pensamiento y el Poder de la Narrativa Textil",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy empezamos la clase enfrentándonos a un reto que, siendo sinceros, nos resultó bastante complicado al principio: ubicar una serie de preguntas sobre la Didáctica dentro de las cuatro dimensiones del <strong>Proceso Lógico de Pensamiento</strong> (Lenguaje, Cognición/Metacognición, Afectividad y Movimiento).</p>
        
        <div class="card border-0 bg-primary bg-opacity-10 p-4 rounded-4 my-4">
          <p class="small mb-0 text-dark">Teníamos que coger 17 dudas como <em>"¿Para qué sirve la didáctica?"</em> o <em>"¿Qué mundo tendríamos si no existiera?"</em> y justificar su dimensión. Por ejemplo, clasificamos <strong>"¿Cómo hacer que se valore?"</strong> en Afectividad porque destaca la importancia de los valores, y <strong>"¿Cómo extrapolar para nuestra vida?"</strong> en Movimiento porque implica acción y aplicación práctica. Nos costó bastante, pero fue un paso necesario para arrancar con nuestro proyecto final.</p>
        </div>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-scissors text-danger me-2"></i>El Poder de la Narrativa Textil</h4>
        <p>La clase dio un giro precioso cuando Carlos nos hizo una presentación sobre la "Narrativa Textil". Aprendimos que coser es mucho más que juntar telas; metafóricamente, cada hilo representa una voz, una historia o una vivencia.</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-arrow-right-short text-danger fs-5"></i>Nos explicó sus orígenes como práctica sociopolítica (ayudando a reparar conflictos sociales en Nariño).</li>
          <li class="mb-2"><i class="bi bi-arrow-right-short text-danger fs-5"></i>Vimos cómo el arte feminista lo ha usado históricamente para narrar experiencias silenciadas.</li>
          <li class="mb-2"><i class="bi bi-arrow-right-short text-danger fs-5"></i>El objetivo: romper el estereotipo de la "mujer cosiendo sola en casa" para convertirlo en una narrativa colectiva.</li>
        </ul>

        <figure class="text-center my-4">
          <blockquote class="blockquote fst-italic">
            <p>"Estoy hecha de retazos, pedacitos coloridos de cada vida que pasa por la mía y que voy cosiendo en el alma."</p>
          </blockquote>
          <figcaption class="blockquote-footer">Poema de <cite title="Source Title">Cris Pizzimenti</cite></figcaption>
        </figure>

        <p class="mb-0">Ver los propios bordados de Carlos (dedicados a su madre, a su perro, a un amigo...) hizo la explicación súper cercana. Terminamos la sesión aprendiendo a enhebrar la aguja y dando las primeras puntadas de nuestro bordado, que irá dedicado a la mujer más importante de nuestra vida. Hemos dejado de ver la costura como un simple pasatiempo para entenderla como una <strong>poderosa forma de expresión artística e histórica</strong>.</p>
      </div>
    `,
  },

  // ------------------ SESIÓN 6 ------------------
  {
    id: 6,
    semana: "Tercera Semana",
    fecha: "05/03/2026",
    titulo: "Narrativa Textil en el Hall: Tejiendo Redes con la Clase C",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy hemos vivido una de las experiencias más bonitas y dinámicas del curso: llevamos la narrativa textil al hall de la facultad para compartirla con la clase de 1ºC. Nos organizamos en grupos mixtos de diez personas y nos fuimos distribuyendo con total libertad (cerca de la cafetería, la pecera, la biblioteca...).</p>
        
        <div class="border-start border-4 border-warning bg-light p-3 rounded-end-3 my-4">
          <p class="mb-0 text-dark">En cuestión de minutos, transformamos un espacio de tránsito en un <strong>gran taller colaborativo</strong>. Nuestra misión principal era hacer de "guías" y explicarles a los compañeros de 1ºC en qué consistía la narrativa textil. Mientras bordábamos a la mujer más importante de nuestras vidas, el ambiente se llenó de intercambio de ideas y conversaciones enriquecedoras.</p>
        </div>

        <h5 class="fw-bold text-dark mt-4 mb-3">Rompiendo estereotipos en directo</h5>
        <p>Fue increíble observar los diferentes procesos. Algunas compañeras traían bordados súper avanzados que sirvieron de inspiración para el resto. Otros grupos decidieron unir sus telas para crear una pieza colectiva.</p>
        <p>Además, fue muy potente ver cómo se rompían los estereotipos tradicionales asociados a la costura, demostrando que <strong>la creatividad y la expresión de emociones no tienen género.</strong> ¡Hasta tuvimos la visita de los encargados de grabar el TikTok de la clase para inmortalizar el momento!</p>

        <div class="alert alert-secondary border-0 rounded-4 mt-4">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Reflexión Final</h6>
          <p class="small mb-0 text-dark">Salir de las cuatro paredes del aula, tener la autonomía de sentarnos donde quisiéramos y relacionarnos con personas fuera de nuestro entorno habitual ha hecho que el aprendizaje sea muchísimo más significativo. Hemos tejido, literalmente, nuevas redes de convivencia.</p>
        </div>
      </div>
    `,
  },
// ------------------ SESIÓN 7 ------------------
  {
    id: 7,
    semana: "Cuarta Semana",
    fecha: "10/03/2026",
    titulo: "Planificación, Vigotsky y el Grito de Ana Orantes",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Comenzamos la asamblea hablando de <strong>Vigotsky</strong> y de una idea que nos va a acompañar todo el curso: <em>el aprendizaje es un proceso social</em>. Para aprender, pasamos por una "doble formación": primero de forma interpersonal (con la ayuda de otros) y luego intrapersonal (cuando interiorizas el aprendizaje y caminas solo).</p>

        <h5 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-map-fill text-success me-2"></i>La Metáfora del Viaje: Proyecto Final</h5>
        <p>Con esta idea en mente, empezamos a planificar oficialmente nuestro Proyecto Final (que nos llevará unas 4 o 5 semanas). Decidimos dar respuesta a las preguntas usando la metáfora de un viaje:</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-eye-fill text-primary me-2"></i><strong>Percepción:</strong> Usaremos los sentidos (oído para debatir, vista para documentarnos).</li>
          <li class="mb-2"><i class="bi bi-brain text-primary me-2"></i><strong>Atención y Memoria:</strong> Para procesar ideas sin distracciones (adiós al móvil) y retener los fallos para no repetirlos.</li>
          <li class="mb-2"><i class="bi bi-clock-fill text-primary me-2"></i><strong>Organización:</strong> Mesas redondas para vernos las caras, luz natural y horario de 07:00 a 19:00h para mantener el cuerpo activo.</li>
        </ul>

        <hr class="my-5 border-primary opacity-25">

        <h4 class="fw-bold text-dark mb-3"><i class="bi bi-megaphone-fill text-danger me-2"></i>El Grito de Ana Orantes y el Silencio Cómplice</h4>
        <div class="bg-danger bg-opacity-10 p-4 rounded-4 my-3 border-start border-4 border-danger">
          <p class="text-dark mb-3">Tras el descanso, vimos la histórica entrevista de <strong>Ana Orantes</strong> en Canal Sur. Se nos encogió el corazón y nos llenamos de rabia al escuchar con qué crudeza y tranquilidad relataba 40 años de maltrato físico y psicológico continuo. Su testimonio destapó el inmenso machismo de la época, donde la sociedad y las instituciones miraban hacia otro lado por el "qué dirán".</p>
          <a href="https://www.youtube.com/watch?v=72Md_DypqRE&t=151s" target="_blank" class="btn btn-danger btn-sm rounded-pill fw-bold px-3 shadow-sm"><i class="bi bi-youtube me-2"></i>Ver entrevista histórica</a>
        </div>

        <p>Ana fue asesinada 13 días después de esta entrevista, pero su muerte marcó un antes y un después en la normativa española. Tuvimos un debate muy intenso sobre el clasismo y la <strong>urgencia de educar desde Infantil en el respeto y el consentimiento</strong> (nadie puede tocar el cuerpo de otra persona).</p>

        <h5 class="fw-bold text-dark mt-4 mb-3">Mujeres Borradas de la Historia</h5>
        <p>Para cerrar, Carlos nos pidió investigar a mujeres que fueron silenciadas. Nosotros expusimos el caso de <strong>Emily Brontë</strong>, quien tuvo que publicar <em>"Cumbres Borrascosas"</em> bajo un seudónimo masculino. Otros compañeros recordaron a Rosalind Franklin o Marie Curie.</p>
        
        <div class="alert alert-secondary border-0 rounded-4 mt-4">
          <p class="small mb-0 text-dark fw-bold"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Reflexión Final: El silencio mata. Como sociedad y futuros docentes tenemos la responsabilidad de no mirar hacia otro lado. Dar voz a las mujeres silenciadas en el pasado es el primer paso para construir aulas más justas en el futuro.</p>
        </div>
      </div>
    `,
  },

  // ------------------ SESIÓN 8 ------------------
  {
    id: 8,
    semana: "Cuarta Semana",
    fecha: "12/03/2026",
    titulo: "La Emoción del Hilo: Presentación de las Narrativas Textiles",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>El día de hoy ha sido, sin duda, uno de los más emotivos del curso. Nos reunimos en grupo reducido para presentar el resultado de nuestras narrativas textiles. La gran mayoría coincidimos en dedicar este trabajo a <strong>nuestras madres o abuelas</strong>, mujeres valientes que han sido pilares fundamentales.</p>
        
        <p>Se vivieron momentos de mucha emoción, con lágrimas al contar cómo esas mujeres dejaron atrás sus sueños para vernos crecer. Estas sesiones nos enseñan la importancia de saber expresar nuestros sentimientos públicamente, una cualidad vital para nuestro futuro docente.</p>

        <h4 class="fw-bold text-dark mt-5 mb-4"><i class="bi bi-chat-heart-fill text-danger me-2"></i>Reflexiones de nuestro equipo</h4>
        
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-danger bg-opacity-10 text-danger rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Gloria</h6>
                </div>
                <p class="small mb-0 fst-italic">"Le dediqué mi bordado a mi madre. Cosí la palabra 'MAMÁ' junto a flores (hay que cuidarla para que no se marchite) y corazones. En el centro añadí unas mariposas que la representan: una mujer fuerte, que a sus 50 años se sacó el FP, que me crio trabajando en dos sitios a la vez y que siempre está ahí para salvarme. Se lo debo todo."</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Pacheco</h6>
                </div>
                <p class="small mb-0 fst-italic">"Yo hice una 'M' por mi madre, Mercedes. Le debo la vida y ha sido mi mayor apoyo en los momentos más difíciles, como cuando sufrí bullying en el colegio. Durante la clase me sentí un poco extraño al hablar de ella desde la alegría mientras otros lloraban. Luego comprendí que estaba simplemente feliz de saber que está a mi lado."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Joselu</h6>
                </div>
                <p class="small mb-0 fst-italic">"Al igual que Pacheco, bordé una 'M' dedicada a mi madre. Ella es quien me ha acompañado en toda mi etapa educativa y me ha ayudado con mis tareas desde pequeño. Además, tiene una gran afición por la costura, así que fue la excusa perfecta y el homenaje ideal para agradecerle todo lo que me ha apoyado siempre."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-warning bg-opacity-10 text-warning rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Nathalie</h6>
                </div>
                <p class="small mb-0 fst-italic">"Mi narrativa textil va para mi abuela materna, Reyna del Rosario. Crio a mi madre para que fuera una mujer fuerte e independiente, y ella es mi referente. Esta dinámica nos ayuda a expresar emociones y a entender que las verdaderas heroínas del Día de la Mujer muchas veces viven bajo nuestro propio techo."</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  },

  // ------------------ SESIÓN 9 ------------------
  {
    id: 9,
    semana: "Quinta Semana",
    fecha: "17/03/2026",
    titulo: "Planificación del Tiempo y el Abuso de Poder en las Aulas",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Comenzamos la sesión aterrizando nuestra planificación del proyecto. Acordamos trabajar siempre en la franja de 07:00 a 19:00 para aprovechar la luz natural. Como en clase solo disponemos de una hora efectiva semanal para el portfolio, hemos decidido usar un planificador y organizarnos para quedar fuera del horario lectivo en tramos cortos para no saturarnos.</p>

        <hr class="my-4 border-primary opacity-25">

        <h4 class="fw-bold text-dark mb-3"><i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Abuso de Poder y Complicidad Institucional</h4>
        <p>La clase tomó un tono mucho más serio al debatir sobre el abuso de poder por parte del profesorado, basándonos en el libro <em>"Enseñar a transgredir"</em> de Bell Hooks. Hablamos de cómo educar también significa poner límites.</p>
        
        <figure class="text-center my-4 p-4 bg-light rounded-4 border-start border-4 border-dark">
          <blockquote class="blockquote fw-bold text-dark">
            <p>"El silencio nunca es neutral, siempre protege a alguien y no siempre a quien lo necesita."</p>
          </blockquote>
        </figure>

        <p>Debatimos sobre lo repugnante y peligroso que es que existan docentes que generen miedo o normalicen comentarios inapropiados. Lo que más nos indigna es la complicidad de algunas instituciones que prefieren mirar hacia otro lado y silenciar a las víctimas para proteger su propio prestigio. Como futuros docentes, tenemos la inmensa responsabilidad de <strong>garantizar un trato basado en la igualdad y el respeto absoluto.</strong></p>

        <h5 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-award-fill text-warning me-2"></i>Una nueva visión de la Evaluación</h5>
        <div class="alert alert-success border-0 rounded-4 mt-3">
          <p class="small mb-0 text-dark">Para terminar con un enfoque más positivo, Carlos nos recordó que una rúbrica cerrada no siempre puede medir la singularidad de cada alumno. Nos dio una premisa que nos motiva muchísimo: prefiere trabajos de calidad antes que cantidad o "relleno". Y lo mejor: <strong>todos partimos ya con un sobresaliente en la asignatura</strong>; nuestro único trabajo ahora es mantenerlo a base de compromiso diario.</p>
        </div>
      </div>
    `,
  },
  // ------------------ SESIÓN 10 ------------------
  // ==========================================
// SESIÓN 10 - 19/03/2026
// ==========================================
{
  id: 10,
  semana: "Quinta Semana", 
  fecha: "19/03/2026",
  titulo: "Tertulia Dialógica de Autores Andaluces y Debate Educativo",
  apuntes: `
    <div class="sesion-content text-muted lh-lg">
      <p>En la clase de hoy hemos podido hacer dos actividades principales. La primera ha sido terminar con la tertulia dialógica que dio comienzo el pasado 26 de febrero, y posteriormente hemos hecho un debate sobre la escuela innovadora frente a la escuela tradicional.</p>

      <hr class="my-4 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-chat-quote-fill text-primary me-2"></i>1. La Tertulia Dialógica</h4>
      <p>Como sostiene Freire, la acción dialógica no es solo una reproducción de palabras vacías, sino un proceso de transformación y humanización. Aprendemos de un modo conjunto, conectando lo literario con nuestra propia vivencia y creando una conciencia crítica. Frente a la "educación bancaria" pasiva, la tertulia favorece una educación inclusiva y transformadora donde cada opinión importa.</p>
      
      <p>Para celebrar el Día de Andalucía, realizamos una tertulia sobre autores andaluces. La dinámica consistió en un circuito: Nathalie y Glori se quedaron como anfitrionas en nuestra mesa, mientras que Pacheco y Joselu fueron rotando por el resto de grupos para compartir e intercambiar conocimientos.</p>

      <h5 class="fw-bold text-dark mt-4 mb-3">Nuestra Autora: María Zambrano</h5>
      <p>Escogimos un texto de esta filósofa nacida en Vélez-Málaga. Nos pareció clave porque rompe el prejuicio externo de que en Andalucía somos "perezosos". Zambrano fue la primera mujer filósofa en lengua española y participó en las Misiones Pedagógicas.</p>
      
      <div class="bg-light p-4 rounded-3 border-start border-4 border-primary my-3">
        <h6 class="fw-bold text-dark mb-2">Fragmento de <em>Los Sueños y El Tiempo</em> (1960)</h6>
        <p class="fst-italic small mb-0">«[...] Al ser mirados los sueños desde su forma y no desde su contenido, como es habitual, se descubre la atemporalidad como su a priori, que los separa del estado de la vigilia. [...] Mas sólo la palabra, cumplida actualización de la libertad, puede proporcionar legitimidad poética al soñar.»</p>
      </div>

      <p>Zambrano distingue dos tipos de sueños: los de la <strong>psique</strong> (pasivos, desordenados, donde la persona es arrastrada) y los de la <strong>persona</strong> (donde aparecen soluciones o descubrimientos que nos ayudan a resolver dilemas de la vida real, teniendo trascendencia). Critica la conciencia moderna, excesivamente racional, recordando que los mitos y la literatura son formas en que el ser humano se busca en el universo.</p>

      <h5 class="fw-bold text-dark mt-5 mb-3 border-bottom pb-2">Lo que aprendimos de los demás grupos</h5>
      
      <div class="row g-4 mt-2">
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-primary mb-2">Victoria Kent (Málaga)</h6>
            <p class="small mb-0">Una de las primeras mujeres diputadas y directora general de prisiones en la Segunda República. Defendió reformas humanitarias y abrió paso a la mujer en la política. Destaca su famoso debate parlamentario con Clara Campoamor sobre el voto femenino.</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-primary mb-2">Julia Uceda (Sevilla)</h6>
            <p class="small mb-0">En su poema <em>Mis manos, mis labios</em> habla del silencio durante la época franquista para las mujeres en el exilio. Llevaba a Andalucía en la sangre allá donde iba, siendo la primera mujer en ganar el Premio Nacional de Poesía en democracia.</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-primary mb-2">A. Martínez Ares (Cádiz)</h6>
            <p class="small mb-0">Autor de comparsas de carnaval. Analizamos la copla <em>La oveja negra</em>, una dura metáfora sobre la decadencia de Andalucía. Relata cómo el resto de España a veces se ríe y critica a la región, pero acude a ella cuando le conviene.</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-primary mb-2">Juan R. Jiménez (Huelva)</h6>
            <p class="small mb-0">Premio Nobel de Literatura en 1956. El poema <em>La Soleá</em> representa el canto flamenco y a la Andalucía triste y trabajadora de antaño, haciendo distinción entre la Andalucía alta (Granada) y la baja (Córdoba).</p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <h6 class="fw-bold text-dark mt-3">Federico García Lorca</h6>
          <p class="small">El poema <em>Canto nocturno de los marineros andaluces</em> narra un viaje sentimental por las provincias (Cádiz, Sevilla, Málaga). Lorca usa el mar y las olas como metáforas del sentimiento de asfixia al no poder expresar su verdadera identidad sexual por culpa de la sociedad de la época, terminando en un tono frío y de olvido.</p>
        </div>
        <div class="col-md-6">
          <h6 class="fw-bold text-dark mt-3">Luis Cernuda</h6>
          <p class="small">Su poema <em>El Andaluz</em> transmite la intensidad y transparencia de nuestra gente. Refleja cómo en Andalucía nos tratamos como una gran familia frente a los estereotipos externos. Muestra esa relación de amor-odio del resto de España: aman venir de vacaciones, pero sienten cierta envidia de nuestra forma de vivir.</p>
        </div>
      </div>

      <hr class="my-5 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-diagram-3-fill text-success me-2"></i>2. Debate: Escuela Innovadora vs. Tradicional</h4>
      <p>La segunda actividad fue un debate. Por suerte, a nuestro equipo le tocó defender la <strong>escuela innovadora</strong>, lo que nos permitió aplicar toda la teoría vista en Didáctica y Psicología (por ejemplo, cómo el cerebro necesita estímulos novedosos para no olvidar los contenidos).</p>
      <p>Fue un cara a cara intenso. Compañeros como Sergio defendieron la escuela tradicional argumentando la necesidad de disciplina, mientras que Josué y Víctor (de nuestro bando) contraatacaron con evidencias científicas. Fue especialmente gracioso ver al profesor haciendo de "abogado del diablo" y defendiendo la escuela tradicional, cuando todos sabemos que su metodología es totalmente opuesta.</p>
      
      <div class="alert alert-secondary mt-4 border-0 rounded-4">
        <h6 class="fw-bold text-dark"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Nuestra Conclusión</h6>
        <p class="small mb-0">Este debate nos enseñó que en educación pocas veces todo es blanco o negro. Aunque defendemos la escuela innovadora, entendemos que ciertos aspectos de la escuela tradicional (como la estructura o la disciplina) siguen teniendo valor. Se trata de buscar un <strong>equilibrio y sentido común</strong>: no innovar por innovar, ni mantener lo antiguo por costumbre, sino construir una escuela donde el alumnado participe, se motive y le encuentre sentido a lo que aprende.</p>
      </div>

    </div>
  `
},
  // ==========================================
// SESIÓN 11 - 25/03/2026
// ==========================================
{
  id: 11,
  semana: "Sexta Semana",
  fecha: "25/03/2026",
  titulo: "La Realidad de la Escuela Rural: CEIP San Hilario de Poitiers",
  apuntes: `
    <div class="sesion-content text-muted lh-lg">
      <p>En la sesión de hoy hemos tenido un evento muy especial: ¡una charla con docentes de una escuela rural! Para esta experiencia se han unido las asignaturas de Didáctica y Organización (con el profe Nacho y la profesora María) para aprovechar la oportunidad al máximo.</p>

      <hr class="my-4 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-book-half text-primary me-2"></i>1. Lectura y Análisis de Documentos</h4>
      <p>La sesión comenzó con la lectura de dos textos fundamentales del autor González (2025) que nos sirvieron para contextualizar la realidad de la escuela rural andaluza:</p>
      
      <div class="row g-4 my-2">
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white border-bottom border-4 border-info">
            <h6 class="fw-bold text-dark mb-2">La fuerza de lo pequeño</h6>
            <p class="small mb-0">Basado en Comares (Axarquía). Defiende que lo pequeño tiene fuerza transformadora. Las escuelas rurales son el centro social del pueblo. Tienen ventajas como la atención individualizada (aulas unitarias/mixtas), el vínculo con las familias y la conexión directa con el entorno natural (Comunidades de Aprendizaje). Sin embargo, sufren problemas de infraestructura, despoblación y falta de normativa específica.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white border-bottom border-4 border-warning">
            <h6 class="fw-bold text-dark mb-2">Haciendo visible lo invisible</h6>
            <p class="small mb-0">Desde la perspectiva de una directora en Almogía (Málaga). Visibiliza la sobrecarga laboral del profesorado, que debe asumir funciones directivas, administrativas y docentes simultáneamente debido a la falta de personal. Critica que la burocracia está pensada para macrco-centros, pero destaca la enorme capacidad de estas escuelas para adaptar metodologías innovadoras a las necesidades reales.</p>
          </div>
        </div>
      </div>

      <h5 class="fw-bold text-dark mt-4 mb-2">Dinámica de puesta en común</h5>
      <p>Tras la lectura, escribimos individualmente qué significaba para nosotros la escuela rural. Luego, intercambiamos los papeles de forma anónima y los pusimos en común en nuestro grupo.</p>
      <p><strong>¿En qué coincidimos todos?</strong> En que son colegios alejados de la ciudad, con menos alumnos (lo que favorece la personalización), con gran uso del entorno natural en lugar de tantas pantallas, y con una relación muy estrecha entre docentes y familias.</p>
      <p><strong>¿Qué nos faltó mencionar?</strong> Las deficiencias en infraestructuras (edificios antiguos, mala calefacción), el peligro de cierre por despoblación, el mal estado de los accesos/carreteras y el enorme papel que juegan como transmisores de cultura y núcleo de la comunidad local.</p>

      <hr class="my-5 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-mic-fill text-success me-2"></i>2. Charla con el equipo docente: Comares</h4>
      <p>Con toda esta base, bajamos al salón de actos para escuchar a las docentes del <strong>CEIP San Hilario de Poitiers (Comares, "el balcón de la Axarquía")</strong>. Tras ver un vídeo sobre su día a día, nos explicaron la realidad de su centro:</p>
      
      <ul class="list-unstyled mb-4">
        <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Aulas Mixtas y Atención a la Diversidad:</strong> Tienen desde Infantil hasta la ESO mezclados. Esto fomenta que los mayores ayuden a los pequeños. Tienen un Aula Específica por el alto porcentaje de alumnado NEAE, lo que permite una atención verdaderamente individualizada.</li>
        <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Los Retos Reales:</strong> Las aulas mixtas dan miedo a los docentes nuevos por su complejidad. Requieren mucha formación en neuroeducación, cambiar la "mirada adulta" (pasar del control a la comprensión) y lidiar con el uso de los móviles, que afecta igual que en la ciudad.</li>
        <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Liderazgo Horizontal:</strong> Al ser pocas docentes, todas las decisiones se discuten en equipo. Adaptan el temario a la realidad, hablando de temas actuales como la educación afectivo-sexual o el pensamiento crítico, que a veces los libros de texto ignoran.</li>
      </ul>

      <div class="bg-light p-4 rounded-3 border-start border-4 border-success my-4">
        <h6 class="fw-bold text-dark mb-2"><i class="bi bi-stars text-warning me-2"></i>Iniciativas y Anécdotas que nos marcaron</h6>
        <p class="small mb-2">Nos encantó la idea del <strong>"Club de los Valientes"</strong>, un espacio donde el alumnado es responsable de gestionar y solucionar sus propios conflictos de forma autónoma.</p>
        <p class="small mb-0">También nos contaron cómo, en una excursión, a un niño se le olvidó el desayuno y la maestra volvió con él a su casa en el autobús (con el conductor ofreciéndose amablemente) para que no se quedara sin ir. Esto refleja el nivel de humanidad y el vínculo tan fuerte que existe en esta comunidad.</p>
      </div>

      <p>Por último, nos explicaron que cuando los niños pasan a 3º de la ESO a un instituto más grande en otro pueblo, sufren un "choque cultural" (se asustan con las sirenas o no entienden qué es un "aula de convivencia"), pero al final terminan adaptándose, aunque siempre echan de menos su colegio.</p>

      <hr class="my-5 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-chat-left-quote-fill text-danger me-2"></i>3. Conclusión del Equipo</h4>
      <div class="alert alert-danger bg-opacity-10 border-0 rounded-4 p-4 text-dark">
        <p class="mb-3">Después de conocer a fondo esta realidad, hemos comprendido que la escuela rural tiene muchísimas más fortalezas de las que normalmente se visibilizan. A pesar de las dificultades (despoblación, burocracia, infraestructuras), destacan por ofrecer una <strong>educación cercana, personalizada y muy humana</strong>.</p>
        <p class="mb-3">Hemos comprobado que no son escuelas "inferiores" a las urbanas, sino espacios con un gran potencial transformador, capaces de innovar y adaptarse a las necesidades reales de los niños. Esta experiencia nos ha cambiado la mirada: nos ha hecho reflexionar sobre la importancia de construir colegios basados en la confianza y el sentimiento de comunidad.</p>
        <p class="mb-0 fw-bold">Escuchar estas experiencias reales nos ha ayudado a entender que ser docente no consiste solo en enseñar contenidos, sino también en acompañar, escuchar, adaptarse y crear oportunidades para que cada alumno y alumna crezca en un entorno donde se sienta verdaderamente valorado.</p>
      </div>

    </div>
  `
},
  // ==========================================
// SESIÓN 12 - 26/03/2026
// ==========================================
{
  id: 12,
  semana: "Sexta Semana",
  fecha: "26/03/2026",
  titulo: "TDAH vs Creatividad y el Debate sobre la Eutanasia",
  apuntes: `
    <div class="sesion-content text-muted lh-lg">
      <p>En el día de hoy hemos abordado dos temas profundamente humanos y complejos: la visión del sistema educativo sobre la creatividad y la salud mental, y un duro debate ético sobre el final de la vida y el papel de la escuela en la prevención.</p>

      <hr class="my-4 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-palette-fill text-warning me-2"></i>1. Ken Robinson: TDAH y Creatividad en Infantil</h4>
      <p>Comenzamos la clase analizando las ideas de Ken Robinson, quien argumenta que el TDAH (Trastorno por Déficit de Atención e Hiperactividad) sufre un problema de sobrediagnóstico. A menudo, los sistemas educativos, por ser demasiado rígidos, confunden la alta energía y la creatividad natural de los niños con un trastorno.</p>
      
      <div class="bg-light p-4 rounded-3 border-start border-4 border-warning my-3">
        <p class="mb-0">Robinson sostenía que muchos niños etiquetados con TDAH <strong>no necesitan medicación, sino más movimiento y estímulos creativos</strong>. Propone un cambio hacia una educación personalizada que fomente el <em>pensamiento divergente</em>, evitando que la escuela "mate" la creatividad (como demuestra el dato de que los niños pasan de tener 150 posibles soluciones a un problema en infantil, a solo 75 a medida que avanzan de curso).</p>
      </div>

      <hr class="my-5 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-heartbreak-fill text-danger me-2"></i>2. El caso de Noelia Castillo Ramos y el Debate sobre la Eutanasia</h4>
      <p>A continuación, tratamos en asamblea un caso reciente que ha conmocionado a nivel internacional y ha reabierto el debate sobre la muerte digna: la eutanasia de Noelia Castillo Ramos, una joven de 25 años.</p>
      
      <div class="row g-4 my-2">
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-dark mb-2">El Contexto</h6>
            <p class="small mb-0">Noelia solicitó la eutanasia tras quedar parapléjica por un intento de suicidio, el cual derivó del inmenso trauma de una violación múltiple. El proceso se demoró casi dos años porque su padre se oponía alegando problemas de salud mental de su hija, aunque tribunales e informes médicos certificaron que ella estaba en plenas facultades para decidir.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 class="fw-bold text-dark mb-2">Sufrimiento Físico vs. Mental</h6>
            <p class="small mb-0">El debate en clase sacó a la luz una triste realidad social: la medicina y la sociedad suelen validar más el sufrimiento físico (paraplejía, cáncer) porque es medible y visible, cuestionando a veces el dolor psicológico (depresión, trauma), a pesar de que este puede ser igual de intenso, limitante e irreversible.</p>
          </div>
        </div>
      </div>

      <h5 class="fw-bold text-dark mt-4 mb-3">Perspectivas enfrentadas en el aula</h5>
      <ul class="list-unstyled mb-4 ps-2">
        <li class="mb-3"><i class="bi bi-caret-right-fill text-danger me-2"></i><strong>Suicidio vs. Eutanasia:</strong> Diferenciamos entre el suicidio (algo que nadie puede impedir al 100%) y la eutanasia, que implica aprobar legalmente el derecho a recibir ayuda médica para morir tras una decisión deliberada, evaluada por profesionales y sin sufrimiento físico añadido.</li>
        <li class="mb-3"><i class="bi bi-caret-right-fill text-danger me-2"></i><strong>El derecho a descansar:</strong> Mientras algunas personas argumentaban que el suicidio nunca es una opción, otros compañeros defendieron que, cuando una persona padece un dolor irreversible y sin expectativas de mejora (físico o mental), merece poder poner fin a su sufrimiento de forma digna.</li>
      </ul>

      <h5 class="fw-bold text-dark mt-4 mb-3 border-top pt-3">¿Se debe hablar del suicidio en las aulas?</h5>
      <p>Surgió la duda de si tratar estos temas en clase podría fomentar la tasa de suicidios. La mayoría concluimos que no funciona así. Al igual que ocurre con la educación sexual, <strong>hablar del tema ayuda a gestionar emociones, reconocer señales de alarma y buscar ayuda</strong>. Nuestro papel como docentes no es eliminar el sufrimiento por completo (no somos médicos), pero sí crear entornos seguros, ofrecer apoyo, acompañamiento y facilitar el acceso a ayuda profesional.</p>

      <hr class="my-5 border-primary opacity-25">

      <h4 class="fw-bold text-dark mb-3"><i class="bi bi-people-fill text-primary me-2"></i>3. Conclusión del Equipo</h4>
      <div class="alert alert-primary bg-opacity-10 border-0 rounded-4 p-4 text-dark">
        <p class="mb-3">Como grupo, consideramos que tanto las ideas de Ken Robinson como el duro debate sobre la eutanasia comparten una misma necesidad de fondo: <strong>construir una sociedad y una educación más humanas, capaces de comprender la diversidad y atender las necesidades reales de las personas.</strong></p>
        <p class="mb-3">Así como Robinson defiende que no debemos etiquetar a los niños, sino ofrecerles espacios donde desarrollarse según sus capacidades, también es fundamental escuchar y no juzgar a quienes atraviesan situaciones de sufrimiento profundo y desgarrador.</p>
        <p class="mb-0 fw-bold">Entendemos que educar no solo implica transmitir conocimientos, sino fomentar la empatía, el pensamiento crítico y la capacidad de cuidar de los demás. Como futuros docentes, debemos crear entornos donde cada persona se sienta comprendida, valorada y, sobre todo, acompañada en los momentos más difíciles.</p>
      </div>

    </div>
  `
},
  // ------------------ SESIÓN 13 ------------------
  {
    id: 13,
    semana: "Séptima Semana",
    fecha: "07/04/2026",
    titulo: "De la Escuela-Fábrica al Aprendizaje Vital y Role-Play de Evaluación",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy hemos hecho un viaje en el tiempo para entender cómo ha evolucionado la educación: pasando de un enfoque centrado en "enseñar" a uno centrado en "aprender". Empezamos diferenciando conceptos clave: la pedagogía es la teoría, mientras que la didáctica es la práctica en el aula. Del mismo modo, los objetivos son lo que el alumno debe "saber", pero las <strong>competencias son lo que "sabe hacer" con ese conocimiento en la vida real.</strong></p>

        <h5 class="fw-bold text-dark mt-4 mb-3">La evolución del modelo educativo</h5>
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-secondary bg-opacity-10 p-3 rounded-4">
              <h6 class="fw-bold text-secondary mb-1"><i class="bi bi-building me-2"></i>La Escuela-Fábrica (S. XVIII-XX)</h6>
              <p class="small mb-0 text-dark">Un sistema calcado al modelo industrial: estandarización, separación por edades, asignaturas fragmentadas y un alumnado pasivo basado en la obediencia y la repetición.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-success bg-opacity-10 p-3 rounded-4">
              <h6 class="fw-bold text-success mb-1"><i class="bi bi-tree-fill me-2"></i>El Aprendizaje Vital (Hoy)</h6>
              <p class="small mb-0 text-dark">Gracias a informes como UNESCO o PISA y a nuevas pedagogías, buscamos un aprendizaje global e inclusivo. El docente es un guía y el alumnado es el protagonista activo.</p>
            </div>
          </div>
        </div>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-controller text-primary me-2"></i>Role-Play: La Evaluación en Acción</h4>
        <p>Para poner a prueba el cambio hacia una evaluación formativa y continua, Carlos nos propuso un "Role-Play". Nos unimos a Mario, Josué y Natalia. Dividimos los roles: Nathalie, Glori y Pacheco éramos los alumnos, mientras que Joselu, Josué y Mario actuaban de maestros simulando la evaluación de una presentación sobre emociones.</p>
        
        <p>Mientras otros grupos usaban sistemas tradicionales o de "caritas", nosotros apostamos por un <strong>enfoque integral</strong>: evaluamos el progreso durante el trabajo, usamos una rúbrica específica e incluimos la coevaluación entre compañeros.</p>

        <div class="alert alert-warning border-0 rounded-4 mt-3">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-trophy-fill text-warning me-2"></i>¡Ganadores del Role-Play!</h6>
          <p class="small mb-0 text-dark">Ganamos la dinámica por ser el grupo que más métodos de evaluación completos utilizó. El gran premio (y responsabilidad) es que nuestro equipo será la <strong>comisión oficial encargada de evaluar</strong> el resto de actividades de la asignatura junto al profesor.</p>
        </div>

        <p class="mt-4 mb-0 fw-bold">Como reflexión final, esta clase nos ha dejado muy claro que la educación está viva. Atrás quedó el modelo de fábrica; el futuro es de las competencias, la inclusión y el aprendizaje con sentido.</p>
      </div>
    `,
  },

  // ------------------ SESIÓN 14 ------------------
  {
    id: 14,
    semana: "Séptima Semana",
    fecha: "09/04/2026",
    titulo: "Vigotsky, Bruner y el Modelo Compensatorio Personal",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Comenzamos la clase con una base teórica clave, repasando a <strong>Vigotsky</strong> y a <strong>Das</strong>. Pero el plato fuerte del día vino con el psicólogo Jerome Bruner y su modelo compensatorio.</p>

        <div class="bg-light p-4 rounded-3 border-start border-4 border-info my-4">
          <h6 class="fw-bold text-dark mb-2">La Metáfora de las Tazas de Bruner</h6>
          <p class="small mb-0">En el modelo tradicional, si se te da mal algo, te machacan con eso y el resto de tus capacidades sufren un déficit. En el <strong>modelo compensatorio</strong>, el área en la que fallas puede ser equilibrada y apoyada por tus otras áreas fuertes. <em>"Si hay una taza vacía, abrimos camino con las demás para que el líquido se equilibre."</em></p>
        </div>

        <p>Carlos nos pidió un ejercicio de introspección: elegir un "déficit" y analizar cómo las demás dimensiones del Proceso Lógico de Pensamiento pueden ayudarnos a compensarlo. Aquí detallamos nuestro análisis grupal:</p>

        <div class="row g-4 mt-2">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
              <h6 class="fw-bold text-danger mb-1">Gloria</h6>
              <span class="badge bg-danger bg-opacity-10 text-danger mb-2">Déficit: Expresar historias (Nominar)</span>
              <p class="small mb-0">"Usaré la Percepción y Atención para fijarme en cómo hablan los demás (tono, gestos). Potenciaré la Lectura y el Lenguaje Musical para aprender nuevas formas de narrar. A nivel de Organización, dedicaré 5 minutos diarios a escribir cómo ha sido mi día para practicar y hacerme esquemas previos."</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
              <h6 class="fw-bold text-primary mb-1">Nathalie</h6>
              <span class="badge bg-primary bg-opacity-10 text-primary mb-2">Déficit: Concentración (Atención)</span>
              <p class="small mb-0">"Usaré la Planificación dividiendo el tiempo y organizando el espacio para dejar solo lo necesario. El Lenguaje Musical (música de fondo) y la Escritura me ayudan a anclar el foco. Es vital aplicar Normas (alejar el móvil) y descansar adecuadamente para que el cansancio no sea excusa."</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
              <h6 class="fw-bold text-warning mb-1">Pacheco</h6>
              <span class="badge bg-warning bg-opacity-10 text-warning mb-2">Déficit: Evitar distracciones (Atención)</span>
              <p class="small mb-0">"Me apoyaré en la Organización del Tiempo (estudiar en ratos cortos) y del Espacio (mesa limpia). La Autonomía Física será clave: hacer deporte antes de estudiar para liberar tensión. Por último, usaré la Autonomía Social pidiendo a mis compañeros que me avisen si me quedo 'mirando a la nada'."</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
              <h6 class="fw-bold text-success mb-1">Joselu</h6>
              <span class="badge bg-success bg-opacity-10 text-success mb-2">Déficit: Lectura prolongada</span>
              <p class="small mb-0">"Usaré la Planificación para elegir textos a mi nivel y no frustrarme. Aplicaré Lógico-Matemático para pautar descansos, Afectividad (disciplina y normas) y Organización de Espacio (lugar bien iluminado). También aplicaré mi Autonomía Física desplazándome a bibliotecas."</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ------------------ SESIÓN 15 ------------------
  {
    id: 15,
    semana: "Octava Semana",
    fecha: "14/04/2026",
    titulo: "Dimensiones Educativas, Currículum Oculto y Evaluación del Día del Libro",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Comenzamos la clase analizando los diferentes contextos en los que se desarrolla la Didáctica, desmontando la idea de que solo existe dentro de cuatro paredes. Carlos nos explicó tres dimensiones clave:</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-bank text-primary me-2"></i><strong>Formal:</strong> La escuela tradicional, con normativa, competencias y un título final.</li>
          <li class="mb-2"><i class="bi bi-calendar2-event text-success me-2"></i><strong>No Formal:</strong> Actividades estructuradas fuera del sistema reglado (seminarios, talleres).</li>
          <li class="mb-2"><i class="bi bi-house-heart-fill text-danger me-2"></i><strong>Informal:</strong> La vida cotidiana. A menudo aprendemos más de situaciones espontáneas que de la enseñanza reglada.</li>
        </ul>

        <div class="bg-light p-4 rounded-3 border-start border-4 border-warning my-4">
          <h6 class="fw-bold text-dark mb-2">El Currículum Oculto</h6>
          <p class="small mb-0">Profundizamos en la diferencia entre el Currículum Explícito (lo que dicta la ley) y el Oculto. Este último es <strong>todo lo que transmitimos sin darnos cuenta</strong>: nuestros valores, cómo organizamos las mesas o si mandamos callar a un alumno tras haber predicado sobre la libertad de expresión. La teoría siempre debe concordar con nuestras conductas.</p>
        </div>

        <p>El momento emotivo del día lo puso Mariam. Le dedicó su bordado a su madre e incluyó un muffin, contándonos cómo su madre le cedía su comida diciendo que no tenía hambre cuando no tenían dinero para más. Su historia nos recordó el inmenso sacrificio que hay detrás de que muchos estemos hoy en la universidad.</p>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-clipboard-check-fill text-success me-2"></i>Comisión Evaluadora: Día del Libro y Pueblo Gitano</h4>
        <p>Pasamos a la acción con nuestro papel como Comisión. Teníamos que evaluar las propuestas del resto de la clase estableciendo una rúbrica basada en cinco pilares:</p>
        
        <ol class="small text-dark mb-4">
          <li>Originalidad y creatividad.</li>
          <li>Planificación realista del tiempo.</li>
          <li>Fusión lógica entre el Día del Libro y la cultura gitana.</li>
          <li>Coherencia con los objetivos marcados.</li>
          <li>Inclusión real del pueblo gitano (evitando estereotipos y valorando si usaban cultura escrita).</li>
        </ol>

        <p>Tras escuchar todas las presentaciones, deliberamos y dimos un feedback constructivo a cada equipo. El <strong>Grupo 4 se llevó el primer puesto</strong> y será el encargado de ejecutar su actividad el 23 de abril.</p>

        <div class="alert alert-secondary border-0 rounded-4 mt-4">
          <p class="small mb-0 text-dark fw-bold"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Reflexión Final: Hemos comprendido que la educación no es neutra (siempre depende de políticas educativas) y que nuestro rol como evaluadores va mucho más allá de poner una nota: se trata de analizar, justificar y ayudar a mejorar a nuestros compañeros.</p>
        </div>
      </div>
    `,
  },
// ------------------ SESIÓN 16 ------------------
  {
    id: 16,
    semana: "Octava Semana",
    fecha: "16/04/2026",
    titulo: "Cartas a Nuestro 'Yo' de 5 Años: Un Viaje a la Infancia",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy hicimos una asamblea muy especial y significativa. La actividad consistía en compartir un relato o una carta dirigida a nuestro "yo" de 5 años. Fue un momento de escucha activa, muchísimo respeto y pura emoción.</p>

        <div class="border-start border-4 border-danger bg-light p-3 rounded-end-3 my-4">
          <p class="mb-0 text-dark">Pudimos conocer a nuestros compañeros desde su lado más vulnerable. Nos emocionó mucho escuchar a Sergio recordar con nostalgia sus tardes de fútbol, o a Elena, que no pudo contener las lágrimas al leer su carta. Los relatos de María y Natalia destacaron por el papel fundamental de sus madres, y el de Víctor nos cautivó por la profundidad de sus detalles. <strong>Escucharnos nos hizo darnos cuenta de que compartimos muchas más emociones y miedos de los que pensamos.</strong></p>
        </div>

        <h4 class="fw-bold text-dark mt-5 mb-4"><i class="bi bi-envelope-paper-heart-fill text-danger me-2"></i>Cartas de nuestro equipo</h4>
        
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-danger bg-opacity-10 text-danger rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Gloria</h6>
                </div>
                <p class="small mb-0 fst-italic">"Hola Glorita. Gracias por jugar con mamá a las cocinitas y no tener en cuenta sus gritos, porque también es su primera vez viviendo. Me encanta que lleves tu mochila de Spiderman y que sepas que no hace falta que te rescate un príncipe azul para ser una superheroína. Recuerda siempre la frase de papá: 'Si no pasasen cosas malas, no disfrutarías tanto las cosas buenas'. Escribir esto me ha hecho reconectar con mi niña interior."</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Pacheco</h6>
                </div>
                <p class="small mb-0 fst-italic">"Hola, pequeño Pachequín. Te escribo para darte las gracias por no rendirte cuando las cosas se pusieron feas en el colegio y sufriste bullying. Ese coraje es lo que me ha hecho ser quien soy hoy. Gracias por aguantar la incertidumbre de no saber qué hacer tras Bachillerato; hoy estoy rodeado de gente impresionante en la universidad gracias a que seguiste caminando."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-warning bg-opacity-10 text-warning rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Nathalie</h6>
                </div>
                <p class="small mb-0 fst-italic">"Hola Nathalie. Disfruta cada segundo con tu 'Abu' y tus tíos, porque dentro de unos años no podrás visitarlos tan a menudo. Sigue jugando al fútbol y haciendo gimnasia; te dejarán amistades preciosas. Y, sobre todo, dales muchos abrazos a tus padres y a tu hermana, porque ellos también están viviendo por primera vez y necesitan tu cariño. No te cargues los problemas del mundo a la espalda."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Joselu</h6>
                </div>
                <p class="small mb-0 fst-italic">"A mi 'yo' de 5 años le aconsejaría, simplemente, que fuera él mismo. Que hiciera lo que sintiese en cada momento porque todo error acaba siendo un aprendizaje. Le diría que se quitase esa vergüenza tonta por el 'qué dirán' y que viviera más tranquilo, sabiendo que siempre hay muchas opciones para un mismo camino. Al final, me agradecería a mí mismo haber hecho todo lo que hice."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ------------------ SESIÓN 17 ------------------
  {
    id: 17,
    semana: "Novena Semana",
    fecha: "21/04/2026",
    titulo: "Metodologías, Tipos de Evaluación y Rúbricas en Acción",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Comenzamos la clase resolviendo dudas sobre nuestro proyecto y hablando de la importancia de evitar el plagio y citar en formato APA. A raíz de unas preguntas, Carlos nos recordó que la didáctica es diversa y tiene muchos contextos: formal (la escuela), no formal (seminarios) e informal (nuestro día a día, donde muchas veces aprendemos más que en un aula).</p>

        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-tools text-primary me-2"></i>Metodologías Activas</h4>
        <p>Comprendimos que toda metodología tiene un porqué, y criticamos que muchas veces a los maestros no se les valora lo suficiente, cuando su práctica requiere la misma precisión que la de un cirujano. Repasamos metodologías clave para salir del modelo tradicional:</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-controller text-danger me-2"></i><strong>Gamificación:</strong> No es jugar por jugar, es incorporar las mecánicas del juego al aprendizaje.</li>
          <li class="mb-2"><i class="bi bi-arrow-repeat text-success me-2"></i><strong>Flipped Classroom (Aula Invertida):</strong> El alumno prepara la teoría en casa y en clase se hace la práctica.</li>
          <li class="mb-2"><i class="bi bi-diagram-3-fill text-info me-2"></i><strong>ABP:</strong> Trabajar de forma cooperativa hacia un fin común.</li>
          <li class="mb-2"><i class="bi bi-eye-fill text-warning me-2"></i><strong>Visible Thinking:</strong> Rutinas para hacer visible el pensamiento de los alumnos.</li>
        </ul>

        <div class="bg-light p-4 rounded-3 border-start border-4 border-success my-4">
          <h6 class="fw-bold text-dark mb-2">Una Evaluación Real y Justa</h6>
          <p class="small mb-0">Un buen docente no puede basarse solo en un examen sumativo (cuantitativo y finalista). Hay que evaluar el proceso (formativa), al principio (diagnóstica) y contar con múltiples voces: Heteroevaluación, Autoevaluación y Coevaluación. Nos marcó mucho el ejemplo del <strong>Test de Cooper en E.F.</strong>: una prueba puramente capacitista que evalúa solo el resultado y no el esfuerzo o el progreso del alumno.</p>
        </div>

        <h4 class="fw-bold text-dark mt-5 mb-3"><i class="bi bi-search text-warning me-2"></i>Comisión Evaluadora en Acción</h4>
        <p>Tras el descanso, nos dividimos por parejas para supervisar y dar feedback al resto de grupos sobre sus propuestas para el Día del Libro y el Pueblo Gitano:</p>
        
        <div class="row g-3">
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4">
              <h6 class="fw-bold text-dark mb-2">Gloria y Josué (G1 y G3)</h6>
              <p class="small mb-0">El G1 destacó por usar a Camarón cantando a Lorca. El G3 presentó una actividad brillante fusionando temas: un teatro de poemas gitanos donde la clase debe adivinar la obra.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4">
              <h6 class="fw-bold text-dark mb-2">Pacheco y Mario (G2)</h6>
              <p class="small mb-0">Han mejorado mucho sus recursos, aunque les dimos feedback para que definan un objetivo general más claro y fomenten que todo su grupo participe por igual.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4">
              <h6 class="fw-bold text-dark mb-2">Nathalie, Natalia y Joselu (G4 y G5)</h6>
              <p class="small mb-0">El G4 tuvo un trabajo en equipo impecable. El G5 planteó crear una historia conjunta ("Érase una vez..."), aunque notamos que algunos miembros hablaban mucho más que otros.</p>
            </div>
          </div>
        </div>

        <p class="mt-4 mb-0 fw-bold">Reflexión final: Entender que evaluar no es poner una nota para castigar, sino una herramienta para mejorar el proceso, es el mayor aprendizaje que nos llevamos hoy.</p>
      </div>
    `,
  },

  // ------------------ SESIÓN 18 ------------------
  {
    id: 18,
    semana: "Novena Semana",
    fecha: "23/04/2026",
    titulo: "Día del Libro: Flamenco, Teatros y el Juego de las Sillas",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy celebramos el Día del Libro de una forma única, liderada por el Grupo 4 (Ale Navas y Angy). Al entrar, el aula estaba transformada: sillas agrupadas mirando hacia fuera y el equipo organizador vestido de negro con detalles flamencos (peinetas, flores, mantoncillos). Además, trajeron material para que toda la clase nos metiéramos en el papel.</p>

        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-music-note-list text-danger me-2"></i>El Juego de las Sillas Literario</h4>
        <p>Comenzamos con una versión del clásico juego de las sillas al ritmo de música flamenca. Fue un momento súper divertido y lúdico, dejándonos anécdotas graciosas como la caída de Martina tras un rápido movimiento de Elena para conseguir su silla, coronándose como ganadora de esa ronda.</p>
        
        <p>Conforme íbamos siendo eliminados, nos entregaban un fragmento literario para interpretarlo teatralmente con un objetivo claro: fomentar el orgullo de la cultura gitana desde el respeto.</p>

        <h5 class="fw-bold text-dark mt-4 mb-3">Interpretaciones Teatrales</h5>
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-danger bg-opacity-10 p-3 rounded-4 border-start border-4 border-danger">
              <h6 class="fw-bold text-danger mb-1">Joselu y Gloria</h6>
              <p class="small mb-0 text-dark">Trabajaron con <em>"Camelamos naquerar"</em> de José Heredia Maya. Representamos una obra donde unos personajes "payos" pasaban del prejuicio a la comprensión, aprendiendo a no generalizar actitudes.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 bg-info bg-opacity-10 p-3 rounded-4 border-start border-4 border-info">
              <h6 class="fw-bold text-info mb-1">Pacheco y Nathalie</h6>
              <p class="small mb-0 text-dark">Interpretamos un texto de <em>"La Colmena"</em> de Camilo José Cela. Aunque al principio nos pareció complejo, logramos transmitir un mensaje claro sobre la ruptura de barreras culturales.</p>
            </div>
          </div>
        </div>

        <p>El resto de la clase también hizo teatros impresionantes: Elena se metió totalmente en su papel de Gonzalo; Laura y Leal representaron una fuerte defensa contra la discriminación; y Margot y Diana adaptaron a Jane Austen con un toque flamenco genial.</p>

        <div class="alert alert-warning border-0 rounded-4 mt-5 p-4">
          <h6 class="fw-bold text-dark mb-3"><i class="bi bi-ui-checks text-warning me-2"></i>Rúbrica Oficial de la Comisión</h6>
          <p class="small text-dark mb-3">Aprovechamos para dejar definida la rúbrica oficial con la que calificaremos a todos los grupos basándonos en: Objetivo, Participación activa, Corrección de errores, Relación entre temáticas, Recursos empleados, Organización de tiempos y Evaluación interna. Usaremos esta escala visual:</p>
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <span class="badge bg-white text-dark border shadow-sm fs-6 px-3 py-2">¡Excelente! 😀</span>
            <span class="badge bg-white text-dark border shadow-sm fs-6 px-3 py-2">¡Muy bien! 🙂</span>
            <span class="badge bg-white text-dark border shadow-sm fs-6 px-3 py-2">Bien 👍</span>
            <span class="badge bg-white text-dark border shadow-sm fs-6 px-3 py-2">Mejorable 😬</span>
            <span class="badge bg-white text-dark border shadow-sm fs-6 px-3 py-2">Insuficiente 🙁</span>
          </div>
        </div>

        <p class="mt-4 mb-0 fw-bold">Reflexión final: Fue una experiencia muy enriquecedora. Hemos comprobado que cuando el aprendizaje es participativo y lúdico, el mensaje de igualdad llega con muchísima más fuerza.</p>
      </div>
    `,
  },
  // ------------------ SESIÓN 19 ------------------
  {
    id: 19,
    semana: "Décima Semana",
    fecha: "28/04/2026",
    titulo: "Acción del Proyecto, Prevención de Plagios y Reyertas de Lorca",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Empezamos la sesión directamente en fase de "acción" con nuestro Proyecto. Carlos nos avisó de dos cosas importantes: cuidado con las faltas de asistencia (son motivo de suspenso directo) y <strong>cuidado con el plagio o el abuso de la Inteligencia Artificial</strong>. Quería ver identidad propia y normas APA.</p>

        <h5 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-search text-primary me-2"></i>División de la Investigación</h5>
        <div class="row g-3 mb-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4 border-top border-4 border-primary">
              <h6 class="fw-bold text-dark mb-1">Joselu</h6>
              <p class="small mb-0">Investigó si la calificación es finalista. Concluyó que, aunque es un resumen numérico, su verdadero valor reside en su función formativa y de mejora continua.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4 border-top border-4 border-success">
              <h6 class="fw-bold text-dark mb-1">Pacheco</h6>
              <p class="small mb-0">Abordó la Afectividad apoyándose en Chevallard. La didáctica se valora cuando los conocimientos complejos se reconstruyen para ser accesibles y útiles en la vida real.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 bg-white shadow-sm p-3 rounded-4 border-top border-4 border-warning">
              <h6 class="fw-bold text-dark mb-1">Gloria</h6>
              <p class="small mb-0">Investigó a diferentes autores. Encontró a Comenio (el padre de la Didáctica Magna, defensor de ir de lo simple a lo complejo) y a Skinner (conductismo).</p>
            </div>
          </div>
        </div>

        <div class="alert alert-warning border-0 rounded-4 my-4">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>El Toque de Atención</h6>
          <p class="small mb-0 text-dark">En medio de nuestra búsqueda, Carlos nos llamó al orden: por tirar de IA, todos los grupos estaban mencionando a los mismos autores. Nos animó a buscar sobre la Escuela de Frankfurt, el socioconstructivismo y, muy importante, a <strong>darle visibilidad a mujeres pedagogas.</strong></p>
        </div>

        <hr class="my-5 border-primary opacity-25">

        <h4 class="fw-bold text-dark mb-3"><i class="bi bi-masks text-danger me-2"></i>Teatro y Romancero Gitano</h4>
        <p>En la segunda mitad, el Grupo 3 nos explicó el origen del Orgullo Gitano y nos repartieron poemas de Lorca para interpretarlos. Tuvimos un fallo técnico graciosísimo: nos tocó el poema <em>"Reyerta"</em>, no entendíamos nada y fuimos incapaces de adivinar la obra... <strong>¡hasta que Víctor nos avisó de que el poema seguía por detrás de la hoja!</strong> Nos morimos de vergüenza y de risa.</p>
        
        <p>Luego nos tocó actuar: Gloria y Natalia hicieron de ancianas lloronas, Pacheco se tiró al suelo a rodar haciéndose el muerto, Joselu entró como cura a echar agua bendita y Josué cerró la escena como Guardia Civil.</p>

        <p class="mt-4 mb-0 fw-bold">Reflexión final: Como Comisión Evaluadora valoramos la actividad como brillante. Nos encanta cómo estas clases nos enseñan que aprender no es solo memorizar teoría, sino debatirla, construirla con el grupo y hasta tirarse al suelo a interpretar a Lorca.</p>
      </div>
    `,
  },

  // ------------------ SESIÓN 20 ------------------
  {
    id: 20,
    semana: "Décima Semana",
    fecha: "30/04/2026",
    titulo: "Cronología del Proyecto y Nuestras Huellas Sonoras",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Empezamos la clase haciendo un balance global de la asignatura. Carlos nos recordó por qué estamos aquí: escogimos la evaluación continua. Nos advirtió que el proyecto final exige unas <strong>96 horas de dedicación por persona</strong>, por lo que demanda esfuerzo, profundidad y cero plagios.</p>

        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-music-note-beamed text-info me-2"></i>Tarea 7: Huellas Sonoras</h4>
        <p>Carlos nos dio 20 minutos para buscar una canción que nos transportara a un momento clave de nuestra historia educativa. Reflexionamos sobre cómo de pequeños superábamos los errores mucho más rápido, mientras que ahora nos quedamos dándole vueltas a todo.</p>
        
        <h5 class="fw-bold text-dark mt-5 mb-4">Las Huellas de nuestro equipo</h5>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-danger bg-opacity-10 text-danger rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Gloria</h6>
                </div>
                <span class="badge bg-danger bg-opacity-10 text-danger mb-2">"Como una Ola" (Rocío Jurado)</span>
                <p class="small mb-0 fst-italic">"Era la alarma para salir al patio en mi colegio. Me genera muchísima nostalgia. Didácticamente, había un vínculo fuerte basado en la gestión del tiempo y la organización. Como docente, mantendría la dinámica de usar música alegre para gestionar las transiciones en el aula."</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Pacheco</h6>
                </div>
                <span class="badge bg-primary bg-opacity-10 text-primary mb-2">"M de Madre"</span>
                <p class="small mb-0 fst-italic">"En mi colegio religioso, en mayo esta canción sonaba de fondo mientras hacíamos juegos. El vínculo pasaba de lo académico a lo puramente emocional, formando identidad de centro. Como docente mantendría este clima festivo, añadiendo un espacio de reflexión final más dialógico."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Joselu</h6>
                </div>
                <span class="badge bg-success bg-opacity-10 text-success mb-2">"La Canción de los Ríos de España"</span>
                <p class="small mb-0 fst-italic">"Me lleva directo a Primaria. Es un recurso audiovisual brillante que funciona como andamiaje para explicar un contenido duro. Es una estrategia mucho más dinámica que una clase magistral. Como docente, me encantaría seguir usando y actualizando este recurso."</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-warning bg-opacity-10 text-warning rounded-circle p-2 me-3"><i class="bi bi-person-fill fs-5"></i></div>
                  <h6 class="fw-bold text-dark mb-0">Nathalie</h6>
                </div>
                <span class="badge bg-warning bg-opacity-10 text-warning mb-2">"I Wanna Dance With Somebody"</span>
                <p class="small mb-0 fst-italic">"Mi padre me la ponía en bucle en el coche para llevarme al cole. El análisis didáctico se enmarca en la educación informal (ámbito familiar). El vínculo es pura afectividad. Quiero llevar este valor emocional al aula, los pequeños gestos son los que realmente se graban en la memoria."</p>
              </div>
            </div>
          </div>
        </div>

        <div class="alert alert-secondary border-0 rounded-4 mt-4">
          <p class="small mb-0 text-dark fw-bold"><i class="bi bi-lightbulb-fill text-warning me-2"></i>Reflexión Final: Las actividades no son ejercicios aislados, sino piezas de nuestro crecimiento. La música tiene el inmenso poder de transportarnos, y compartir estos recuerdos ha creado un clima de empatía y confianza brutal en clase.</p>
        </div>
      </div>
    `,
  },

  // ------------------ SESIÓN 21 ------------------
  {
    id: 21,
    semana: "Undécima Semana",
    fecha: "05/05/2026",
    titulo: "La Fábrica de Cuentos, Trabajo a Medias y ¿Cómo educar a Alvarito?",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <h4 class="fw-bold text-dark mb-3"><i class="bi bi-clipboard-check-fill text-success me-2"></i>Comisión Evaluadora: Grupo 1</h4>
        <p>Empezamos el día valorando la propuesta del Día del Libro del Grupo 1 (Margot y Víctor). Tras un inicio algo flojo con un corto de El Ministerio del Tiempo, remontaron de forma brillante con su actividad principal: <strong>"La Fábrica de los Cuentos"</strong>.</p>
        <p>Nos dieron fragmentos aislados a cada miembro para crear una historia por separado y luego montar un teatro conjunto. Encajó perfectamente y nos entregaron hojas de autoevaluación, un detalle excelente que sumó muchos puntos en nuestra rúbrica.</p>

        <div class="bg-light p-4 rounded-3 border-start border-4 border-warning my-4">
          <h6 class="fw-bold text-dark mb-2"><i class="bi bi-people-fill text-warning me-2"></i>Trabajo a Medias</h6>
          <p class="small mb-0">Hoy nos tocó trabajar bajo mínimos en la fase de acción de nuestro proyecto porque <strong>solo estábamos dos miembros del grupo en clase</strong>. Nos centramos en el bloque de Afectividad y en plantear los escenarios de "Y si..." del Proceso Lógico de Pensamiento. Dejamos el terreno preparado para ponerlo en común cuando estemos todos.</p>
        </div>

        <hr class="my-5 border-primary opacity-25">

        <h4 class="fw-bold text-dark mb-3"><i class="bi bi-person-raised-hand text-danger me-2"></i>Debate: ¿Cómo educar a Alvarito?</h4>
        <p>Tras el descanso, entramos en un debate interesantísimo a raíz de este artículo donde una profesora se pregunta cómo manejar a un alumno disruptivo. Esto nos llevó a cuestionarnos:</p>
        
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-question-circle-fill text-primary me-2"></i>¿El ser humano es disruptivo por naturaleza?</li>
          <li class="mb-2"><i class="bi bi-tag-fill text-primary me-2"></i>¿Qué daño hacen etiquetas como "retrasados" o "problemáticos" en la escuela?</li>
        </ul>

        <div class="alert alert-info border-0 rounded-4 mt-4">
          <h6 class="fw-bold text-dark mb-2">Conclusión del Equipo</h6>
          <p class="small mb-0 text-dark">No hay un único camino o receta mágica para que los niños aprendan. <strong>Es el sistema educativo (con la inversión de recursos necesaria) el que debe adaptarse al alumno, y no el alumno al sistema.</strong> Para profundizar en esto, Carlos nos recomendó apuntar a dos autores clave de la pedagogía crítica: Jurjo Torres y Henry Giroux.</p>
        </div>
      </div>
    `,
  },
 // ------------------ SESIÓN 22 ------------------
  {
    id: 22,
    semana: "Undécima Semana",
    fecha: "07/05/2026",
    titulo: "El Cáncer y la Muerte en el Aula: Charla con Mónica (Cudeca)",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <div class="alert alert-secondary border-0 rounded-4 mb-4">
          <p class="mb-0 text-dark">Hoy hemos tenido una de las sesiones más impactantes, crudas y necesarias de todo el curso. Nos ha visitado <strong>Mónica</strong>, psicooncóloga con 20 años de experiencia que trabaja en Cudeca (cuidados paliativos). El tema principal: cómo abordar el cáncer y la muerte con nuestros futuros alumnos.</p>
        </div>

        <p>Mónica nos dejó claro que los niños siempre manifiestan su sufrimiento a través de la conducta (llamadas de atención, rebeldía, apatía). Nuestro deber como docentes es observar, preguntar y crear un espacio de total seguridad. Surgieron preguntas durísimas y muy reales:</p>

        <div class="row g-4 my-3">
          <div class="col-12">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-danger">
              <h6 class="fw-bold text-dark mb-1">¿Y si le oculto la realidad al niño?</h6>
              <p class="small mb-0">El peor error. Por el egocentrismo infantil, si falta información, se la inventa, asumiendo casi siempre que es culpa suya. Mónica contó el caso de un padre que dijo que a su mujer "la había quemado un rayo". El niño vivió aterrorizado y sufrió acoso escolar. <strong>La verdad, adaptada a su edad, siempre sana más que la mentira.</strong></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-info">
              <h6 class="fw-bold text-dark mb-1">¿Qué le digo si viene llorando porque su madre va a morir?</h6>
              <p class="small mb-0">No hay que dar falsas esperanzas ni quedarse mudo. A veces, la simple presencia física es suficiente. Un abrazo y dejar que exprese todo lo que siente es nuestro mayor salvavidas.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-warning">
              <h6 class="fw-bold text-dark mb-1">¿Qué ocurre si me pongo a llorar con él?</h6>
              <p class="small mb-0">Emocionarse no es malo, humaniza y crea un vínculo precioso. Pero hay que encontrar el equilibrio: el docente no puede derrumbarse hasta el punto de que sea el niño quien termine consolándolo. Somos su sostén.</p>
            </div>
          </div>
          <div class="col-12">
            <div class="card border-0 shadow-sm rounded-4 p-3 bg-white border-start border-4 border-success">
              <h6 class="fw-bold text-dark mb-1">¿Qué hago si un niño de mi clase tiene cáncer?</h6>
              <p class="small mb-0">Mariam contó el caso de su primo, a quien aislaban por miedo a contagiarle un resfriado. Mónica subrayó la importancia de educar a la clase para normalizarlo, ajustar objetivos académicos y reforzarle positivamente por su valentía.</p>
            </div>
          </div>
        </div>

        <p class="mt-4 mb-0 fw-bold">Reflexión final: Esta clase ha sido un golpe de realidad espectacular. Nos ha enseñado que la muerte y la enfermedad no pueden ser temas tabú en la escuela. Saber escuchar, no mentir y ser un ancla emocional es una responsabilidad inmensa. Agradecemos muchísimo estas experiencias "fuera del guion" que nos preparan para la vida real.</p>
      </div>
    `,
  },

  // ------------------ EDICIÓN ESPECIAL: TUTORÍA ------------------
  {
    id: 23,
    semana: "🌟 Edición Especial",
    fecha: "11/05/2026",
    titulo: "Tutoría de Seguimiento y Reorientación",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy solicitamos una tutoría con Carlos para evaluar nuestro progreso. Fue una sesión súper productiva que nos dio un subidón de motivación.</p>
        
        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-star-fill text-warning me-2"></i>Feedback del Proyecto</h4>
        <ul class="list-unstyled ps-2 mb-4">
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Cuestiones formales:</strong> Debemos incorporar un índice de contenidos y uno específico para tablas y figuras.</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Identidad:</strong> Le encantó que mezclemos vivencias y emociones con la teoría; nos dijo que prefiere leer nuestra identidad grupal antes que corregir proyectos sistemáticos e idénticos.</li>
          <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i><strong>Despliegue creativo:</strong> Se quedó muy sorprendido con la revista, el vídeo de Minecraft y nuestra propuesta de la página web. Nos animó a dejar bien registrado nuestro proceso de diseño.</li>
        </ul>

        <h5 class="fw-bold text-dark mt-4 mb-3">Nuevos Retos y Autorías</h5>
        <p>Le comentamos la intención de vincular una autoría científica a cada pregunta del Proceso Lógico. Carlos nos dio el visto bueno pero nos lanzó un reto: <strong>buscar teorías y autores más modernos.</strong> Vygotsky es un pilar, pero el proyecto ganará calidad aportando corrientes actuales.</p>

        <div class="bg-light p-4 rounded-3 border-start border-4 border-primary my-4">
          <h6 class="fw-bold text-dark mb-2">La Metáfora del Viaje a Sevilla</h6>
          <p class="small mb-0 fst-italic">Le confesamos nuestro miedo a estar desviándonos de la planificación inicial. Carlos nos tranquilizó: "Si tú organizas un viaje para ir a Sevilla, pero por imprevistos o decisiones del camino terminas en Huelva, el viaje sigue siendo un éxito. Lo único que tienes que hacer es explicar los motivos del cambio". Nos aclaró que no hace falta rehacer la planificación original; basta con justificar de forma reflexiva el cambio.</p>
        </div>

        <p class="mb-0 fw-bold">Nos fuimos con las ideas clarísimas, el proyecto reorientado y la enorme satisfacción de saber que nuestro esfuerzo y creatividad están siendo valorados.</p>
      </div>
    `,
  },

  // ------------------ SESIÓN 23 ------------------
  {
    id: 24,
    semana: "Duodécima Semana",
    fecha: "12/05/2026",
    titulo: "Normativa Andaluza, Vínculos en Clase y el Susto con Turnitin",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Empezamos la clase recordando los criterios de evaluación. Joselu tomó la iniciativa para resumir en voz alta en qué consiste nuestro proyecto: planificación, los "¿y si...?", aprendizajes y acción. Escucharlo nos dio muchísima satisfacción al ver que este método por fin cobra todo el sentido.</p>

        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-journal-bookmark-fill text-info me-2"></i>Teoría y Normativa</h4>
        <p>Vimos la Normativa en Andalucía y entendimos la diferencia entre Competencias Clave (transversales) y Competencias Específicas (antiguos contenidos, evaluables por descriptores). También repasamos la organización de los centros.</p>
        <p>Tomando nota de la tutoría sobre usar autorías modernas (después de quedarnos descolocados sabiendo que Rousseau decía que la moralidad se traspasaba por la leche materna), Nathalie y Joselu se fueron a buscar artículos contemporáneos en Jábega sobre didáctica crítica.</p>

        <h5 class="fw-bold text-dark mt-4 mb-3">Vínculos y Emociones en el Aula</h5>
        <p>Carlos lanzó 7 preguntas al azar para valorar el ambiente de la clase. Fue un momento precioso: Nerea agradeció a Margot su ayuda; Samuel destacó el apoyo de Pallarés y Gabriel; y Diana confesó estar sorprendida por el nulo ambiente competitivo. Para terminar, el grupo de Irene realizó su actividad, pero nos dio impotencia verla frustrada porque su equipo apenas había participado.</p>

        <div class="alert alert-danger border-0 rounded-4 mt-5 p-4 shadow-sm">
          <h6 class="fw-bold text-danger mb-2"><i class="bi bi-shield-exclamation text-danger me-2"></i>Reflexión Crítica: El Susto con Turnitin</h6>
          <p class="small text-dark mb-0">Queremos dejar constancia de un imprevisto que nos generó mucha indignación. Pasamos este portfolio por Turnitin para comprobarlo y nos devolvió porcentajes altísimos. Queremos dejar clarísimo que todo lo que hay escrito aquí son <strong>apuntes, vivencias y reflexiones 100% personales</strong> redactadas a lo largo de 14 semanas. Nos asusta e indigna que una herramienta automática pueda desvalorizar un trabajo tan íntimo, humano y propio como este.</p>
        </div>
      </div>
    `,
  },

  // ------------------ SESIÓN 24 ------------------
  {
    id: 25,
    semana: "Duodécima Semana",
    fecha: "14/05/2026",
    titulo: "El Ejercicio Reflexivo: ¿Un Examen Tradicional Encubierto?",
    apuntes: `
      <div class="sesion-content text-muted lh-lg">
        <p>Hoy tocó enfrentarse al esperado "ejercicio reflexivo", aunque tuvimos una baja en el equipo: Joselu no pudo asistir por sus clases de camión. La prueba consistió en 15 preguntas tipo test y una pregunta de desarrollo a elegir (planificar usando el Proceso Lógico de Pensamiento o basándose en el ABP).</p>

        <h4 class="fw-bold text-dark mt-4 mb-3"><i class="bi bi-bar-chart-fill text-primary me-2"></i>Sensaciones de la Montaña Rusa</h4>
        <div class="row g-3 mb-4">
          <div class="col-md-4">
            <div class="card border-0 bg-light shadow-sm p-3 rounded-4 h-100">
              <h6 class="fw-bold text-dark mb-1">Nathalie</h6>
              <p class="small mb-0">Le costó un poco más el tipo test, pero eligió la Opción 2 (ABP) en el desarrollo y salió con la sensación de haberlo bordado.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 bg-light shadow-sm p-3 rounded-4 h-100">
              <h6 class="fw-bold text-dark mb-1">Pacheco</h6>
              <p class="small mb-0">Sintió que el test le salió bastante bien. En el desarrollo también escogió la Opción 2 (ABP), quedando muy satisfecho aunque le supuso un gran esfuerzo.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 bg-light shadow-sm p-3 rounded-4 h-100">
              <h6 class="fw-bold text-dark mb-1">Glori</h6>
              <p class="small mb-0">Test controlado. Eligió la Opción 1 de desarrollo y salió contenta, aunque luego se preocupó al ver que cada persona fuera del aula lo había enfocado de manera totalmente distinta.</p>
            </div>
          </div>
        </div>

        <p>Al terminar, Carlos nos avisó de que enviará un correo antes del domingo a aquellas personas que hayan estado "más flojas" para tener una tutoría con ellas.</p>

        <div class="alert alert-dark border-0 rounded-4 mt-5 p-4 shadow-sm bg-dark text-white">
          <h6 class="fw-bold text-warning mb-2"><i class="bi bi-lightning-charge-fill text-warning me-2"></i>Reflexión Crítica: ¿Examen Encubierto?</h6>
          <p class="small text-white-50 mb-0">Tenemos que ser sinceros y críticos: este ejercicio nos ha parecido un examen tradicional encubierto. Resulta bastante contradictorio que el profesor haya insistido todo el curso en huir del modelo estandarizado y en que la teoría concuerde con la práctica, para luego ponernos un tipo test lleno de preguntas trampa. Aunque no cuente para nota, evaluaba los contenidos de una forma teórica y clásica, alejándose de esa evaluación formativa y libre que hemos defendido todos estos meses.</p>
        </div>
      </div>
    `,
  }
];

// ==========================================
// 2. BASE DE DATOS - EPISODIOS VLOG (30 CAPÍTULOS)
// ==========================================
const SOON_THUMB = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
function driveThumb(id) { return `https://drive.google.com/thumbnail?id=${id}&sz=w400`; }
function driveEmbed(id) { return `https://drive.google.com/file/d/${id}/preview`; }

const episodiosVlog = [
  // ---- TEMPORADA 1 (Caps 1-6) ----
  { cap: 1,  titulo: 'El caos del primer blog', thumb: driveThumb('15GCefoVnx0VX_V4ZnA-H1DIje8QV-2z4'), videoUrl: driveEmbed('15GCefoVnx0VX_V4ZnA-H1DIje8QV-2z4') },
  { cap: 2,  titulo: 'Clase de bordado al C', thumb: driveThumb('1BPfCf6NuNW6QX_C7CVCQ34bjt27oXVFj'), videoUrl: driveEmbed('1BPfCf6NuNW6QX_C7CVCQ34bjt27oXVFj') },
  { cap: 3,  titulo: 'Popurrí de marzo', thumb: driveThumb('1uCSCg8pSP05hwmwzoE35OZMfEWP_X4b8'), videoUrl: driveEmbed('1uCSCg8pSP05hwmwzoE35OZMfEWP_X4b8') },
  { cap: 4,  titulo: 'María Zambrano', thumb: driveThumb('1OLA0ConXPvMS3tSZKJCHbOdsIFEIroux'), videoUrl: driveEmbed('1OLA0ConXPvMS3tSZKJCHbOdsIFEIroux') },
  { cap: 5,  titulo: 'Ganar lleva el peso de evaluar', thumb: driveThumb('1UkzweoJ5y8YAHoerBMPEnAMqeU7KCSui'), videoUrl: driveEmbed('1UkzweoJ5y8YAHoerBMPEnAMqeU7KCSui') },
  { cap: 6,  titulo: 'A nuestros yo de 5 años', thumb: driveThumb('1SBhEPDYPxjxFjbYExGtuS8eiXfgtxMXi'), videoUrl: driveEmbed('1SBhEPDYPxjxFjbYExGtuS8eiXfgtxMXi') },
  
  // ---- TEMPORADA 2 (Caps 7-12) ----
  { cap: 7,  titulo: 'La silla caliente', thumb: driveThumb('1Vy_2kcJREqV2cH35vj1pe1KgXg8QJSm9'), videoUrl: driveEmbed('1Vy_2kcJREqV2cH35vj1pe1KgXg8QJSm9') },
  { cap: 8,  titulo: 'El pueblo gitano', thumb: driveThumb('1KTtx978AwuBk96efOH9TUIbyJAbSrbHA'), videoUrl: driveEmbed('1KTtx978AwuBk96efOH9TUIbyJAbSrbHA') },
  { cap: 9,  titulo: 'La silla caliente vol 2', thumb: driveThumb('1nTVdxwir_WadC2HNsjEwKM3bw1jvU8Ck'), videoUrl: driveEmbed('1nTVdxwir_WadC2HNsjEwKM3bw1jvU8Ck') },
  { cap: 10, titulo: 'Quién es alvarito?', thumb: driveThumb('1u6mAOfBUlt_BQtOp6r9K47_9qSV6qwGW'), videoUrl: driveEmbed('1u6mAOfBUlt_BQtOp6r9K47_9qSV6qwGW') },
  { cap: 11, titulo: 'Un "bichito"?', thumb: driveThumb('1ORsWs6Ba-5rcKov8sjVNNqhYZcTsTpoV'), videoUrl: driveEmbed('1ORsWs6Ba-5rcKov8sjVNNqhYZcTsTpoV') },
  { cap: 12, titulo: 'Post-tutoría', thumb: driveThumb('1JkqdzewmR77wwhGpIHEuc7qHI2eTQ3XE'), videoUrl: driveEmbed('1JkqdzewmR77wwhGpIHEuc7qHI2eTQ3XE') },
  
  // ---- TEMPORADA 3 (Caps 13-18) ----
  { cap: 13, titulo: 'Ojú la nubecita', thumb: driveThumb('16jej8Be8SpHfb7obtvVhHw6Aq9cqyS8B'), videoUrl: driveEmbed('16jej8Be8SpHfb7obtvVhHw6Aq9cqyS8B') },
  { cap: 14, titulo: 'El del examen', thumb: driveThumb('17bx0IxWMF2AahsZj6z-082nJtYulwVBM'), videoUrl: driveEmbed('17bx0IxWMF2AahsZj6z-082nJtYulwVBM') },
  { cap: 15, titulo: 'San Hilario de Poitiers', thumb: driveThumb('1HEhhMVS0jtbNIUMxr6id-VixxMY4khOp'), videoUrl: driveEmbed('1HEhhMVS0jtbNIUMxr6id-VixxMY4khOp') },
  { cap: 16, titulo: 'El de el voluntariado', thumb: driveThumb('1B4dBMUzbjDvp6Sl9BOdoLcK4hVnGQLfD'), videoUrl: driveEmbed('1B4dBMUzbjDvp6Sl9BOdoLcK4hVnGQLfD') },
  { cap: 17, titulo: 'Próximamente', thumb: SOON_THUMB, videoUrl: null },
  { cap: 18, titulo: 'Próximamente', thumb: SOON_THUMB, videoUrl: null }
];

// ==========================================
// 3. LÓGICA DE RENDERIZADO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const contenedorSesiones = document.getElementById('contenedor-sesiones');
  const modal = new bootstrap.Modal(document.getElementById('sesionModal'));

  // A) Agrupar las sesiones por semana
  const sesionesPorSemana = sesionesDelPDF.reduce((acc, sesion) => {
    if (!sesion) return acc;
    if (!acc[sesion.semana]) {
      acc[sesion.semana] = [];
    }
    acc[sesion.semana].push(sesion);
    return acc;
  }, {});

  // B) Inyectar Tarjetas de Sesiones organizadas por Semana
  for (const [semana, sesiones] of Object.entries(sesionesPorSemana)) {
    
    // Crear el encabezado de la semana (Línea de tiempo / Separador guay)
    const headerSemana = document.createElement('div');
    headerSemana.className = 'col-12 mt-5 mb-3';
    headerSemana.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <span class="badge bg-primary rounded-pill px-4 py-2 fs-6 shadow-sm text-uppercase tracking-wide">
          <i class="bi bi-calendar-week me-2"></i>${semana}
        </span>
        <div class="flex-grow-1 border-bottom border-2 border-primary opacity-25"></div>
      </div>
    `;
    contenedorSesiones.appendChild(headerSemana);

    // Añadir las tarjetas de esa semana
    sesiones.forEach(sesion => {
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
  }

  // C) Inyectar Vlogs en Temporadas (6 capítulos por Temporada en un Grid responsive)
  const containerT1 = document.getElementById('vlog-t1-container');
  const containerT2 = document.getElementById('vlog-t2-container');
  const containerT3 = document.getElementById('vlog-t3-container');

  episodiosVlog.forEach((ep, index) => {
    const div = document.createElement('div');
    div.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    
    const hasVideo = ep.videoUrl && ep.videoUrl.trim() !== '';
    const safeTitle = ep.titulo.replace(/"/g, '&quot;');
    div.innerHTML = `
      <div class="vlog-card shadow-sm ${hasVideo ? '' : 'opacity-50'}"
           style="${hasVideo ? 'cursor:pointer;' : 'cursor:default;'}"
           ${hasVideo ? `data-video-url="${ep.videoUrl}" data-video-titulo="${safeTitle}" data-video-cap="${ep.cap}"` : ''}>
        <div class="vlog-thumbnail">
          <img src="${ep.thumb}" alt="${safeTitle}" onerror="this.src='${SOON_THUMB}'">
          <div class="play-btn-overlay">
            <i class="bi ${hasVideo ? 'bi-play-circle-fill' : 'bi-clock-fill'}"
               style="${hasVideo ? '' : 'font-size:2rem;opacity:0.5;'}"></i>
          </div>
        </div>
        <div class="p-3">
          <div class="d-flex justify-content-between small text-white-50 mb-1">
            <span class="fw-bold text-danger">Capítulo ${ep.cap}</span>
            <span>${hasVideo ? '▶ Ver vídeo' : 'Próximamente'}</span>
          </div>
          <h6 class="fw-bold mb-0 text-white fs-6">${ep.titulo}</h6>
        </div>
      </div>`;

    // Lógica para repartir los capítulos en bloques de 6
    if (index < 6) {
      containerT1.appendChild(div);
    } else if (index < 12) {
      containerT2.appendChild(div);
    } else {
      containerT3.appendChild(div);
    }
  });

  // Delegated click listener para los vlog-cards (evita problemas con comillas en títulos)
  [containerT1, containerT2, containerT3].forEach(container => {
    container.addEventListener('click', e => {
      const card = e.target.closest('[data-video-url]');
      if (card) {
        const url   = card.dataset.videoUrl;
        const titulo = card.dataset.videoTitulo;
        const cap   = parseInt(card.dataset.videoCap, 10);
        abrirVlog(url, titulo, cap);
      }
    });
  });

  // D) Función para abrir la sesión en el Modal
  window.abrirSesion = function(id) {
    const sesion = sesionesDelPDF.find(s => s.id === id);
    if(sesion) {
      document.getElementById('modalTitulo').textContent = `Sesión ${sesion.id}: ${sesion.titulo}`;
      
      document.getElementById('modalBadges').innerHTML = `
        <span class="badge bg-primary px-3 py-2 rounded-pill"><i class="bi bi-tag me-1"></i>${sesion.semana}</span>
        <span class="badge bg-success px-3 py-2 rounded-pill"><i class="bi bi-calendar-event me-1"></i>${sesion.fecha}</span>
      `;
      
      // Renderizar apuntes: bloques HTML se insertan tal cual; texto plano se convierte en párrafos
      const apuntesEl = document.getElementById('modalApuntes');
      const apuntesHtml = sesion.apuntes
        .split(/\n\n+/)
        .map(block => block.trim())
        .filter(block => block)
        .map(block => block.startsWith('<') ? block : `<p class="mb-2 lh-lg">${block.replace(/\n/g, '<br>')}</p>`)
        .join('');
      apuntesEl.innerHTML = apuntesHtml;
      // Inyectar iframes de YouTube desde placeholders (createElement evita el bloqueo de innerHTML)
      apuntesEl.querySelectorAll('[data-youtube-src]').forEach(el => {
        const iframe = document.createElement('iframe');
        iframe.src = el.dataset.youtubeSrc;
        iframe.title = el.dataset.youtubeTitle || 'Vídeo';
        iframe.className = 'w-100 d-block';
        iframe.style.cssText = 'aspect-ratio: 16/9; border: none;';
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        el.appendChild(iframe);
      });
      
      // Control de Multimedia Inteligente (Fotos y Vídeos dinámicos)
      const multimediaContainer = document.getElementById('modalMultimedia');
      multimediaContainer.innerHTML = ''; // Limpiamos lo que hubiera antes

      // 1. Añadir Fotos si existen
      if (sesion.fotos && sesion.fotos.length > 0) {
        sesion.fotos.forEach(foto => {
          if(foto && foto.trim() !== "") {
            multimediaContainer.innerHTML += `
              <div class="col-12 col-md-6 mb-3">
                <div class="media-box" style="cursor:zoom-in;" onclick="abrirFoto('${foto}')">
                  <img src="${foto}" alt="Foto de la sesión" class="img-fluid rounded shadow-sm">
                </div>
              </div>`;
          }
        });
      }

      // 2. Añadir Videos si existen (Diferenciando YouTube de Videos Locales)
      if (sesion.videos && sesion.videos.length > 0) {
        sesion.videos.forEach(video => {
          if(video && video.trim() !== "") {
            // Si es un vídeo de YouTube, usamos el iframe estándar
            if (video.includes("youtube.com") || video.includes("youtu.be")) {
              multimediaContainer.innerHTML += `
                <div class="col-12 col-md-6 mb-3">
                  <div class="media-box">
                    <iframe src="${video}" frameborder="0" allowfullscreen class="w-100 rounded shadow-sm" style="min-height: 250px;"></iframe>
                  </div>
                </div>`;
            } else {
              // Si es un vídeo local (.mp4), usamos la etiqueta HTML5 <video> SIN autoplay
              multimediaContainer.innerHTML += `
                <div class="col-12 col-md-6 mb-3">
                  <div class="media-box bg-black rounded shadow-sm overflow-hidden d-flex align-items-center" style="min-height: 250px;">
                    <video controls class="w-100 h-100">
                      <source src="${video}" type="video/mp4">
                      Tu navegador no soporta la reproducción de vídeo.
                    </video>
                  </div>
                </div>`;
            }
          }
        });
      }
      
      modal.show();
    }
  };

  // E) Función para hacer zoom a las fotos (Lightbox)
  window.abrirFoto = function(src) {
    const modalImg = document.createElement("div");
    modalImg.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;backdrop-filter:blur(8px);";
    modalImg.innerHTML = `<img src="${src}" class="img-fluid rounded-4 shadow-lg border border-secondary" style="max-width:90vw;max-height:90vh;">`;
    modalImg.onclick = () => modalImg.remove();
    document.body.appendChild(modalImg);
  };

  // F) Modal para reproducir vídeos del Vlog
  window.abrirVlog = function(videoUrl, titulo, cap) {
    const prev = document.getElementById('vlogPlayerModal');
    if (prev) prev.remove();

    const modalEl = document.createElement('div');
    modalEl.id = 'vlogPlayerModal';
    modalEl.className = 'modal fade';
    modalEl.tabIndex = -1;
    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content border-0 shadow-lg rounded-4 bg-dark">
          <div class="modal-header border-0 py-3 px-4 bg-dark">
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-danger px-3 py-2 rounded-pill fs-6">Cap. ${cap}</span>
              <h5 class="modal-title fw-bold text-white mb-0">${titulo}</h5>
            </div>
            <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-0 rounded-bottom-4 overflow-hidden">
            <div id="vlog-iframe-container" style="aspect-ratio:16/9; background:#000;"></div>
          </div>
        </div>
      </div>`;

    document.body.appendChild(modalEl);
    const vlogModal = new bootstrap.Modal(modalEl);
    vlogModal.show();

    // Inyectar iframe tras abrir el modal (evita bloqueo de innerHTML)
    modalEl.addEventListener('shown.bs.modal', function() {
      const container = document.getElementById('vlog-iframe-container');
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      iframe.className = 'w-100 d-block';
      iframe.style.cssText = 'border:none; min-height:300px; height:100%;';
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      container.appendChild(iframe);
    });

    // Parar el vídeo al cerrar
    modalEl.addEventListener('hidden.bs.modal', function() {
      document.getElementById('vlog-iframe-container').innerHTML = '';
      modalEl.remove();
    });
  };
  // Función para activar/desactivar el modo Tráiler Cinematográfico
// Función para activar/desactivar el modo Tráiler Cinematográfico con Pantalla Completa
// Función para activar/desactivar el modo Tráiler Cinematográfico a prueba de iOS
window.toggleTrailer = function() {
  const section = document.getElementById('vlog-section');
  const video = document.getElementById('bg-trailer');
  const btn = document.getElementById('btn-trailer');
  const headerText = document.getElementById('vlog-text-header');

  if (!section || !video) return;

  section.classList.toggle('trailer-active');

  if (section.classList.contains('trailer-active')) {
    // EL TRÁILER SE ABRE
    video.muted = false;       
    video.currentTime = 0;     
    btn.innerHTML = '<i class="bi bi-x-circle-fill me-2"></i>Volver a la Serie';
    btn.classList.replace('btn-danger', 'btn-light');
    headerText.style.opacity = '0'; 

    // Intentamos Fullscreen de forma segura (con bloque try-catch para que no rompa iOS)
    try {
      if (section.requestFullscreen) {
        section.requestFullscreen();
      } else if (section.webkitRequestFullscreen) {
        section.webkitRequestFullscreen();
      }
    } catch (e) {
      console.log("Este dispositivo no soporta Fullscreen nativo, pero el vídeo funcionará.");
    }

  } else {
    // VOLVEMOS A LA WEB NORMAL
    video.muted = true;        
    btn.innerHTML = '<i class="bi bi-play-circle-fill me-2"></i>Ver Tráiler';
    btn.classList.replace('btn-light', 'btn-danger');
    headerText.style.opacity = '1';

    // Salimos de Fullscreen de forma segura
    try {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } catch (e) {
      console.log("Salida de fullscreen controlada.");
    }
  }
};
});