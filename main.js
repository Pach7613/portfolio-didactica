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
    apuntes: `Hoy ha sido nuestro primer día de Didáctica General con el profesor Carlos Guirado. Nos ha presentado una asignatura con bastante peso, concretamente 9 créditos, y nos ha explicado las dos opciones de itinerario: la Opción A, basada en la evaluación continua, el trabajo diario, la asistencia y la creación de este portfolio; y la Opción B, para quienes prefieran jugársela al 100% en un examen final. Evidentemente, nosotros hemos apostado por la A.

Carlos nos ha dejado claro que la clase debe ser un espacio seguro. Los pilares fundamentales van a ser el respeto, un enfoque hacia la diversidad y la transformación social, y sobre todo, la confianza. El aula es un lugar para equivocarse y aprender de los errores, donde el profesor actuará como un guía que nos acompañará en el proceso.

En cuanto a la metodología, va a ser muy dinámica: trabajaremos por proyectos (ABP), usaremos una cuenta de TikTok grupal, haremos asambleas y alguna salida fuera del aula. Un detalle importante es que se permite el uso ético de la IA, pero el plagio o cualquier falta de respeto supondrán el suspenso directo.

Sobre la nota, se divide al 50%: la mitad son los trabajos y el portfolio, y la otra mitad valora nuestro proceso diario y la asamblea final. No sirve de nada entregar un trabajo perfecto al final si no se ha visto la evolución. Además, la evaluación será muy reflexiva, incluyendo autoevaluación y coevaluación.

Para terminar la sesión, formamos los equipos de trabajo. La regla para repartir los roles (Coordinación, Secretaría, Portavoz y Material) era muy curiosa: cada uno debía elegir el rol que peor se le da para así obligarse a mejorar. Tras debatir, así nació oficialmente nuestro grupo: Glori, Pacheco, Joselu y Nathalie.`,
    fotos: [
      ("./img/clase.png"),
      ("./img/img.jpg")
    ],
    videos: []
  },

  // ------------------ SESIÓN 2 ------------------
  {
    id: 2,
    semana: "Primera Semana",
    fecha: "19/02/2026",
    titulo: "Vínculos, TikTok y Asignación de Roles",
    apuntes: `Hoy tuvimos nuestra primera clase en grupos reducidos. Empezamos en asamblea leyendo un texto de Donna Haraway, la primera de las "Cuestiones Previas" para trabajar por Proyectos de Investigación. La lectura nos hizo reflexionar sobre la importancia de crear vínculos reales y profundos desde el primer día, no solo saber cómo nos llamamos. El aula debe ser un "cerebro social" basado en la confianza, el diálogo y el respeto mutuo, rompiendo con la idea tradicional de escuela.

Para poner esto en práctica, dedicamos un rato a presentarnos todos a fondo, incluido el profesor. Después, Carlos nos sorprendió pidiéndonos propuestas para la excursión que haremos más adelante; nos gustó mucho este detalle de darnos voz y voto, ya que normalmente los profesores imponen las salidas sin darnos opción.

También arrancamos oficialmente con la cuenta de TikTok de la clase. Nosotros, los Profequerones, nos ofrecimos voluntarios para gestionarla y subir los vídeos de esta primera semana. Glori y Pacheco se encargaron de crearla y mandarle las claves a Carlos.

Por último, asignamos nuestros roles definitivos en el grupo. Como acordamos el primer día, elegimos lo que peor se nos da para forzarnos a mejorar:
- Coordinación (Nathalie): Para aprender a delegar tareas y confiar en el equipo, ya que tiende a asumir todo el trabajo ella sola.
- Secretario (Joselu): Suele trabajar bien, pero a veces se distrae. Este rol le obligará a mantener la atención y anotar todo.
- Portavoz (Pacheco): No le gusta nada hablar en público, así que esto le servirá para ganar seguridad y perder el miedo.
- Responsable de Material (Glori): Aunque toma buenos apuntes, es bastante despistada. Esto le ayudará a ser más atenta a los detalles y organizada.`,
    fotos: [
      ("./img/img1.jpg"),
      ("./img/img2.jpg")
    ],
    videos: []
  },

  // ------------------ SESIÓN 3 ------------------
  {
    id: 3,
    semana: "Segunda Semana",
    fecha: "24/02/2026",
    titulo: "Modelos, el Aula como Cerebro y Escape Room",
    apuntes: `Empezamos la sesión analizando los diferentes planos de la realidad y cómo la Didáctica se sitúa a medio camino entre el modelo repetidor y el transformador. Surgió un debate muy interesante en clase: ¿educamos para repetir o para transformar? Concluimos que, aunque el cerebro necesita estímulos nuevos para aprender, cierta base de memorización y repetición sigue siendo necesaria dependiendo de la asignatura.

Tras esto, Carlos nos introdujo el Proyecto Roma. El reto era organizar el aula basándonos en el Proceso Lógico de Pensamiento, funcionando como si fuera un cerebro. Diseñamos un aula en forma de "U", como si de una grada se tratase, para que todos nos veamos las caras. La dividimos en zonas estratégicas:
- Afectividad y Normas: Un tablón de normas creado por todos desde el primer día.
- Movimiento y Autonomía: Una alfombra central para dinámicas, mesas redondas para fomentar la autonomía social (trabajo en equipo) y sillas auxiliares a la izquierda.
- Lenguaje y Cognición: Estanterías con libros a elegir, diarios de clase para los últimos 5 minutos y un espacio para un concurso matemático semanal.
Además, pautamos los tiempos: 40 min de clase, 5 de descanso y 15 de repaso.

<div class="row my-5">
  <div class="col-12">
    <div class="minecraft-work-callout p-4 p-md-5 rounded-4 shadow-sm text-center text-md-start">
      <div class="d-flex flex-column flex-md-row align-items-center gap-4 mb-4">
        <i class="bi bi-box-fill text-success" style="font-size: 3rem;"></i>
        <div>
          <h4 class="fw-bold text-white mb-2">Proyecto Especial: El Aula-Cerebro en Minecraft</h4>
          <p class="text-white-50 mb-0 lh-lg">Llevamos nuestra planificación teórica a la práctica diseñando nuestra aula ideal dentro de Minecraft. Creamos un entorno visual que refleja las cuatro dimensiones del Proceso Lógico de Pensamiento, funcionando como un 'cerebro social'.</p>
        </div>
      </div>
      
      <div class="media-box rounded-4 overflow-hidden border border-success border-opacity-25 shadow">
        <video controls class="w-100 d-block">
          <source src="./img/Minecraft.mp4" type="video/mp4">
          Tu navegador no soporta el vídeo.
        </video>
        
        </div>
      
    </div>
  </div>
</div>
Después de nombrar a teóricos como Vigotsky o Bruner, consensuamos las normas de convivencia reales de nuestra clase: levantar la mano, respeto mutuo, entrar con buen humor y poder comer siempre que dejemos todo limpio.

La segunda mitad de la clase fue pura acción: ¡un Escape Room Didáctico por el Día de Andalucía! Nos unimos al grupo "Los Silbones" y diseñamos una propuesta basada en una gymkana por provincias, utilizando portátiles (competencia digital) y fomentando la inclusión cultural bajo el lema de que "todos somos andaluces". 

Gloria formó parte de la Comisión Evaluadora. Las valoraciones fueron totalmente objetivas y sinceras, puntuando como "Pobre" a los grupos que carecieron de coherencia o inclusividad real. Al final, nuestro esfuerzo se vio recompensado y quedamos en un merecidísimo 2º puesto.

<div class="row my-5 g-4">
  <div class="col-12 col-md-6">
    <a href="https://www.tiktok.com/@1dprimariaa_/video/7610893785320443158?is_from_webapp=1&sender_device=pc&web_id=7611210260893091350" target="_blank" class="tiktok-link-button card h-100 p-4 rounded-4 shadow-sm text-center align-items-center justify-content-center flex-column d-flex gap-2 text-decoration-none">
      <i class="bi bi-tiktok fs-1"></i>
      <span class="fw-bold fs-6">TikTok: Ping-Pong 1</span>
      <span class="text-muted small">Ver TikTok en formato "Ping-pong" con Nathalie entrevistando a Mario</span>
    </a>
  </div>
  <div class="col-12 col-md-6">
    <a href="https://www.tiktok.com/@1dprimariaa_/video/7611093612033543446?is_from_webapp=1&sender_device=pc&web_id=7611210260893091350" target="_blank" class="tiktok-link-button card h-100 p-4 rounded-4 shadow-sm text-center align-items-center justify-content-center flex-column d-flex gap-2 text-decoration-none">
      <i class="bi bi-tiktok fs-1"></i>
      <span class="fw-bold fs-6">TikTok: Ping-Pong 2</span>
      <span class="text-muted small">Ver TikTok en formato "Ping-pong" con Pacheco entrevistando a Joselu</span>
    </a>
  </div>
</div>
Cerramos el día grabando nuestro primer TikTok como encargados de la semana. Para la próxima clase, tenemos el encargo de investigar a un autor andaluz.`,
    fotos: [
      "./img/img4.png", // Mantén las capturas
      "./img/img8.png",
      "./img/img6.png",
      "./img/img7.png"
    ],
    videos: [] // Vacío, ya que el vídeo de Minecraft está arriba y los TikToks también.
  },

  // ------------------ SESIÓN 4 ------------------
  {
    id: 4,
    semana: "Segunda Semana",
    fecha: "26/02/2026",
    titulo: "María Zambrano, Sueños y Encuentro con la Clase C",
    apuntes: `Siguiendo con la temática del Día de Andalucía, hoy en los grupos reducidos tocó investigar sobre una figura andaluza importante. Nosotros elegimos a la veleña María Zambrano, la primera mujer filósofa en lengua española y una intelectual clave de nuestra historia. 

Nos centramos en un fragmento de su libro "Los Sueños y El Tiempo". Nos pareció fascinante cómo distingue dos tipos de sueños: los de la "psique" (pasivos, desordenados y dominados por el deseo) y los de la "persona". Estos últimos son muy especiales porque, aunque tampoco actuamos voluntariamente en ellos, nos presentan de golpe descubrimientos o soluciones a dilemas de nuestra vida real. Tienen una trascendencia que nos ayuda a comprendernos.

Para poner nuestras investigaciones en común, Carlos propuso una dinámica de rotación: dos miembros del grupo se quedaban en la mesa explicando a Zambrano, mientras los otros dos rotábamos por el resto de grupos para aprender sobre sus autores. Lamentablemente, solo nos dio tiempo a escuchar al grupo de Mario, porque teníamos una cita importante fuera del aula.

¡Nos fuimos al hall de la facultad para reunirnos con la clase de 1ºC! El objetivo principal de este encuentro era invitarles a participar juntos en una actividad de "narrativa textil" para la próxima semana, con motivo del Día de la Mujer, en la que reflexionaremos sobre la mujer más importante de nuestras vidas. Aceptaron la invitación sin dudarlo.

Para romper el hielo y conocernos mejor, hicimos varios juegos conjuntos: simulamos el sonido de una tormenta, hicimos interpretaciones creativas usando el palo de una escoba, y terminamos con un reto de coordinación donde grupos de cinco teníamos que bajar el palo hasta el suelo usando solo dos dedos. Fue una experiencia preciosa. Salir de las cuatro paredes del aula a las que estamos acostumbrados y convivir con otra clase es un soplo de aire fresco que enriquece un montón la asignatura.`,
    fotos: [],
    videos: [
      "./img/video1.mp4", 
      "./img/video2.mp4",
      "./img/video3.mp4",
      "./img/video4.mp4"
    ]
  },
  // ------------------ SESIÓN 5 ------------------
  {
    id: 5,
    semana: "Tercera Semana",
    fecha: "03/03/2026",
    titulo: "Proceso Lógico de Pensamiento y el Poder de la Narrativa Textil",
    apuntes: `Hoy empezamos la clase enfrentándonos a un reto que, siendo sinceros, nos resultó bastante complicado al principio: ubicar una serie de preguntas sobre la Didáctica dentro de las cuatro dimensiones del Proceso Lógico de Pensamiento (Lenguaje, Cognición/Metacognición, Afectividad y Movimiento). 

Teníamos que coger 17 dudas como "¿Para qué sirve la didáctica?" o "¿Qué mundo tendríamos si no existiera?" y justificar su dimensión. Por ejemplo, clasificamos "¿Cómo hacer que se valore?" en Afectividad porque destaca la importancia de los valores, y "¿Cómo extrapolar para nuestra vida?" en Movimiento porque implica acción y aplicación práctica. Nos costó bastante porque muchas preguntas parecían encajar en varias dimensiones a la vez y sentimos que nuestras justificaciones quedaron algo escuetas, pero fue un paso necesario para arrancar con nuestro proyecto final.

Después, la clase dio un giro precioso. Carlos nos hizo una presentación sobre la "Narrativa Textil". Aprendimos que coser es mucho más que juntar telas; metafóricamente, cada hilo representa una voz, una historia o una vivencia. Nos explicó sus orígenes como práctica sociopolítica (incluso ayudando a reparar conflictos sociales en Nariño, tejiendo solidaridades) y cómo el arte feminista lo ha usado históricamente para narrar experiencias silenciadas.

El objetivo de la actividad que haremos el jueves en el hall con la clase de 1ºC es, precisamente, romper el estereotipo de la "mujer cosiendo sola en casa" para convertirlo en una narrativa colectiva. Nos encantó el poema "Estoy hecha de retazos" de Cris Pizzimenti, que compara nuestra alma con un tejido formado por pedacitos de las personas y experiencias que nos rodean. Además, ver los propios bordados de Carlos (dedicados a su madre, a su perro, a un amigo...) hizo la explicación súper cercana.

Terminamos la sesión aprendiendo a enhebrar la aguja y dando las primeras puntadas de nuestro bordado, que irá dedicado a la mujer más importante de nuestra vida. Nos vamos con la mente cambiada: hemos dejado de ver la costura como un simple pasatiempo para entenderla como una poderosa forma de expresión artística e histórica.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 6 ------------------
  {
    id: 6,
    semana: "Tercera Semana",
    fecha: "05/03/2026",
    titulo: "Narrativa Textil en el Hall: Tejiendo Redes con la Clase C",
    apuntes: `Hoy hemos vivido una de las experiencias más bonitas y dinámicas del curso: llevamos la narrativa textil al hall de la facultad para compartirla con la clase de 1ºC. Nos organizamos en grupos mixtos de diez personas y nos fuimos distribuyendo por donde quisimos (cerca de la cafetería, la pecera, la biblioteca...). 

En cuestión de minutos, transformamos un espacio de tránsito en un gran taller colaborativo lleno de libertad. Nuestra misión principal era hacer de "guías" y explicarles a los compañeros de 1ºC en qué consistía la narrativa textil, ya que nosotros lo habíamos trabajado en la sesión anterior. Mientras bordábamos a la mujer más importante de nuestras vidas, el ambiente se llenó de intercambio de ideas, conversaciones enriquecedoras y momentos de reflexión.

Fue increíble observar los diferentes procesos: algunas compañeras, como Leonor, traían bordados súper avanzados que sirvieron de inspiración para el resto. Otros grupos decidieron unir sus telas para crear una pieza colectiva. Además, fue muy potente ver cómo se rompían en directo los estereotipos tradicionales asociados a la costura, demostrando que la creatividad y la expresión de emociones no tienen género.

Hasta tuvimos la visita de los encargados de grabar el TikTok de la clase para inmortalizar el momento. Como reflexión final, salir de las cuatro paredes del aula, tener la autonomía de sentarnos donde quisiéramos y relacionarnos con personas fuera de nuestro entorno habitual ha hecho que el aprendizaje sea muchísimo más significativo. Hemos tejido, literalmente, nuevas redes de convivencia.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 7 ------------------
  {
    id: 7,
    semana: "Cuarta Semana",
    fecha: "10/03/2026",
    titulo: "Planificación, Vigotsky y el Grito de Ana Orantes",
    apuntes: `Comenzamos la asamblea hablando de Vigotsky y de una idea que nos va a acompañar todo el curso: el aprendizaje es un proceso social. Para aprender, pasamos por una "doble formación": primero de forma interpersonal (con la ayuda de otros, como cuando te enseñan a caminar) y luego intrapersonal (cuando interiorizas el aprendizaje y caminas solo). 

Con esta idea en mente, empezamos a planificar oficialmente nuestro Proyecto Final, que nos llevará unas 4 o 5 semanas. Debemos dar respuesta a las 17 preguntas del día anterior utilizando las cuatro dimensiones del Proceso Lógico de Pensamiento. Decidimos usar la metáfora de "un viaje":
- Percepción: Usaremos los sentidos (oído para debatir, vista para documentarnos).
- Atención y Memoria: Para procesar ideas sin distracciones (adiós al móvil) y retener los fallos para no repetirlos.
- Organización: Trabajaremos en mesas redondas para vernos las caras, idealmente con luz natural en horario de 07:00 a 19:00h para mantener el cuerpo activo.

Tras el descanso, la clase dio un giro radical y profundamente emocional. Vimos la histórica entrevista de Ana Orantes en Canal Sur. Se nos encogió el corazón y nos llenamos de rabia al escuchar con qué crudeza y tranquilidad relataba 40 años de maltrato físico y psicológico continuo. Su testimonio destapó el inmenso machismo de la época, donde la sociedad, la familia y hasta las instituciones miraban hacia otro lado obligando a las mujeres a callar por el "qué dirán". 
Lamentablemente, Ana fue asesinada 13 días después de esta entrevista, pero su muerte marcó un antes y un después en la conciencia social y en la normativa española sobre la Violencia de Género. Tuvimos un debate muy intenso sobre el silencio cómplice, el clasismo y la urgencia de educar desde Infantil en el respeto y el consentimiento (nadie puede tocar el cuerpo de otra persona).
<a href="https://www.youtube.com/watch?v=72Md_DypqRE&t=151s" target="_blank" class="fw-bold text-danger"><i class="bi bi-youtube me-1"></i> Ver entrevista completa de Ana Orantes</a>

Para cerrar, enlazando con la visibilidad femenina, Carlos nos pidió investigar a mujeres que fueron borradas de la historia o de las artes. Nosotros (unidos al grupo de los Silbones) expusimos el caso de Emily Brontë, quien tuvo que publicar su obra maestra "Cumbres Borrascosas" bajo el seudónimo masculino de Ellis Bell para que la tomaran en serio. Otros compañeros recordaron casos muy duros como el de Rosalind Franklin (a quien le robaron el mérito del ADN) o Marie Curie. 

Como reflexión final, la entrevista de Ana Orantes debería ser obligatoria en todos los institutos. El silencio mata, y como sociedad y futuros docentes tenemos la responsabilidad de no mirar hacia otro lado. Dar voz a las mujeres silenciadas en el pasado es el primer paso para construir aulas más justas en el futuro.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 8 ------------------
  {
    id: 8,
    semana: "Cuarta Semana",
    fecha: "12/03/2026",
    titulo: "La Emoción del Hilo: Presentación de las Narrativas Textiles",
    apuntes: `El día de hoy ha sido, sin duda, uno de los más emotivos del curso. Nos hemos reunido en el grupo reducido para reflexionar y presentar el resultado de nuestras narrativas textiles. La gran mayoría de la clase (incluido Carlos) hemos coincidido en dedicar este trabajo a nuestras madres o abuelas, mujeres valientes que han sido pilares fundamentales en nuestro desarrollo. 

Se vivieron momentos de mucha emoción donde incluso hubo quienes derramaron lágrimas al contar cómo esas mujeres dejaron atrás sus sueños para verles crecer, y otros que se emocionaron profundamente solo de escuchar los testimonios ajenos. Estas sesiones nos enseñan la importancia de ser agradecidos y de saber expresar nuestros sentimientos públicamente, una cualidad vital para nuestro futuro como docentes.

A continuación, compartimos las reflexiones individuales de nuestro grupo:

Gloria: "Le dediqué mi bordado a mi madre. Cosí la palabra 'MAMÁ' junto a flores (porque hay que cuidarla para que no se marchite, igual que ella me cuidó a mí) y corazones. En el centro añadí unas mariposas de una tela que ella misma me dio cuando vio que mi dibujo original no se borraba. Esas mariposas la representan: una mujer fuerte, que a sus 50 años se sacó el FP de Educación Infantil, que me crio trabajando en dos sitios a la vez y que siempre está ahí para salvarme, incluso de entregar un bordado feo. Se lo debo todo."

Pacheco: "Yo hice una 'M' por mi madre, Mercedes. Le debo la vida y ha sido mi mayor apoyo en los momentos más difíciles, como cuando sufrí bullying en el colegio. Durante la clase me sentí un poco extraño porque muchos compañeros lloraban al hablar de sus familiares, y yo hablé de ella desde la alegría. Me sentí algo insensible en el momento, pero luego comprendí que estaba simplemente feliz de saber que está a mi lado. Fue una clase muy bonita que demostró cuánto amor tenemos por nuestras madres."

Joselu: "Al igual que Pacheco, bordé una 'M' dedicada a mi madre. Ella es quien me ha acompañado en toda mi etapa educativa y me ha ayudado con mis tareas y proyectos desde pequeño. Además, tiene una gran afición por la costura, así que esta actividad me pareció la excusa perfecta y el homenaje ideal para agradecerle todo lo que me ha enseñado y apoyado siempre."

Nathalie: "Mi narrativa textil va para mi abuela materna, Reyna del Rosario. Ella crio a mi madre para que fuera una mujer fuerte e independiente, y gracias a eso hoy estoy yo aquí. Ella es mi referente. A la salida de clase comentamos que nos habíamos quedado con ganas de contar más anécdotas, recuerdos grabados a cincel que nos han convertido en quienes somos. Espero recuperar pronto el tiempo perdido con mi abuela y poder viajar juntas. Esta dinámica es perfecta para nuestro futuro en las aulas: nos ayuda a expresar emociones y a entender que las verdaderas heroínas del Día de la Mujer muchas veces viven bajo nuestro propio techo."`,
    fotos: [
      "ruta_de_foto_bordado_gloria.jpg", 
      "ruta_de_foto_bordado_pacheco.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 9 ------------------
  {
    id: 9,
    semana: "Quinta Semana",
    fecha: "17/03/2026",
    titulo: "Planificación del Tiempo y el Abuso de Poder en las Aulas",
    apuntes: `Comenzamos la sesión aterrizando nuestra planificación del proyecto, centrándonos en la organización del tiempo. Acordamos trabajar siempre en la franja de 07:00 a 19:00 para aprovechar la luz natural, que activa mucho mejor el cuerpo y la mente. Como en clase solo disponemos de una hora efectiva semanal para el portfolio, hemos decidido usar un planificador y organizarnos para quedar fuera del horario lectivo (desde después de Semana Santa hasta mediados de mayo), trabajando en tramos cortos para no saturarnos y rendir bien.

Después, la clase tomó un tono mucho más serio al debatir sobre el abuso de poder por parte del profesorado, basándonos en el libro "Enseñar a transgredir" de Bell Hooks. Hablamos de cómo educar también significa poner límites. Surgió una reflexión que nos marcó profundamente: "El silencio nunca es neutral, siempre protege a alguien y no siempre a quien lo necesita".

Debatimos sobre lo repugnante y peligroso que es que existan docentes que generen miedo, dependencia o que normalicen comentarios inapropiados. Lo que más nos indigna es la complicidad de algunas instituciones (como se vio con casos reales de ciertos catedráticos), que muchas veces prefieren mirar hacia otro lado y silenciar a las víctimas para proteger el prestigio del centro. Como futuros docentes, tenemos la inmensa responsabilidad de no permitir esto jamás y garantizar un trato basado en la igualdad y el respeto absoluto.

Para terminar con un enfoque más positivo, Carlos nos habló sobre la evaluación. Nos recordó que una rúbrica cerrada no siempre puede medir la singularidad y creatividad de cada alumno. Además, nos dio una premisa que nos motiva muchísimo: prefiere trabajos de calidad antes que cantidad o "relleno", y lo mejor de todo es que todos partimos ya con un sobresaliente en la asignatura; nuestro único trabajo ahora es mantenerlo a base de compromiso diario.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 10 ------------------
  {
    id: 10,
    semana: "Quinta Semana",
    fecha: "19/03/2026",
    titulo: "Planificación del Tiempo y el Abuso de Poder en las Aulas",
    apuntes: `Aun sin hacer`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 11 ------------------
  {
    id: 11,
    semana: "Sexta Semana",
    fecha: "25/03/2026",
    titulo: "Planificación del Tiempo y el Abuso de Poder en las Aulas",
    apuntes: `Aun sin hacer`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 12 ------------------
  {
    id: 12,
    semana: "Sexta Semana",
    fecha: "26/03/2026",
    titulo: "Planificación del Tiempo y el Abuso de Poder en las Aulas",
    apuntes: `Aun sin hacer`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 13 ------------------
  {
    id: 13,
    semana: "Séptima Semana",
    fecha: "07/04/2026",
    titulo: "De la Escuela-Fábrica al Aprendizaje Vital y Role-Play de Evaluación",
    apuntes: `Hoy hemos hecho un viaje en el tiempo para entender cómo ha evolucionado la educación: pasando de un enfoque centrado en "enseñar" a uno centrado en "aprender". Empezamos diferenciando conceptos clave: la pedagogía es la teoría, mientras que la didáctica es la práctica en el aula. Del mismo modo, los objetivos son lo que el alumno debe "saber", pero las competencias son lo que "sabe hacer" con ese conocimiento en la vida real.

Estudiamos cómo entre los siglos XVIII y XX se diseñó un sistema educativo calcado al modelo de las fábricas: estandarización, separación por edades, asignaturas fragmentadas y un alumnado pasivo basado en la obediencia y la repetición. Por suerte, gracias a informes como los de la UNESCO, PISA o DeSeCo, y a las nuevas pedagogías (crítica, decolonial, feminista...), el modelo empezó a cuestionarse. Hoy buscamos un aprendizaje global, inclusivo y vital, donde el docente ya no es un simple transmisor, sino un guía, y el alumnado es el protagonista activo.

Para poner a prueba todo esto, especialmente el cambio hacia una evaluación formativa y continua (lejos del simple examen final), Carlos nos propuso un "Role-Play" de evaluación. Nos unimos a Mario, Josué y Natalia. Dividimos los roles: Nathalie, Glori y Pacheco éramos los alumnos, mientras que Joselu, Josué y Mario actuaban de maestros simulando la evaluación de una presentación sobre las emociones. 

Mientras otros grupos usaban sistemas tradicionales o de "caritas", nosotros apostamos por un enfoque integral: evaluamos el progreso durante el trabajo, usamos una rúbrica específica para la presentación final e incluimos la coevaluación entre compañeros. 

¿El resultado? ¡Ganamos la dinámica por ser el grupo que más métodos de evaluación diferentes y completos utilizó! El gran premio (y responsabilidad) es que nuestro equipo, junto con nuestros compañeros aliados, seremos la comisión oficial encargada de evaluar el resto de actividades de la asignatura junto al profesor en las próximas sesiones. 

Como reflexión final, esta clase nos ha dejado muy claro que la educación está viva y cambia según las necesidades de la sociedad. Atrás quedó el modelo de fábrica rígido; el futuro es de las competencias, la inclusión y el aprendizaje con sentido.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 14 ------------------
  {
    id: 14,
    semana: "Séptima Semana",
    fecha: "09/04/2026",
    titulo: "Vigotsky, Bruner y el Modelo Compensatorio Personal",
    apuntes: `Comenzamos la clase con una base teórica clave. Repasamos a Vigotsky y su idea de que el aprendizaje siempre pasa de lo interpersonal (colectivo, con ayuda de otros) a lo intrapersonal (individual, de forma autónoma), siendo el lenguaje el puente que crea nuestra realidad. También mencionamos a Das, que destaca la unión de la teoría y la práctica en el aprendizaje específico.

Pero el plato fuerte del día vino con la estrategia y el psicólogo Jerome Bruner. Carlos nos explicó la diferencia entre el modelo tradicional y el modelo compensatorio. En el tradicional, si se te da mal algo, te machacan con eso y el resto de tus capacidades sufren un déficit. En cambio, en el modelo compensatorio, el área en la que fallas puede ser equilibrada y apoyada por tus otras áreas fuertes. Siguiendo la metáfora de las tazas: si hay una taza vacía, abrimos camino con las demás para que el líquido se equilibre.

Para poner esto en práctica, Carlos nos pidió un ejercicio de introspección individual: elegir un "déficit" o algo que queramos mejorar, y analizar cómo las demás dimensiones del Proceso Lógico de Pensamiento pueden ayudarnos a compensarlo.

A continuación, detallamos el análisis de cada miembro del grupo:

Gloria: Expresar emociones y narrar historias (Lenguaje - Nominar)
"Considero que tengo un déficit al expresar historias o sentimientos, ya que me bloqueo con los detalles. Para compensarlo, usaré la Percepción y la Atención para fijarme en cómo hablan los demás, qué tono y gestos usan. También potenciaré la Lectura y el Lenguaje Musical, ya que leyendo o escuchando canciones de otros aprendo nuevas formas de narrar. A nivel de Organización del Tiempo, dedicaré 5 minutos diarios a escribir cómo ha sido mi día (Escritura) para practicar, y usaré la Planificación para hacerme esquemas mentales antes de hablar. Por último, la Autonomía Social será clave, apoyándome en mi entorno para adquirir nuevas vivencias."

Nathalie: Capacidad de concentración (Atención)
"Mi objetivo es poder concentrarme más de una hora sin colapsar ni estresarme. Para compensar esta falta de atención, usaré la Planificación dividiendo el tiempo por asignaturas y organizando mi espacio para dejar solo lo necesario en la mesa, evitando distracciones visuales. En cuanto al Lenguaje, escuchar música de fondo (Lenguaje Musical) o escribir mientras escucho (Escritura) me ayuda a anclar el foco. También es vital aplicar Normas: alejar el móvil y ponerme límites claros, además de descansar adecuadamente para que el cansancio no sea una excusa."

Pacheco: Evitar distracciones (Atención)
"En mi día a día me distraigo con facilidad. Para combatir esto, me apoyaré en la Organización del Tiempo (estudiar en ratos cortos para evitar la fatiga) y la Organización del Espacio (mesa totalmente limpia). Además, la Autonomía Física será mi gran aliada: hacer deporte o caminar antes de una clase difícil liberará tensión y me permitirá estar relajado. Por último, usaré la Autonomía Social pidiendo a mis compañeros que me avisen si ven que me quedo 'mirando a la nada', funcionando como mi alarma externa."

Joselu: Mantener la lectura prolongada (Lenguaje - Lectura)
"Mi déficit es que me cuesta mantener una lectura prolongada y concentrarme en el contenido. Para compensarlo, usaré la Planificación para elegir textos adecuados a mi nivel y no frustrarme, junto con la Organización del Tiempo (calcular cuánto leeré diariamente y pautar descansos mediante el Lenguaje Lógico-Matemático) y la Organización del Espacio (buscar un lugar calmado y bien iluminado). En cuanto a la Afectividad, me impondré Normas y horarios fijos, apoyándome en el Valor de la disciplina. Por último, aplicaré mi Autonomía Física desplazándome activamente a bibliotecas para buscar mis propias lecturas."`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 15 ------------------
  {
    id: 15,
    semana: "Octava Semana",
    fecha: "14/04/2026",
    titulo: "Dimensiones Educativas, Currículum Oculto y Evaluación del Día del Libro",
    apuntes: `Comenzamos la clase analizando los diferentes contextos en los que se desarrolla la Didáctica, desmontando la idea de que solo existe dentro de cuatro paredes. Carlos nos explicó tres dimensiones clave :
- Formal: La escuela tradicional. Cuenta con un diseño estructurado, normativa, competencias y un título final.
- No Formal: Actividades estructuradas pero fuera del sistema reglado (un seminario, jornadas de puertas abiertas).
- Informal: La vida cotidiana. Aquí el profesor hizo un apunte crucial: a menudo aprendemos más de situaciones espontáneas y vitales que de la enseñanza reglada.

Relacionado con esto, profundizamos en la diferencia entre el Currículum Explícito (lo que dicta la ley: objetivos, metodologías, evaluaciones) y el Currículum Oculto . Este último es todo lo que transmitimos sin darnos cuenta: nuestros valores, cómo organizamos las mesas o si mandamos callar a un alumno tras haber predicado sobre la libertad de expresión. La teoría siempre debe concordar con nuestras conductas.

Surgió entonces un debate muy reflexivo impulsado por Charles: "¿Puede haber didáctica formal sin aprendizaje?". Algunos compañeros como Mariam y Laura aportaron que, incluso en un día donde parece que no haces nada, estás aprendiendo de forma inconsciente. El aprendizaje no siempre es un contenido académico; la vida misma, incluso estar tirado mirando el móvil, te enseña tu propio "quehacer".

El momento emotivo del día lo puso Mariam, quien se había incorporado más tarde y quiso compartir su narrativa textil. Le dedicó el bordado a su madre e incluyó un muffin. Nos contó cómo su madre le cedía su comida diciendo que no tenía hambre, cuando la realidad es que no tenían dinero para más. Su historia nos recordó el inmenso sacrificio que hay detrás de que muchos estemos hoy en la universidad.

Para terminar, pasamos a la acción con nuestro papel como Comisión Evaluadora. Teníamos que diseñar los criterios para valorar las propuestas del resto de la clase para el Día del Libro y el Pueblo Gitano. Establecimos una rúbrica basada en:
1. Originalidad y creatividad.
2. Planificación realista del tiempo.
3. Fusión lógica entre el Día del Libro y la cultura gitana.
4. Coherencia con los objetivos marcados.
5. Inclusión real del pueblo gitano (evitando estereotipos y valorando si usaban cultura escrita, que es muy escasa).

Tras escuchar todas las presentaciones (de 3 a 5 minutos por grupo), deliberamos y dimos un feedback constructivo a cada equipo. El Grupo 4 se llevó el primer puesto y será el encargado de ejecutar su actividad el 23 de abril.

Como reflexión final, esta sesión nos ha abierto los ojos. Hemos comprendido que la educación no es neutra (siempre depende de políticas educativas) y que nuestro rol como evaluadores va mucho más allá de poner una nota: se trata de analizar, justificar y ayudar a mejorar a nuestros compañeros.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 16 ------------------
  {
    id: 16,
    semana: "Octava Semana",
    fecha: "16/04/2026",
    titulo: "Cartas a Nuestro 'Yo' de 5 Años: Un Viaje a la Infancia",
    apuntes: `Hoy hicimos una asamblea muy especial y significativa. La actividad consistía en compartir un relato o una carta dirigida a nuestro "yo" de 5 años. Fue un momento de escucha activa, muchísimo respeto y pura emoción. 

Pudimos conocer a nuestros compañeros desde su lado más vulnerable. Nos emocionó mucho escuchar a Sergio recordar con nostalgia sus tardes de fútbol, o a Elena, que no pudo contener las lágrimas al leer su carta. Los relatos de María y Natalia destacaron por el papel fundamental de sus madres, y el de Víctor nos cautivó por la profundidad de sus detalles. Escucharnos nos hizo darnos cuenta de que, aunque cada historia es única, compartimos muchas más emociones y miedos de los que pensamos.

A continuación, compartimos las cartas y reflexiones de nuestro grupo:

Gloria: "Hola Glorita. Gracias por ser una pequeña observadora; aunque te digan que estás en tu mundo, fijarte en los detalles te ayudará mucho. Gracias por jugar con la 'Pai' (mamá) a las cocinitas y no tener en cuenta sus gritos, porque también es su primera vez viviendo. Me encanta que no seas la 'niña buena' de la tele, que lleves tu mochila de Spiderman y que sepas que no hace falta que te rescate un príncipe azul para ser una superheroína. Gracias por cuidar de mamá cuando tiene migrañas y de papá cuando viene cansado del trabajo. Recuerda siempre la frase de papá: 'Si no pasasen cosas malas, no disfrutarías tanto las cosas buenas'. Escribir esto me ha hecho reconectar con mi niña interior y recordar que no debo perder nunca esa sensibilidad y curiosidad."

Pacheco: "Hola, pequeño Pachequín. Te escribo para darte las gracias por no rendirte cuando las cosas se pusieron feas en el colegio y sufriste bullying. Ese coraje es lo que me ha hecho ser quien soy hoy. Gracias por aprender a escuchar a mamá y entender que es tu mejor amiga. Sigue dedicándole tiempo a tus mascotas, porque cuando no estén los echarás muchísimo de menos. Y gracias por darle una oportunidad al deporte, aunque ahora te dé pereza, me ha cambiado la vida. Gracias por aguantar la incertidumbre de no saber qué hacer tras Bachillerato; hoy estoy rodeado de gente impresionante en la universidad gracias a que seguiste caminando."

Nathalie: "Hola Nathalie. Disfruta cada segundo con tu 'Abu' y tus tíos, porque dentro de unos años no podrás visitarlos tan a menudo. Deja de quejarte de sus sopas de verdura y sigue yendo a sus fiestas de pijamas. Sigue jugando al fútbol y haciendo gimnasia; te dejarán amistades preciosas. Y, sobre todo, dales muchos abrazos a tus padres y a tu hermana, porque ellos también están viviendo por primera vez y necesitan tu cariño. No te cargues los problemas del mundo a la espalda y no tengas miedo de expresar tus sentimientos. Gracias por mantener tu esencia bonita y valiente."

Joselu: "A mi 'yo' de 5 años le aconsejaría, simplemente, que fuera él mismo. Que hiciera lo que sintiese en cada momento porque todo error acaba siendo un aprendizaje. Le diría que se quitase esa vergüenza tonta por el 'qué dirán' y que viviera más tranquilo, sabiendo que siempre hay muchas opciones para un mismo camino, así que no hay que frustrarse si una puerta se cierra. Al final, me agradecería a mí mismo haber hecho todo lo que hice, porque me ha convertido en quien soy hoy, alguien con quien realmente me siento muy satisfecho."`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 17 ------------------
  {
    id: 17,
    semana: "Novena Semana",
    fecha: "21/04/2026",
    titulo: "Metodologías, Tipos de Evaluación y Rúbricas en Acción",
    apuntes: `Comenzamos la clase resolviendo dudas sobre nuestro proyecto y hablando de la importancia de evitar el plagio y citar en formato APA (7ª edición). A raíz de unas preguntas, Carlos nos recordó que la didáctica es diversa y tiene muchos contextos: formal (la escuela), no formal (seminarios, actividades extraescolares) e informal (nuestro día a día, donde muchas veces aprendemos más que en un aula).

Entramos de lleno en la teoría de la Metodología. Comprendimos que toda metodología tiene un porqué, y criticamos que muchas veces a los maestros no se les valora lo suficiente, cuando su práctica requiere la misma precisión que la de un cirujano. Repasamos metodologías clave para salir del modelo tradicional:
- Gamificación: No es jugar por jugar, es incorporar las mecánicas del juego al aprendizaje.
- Flipped Classroom (Aula Invertida): El alumno prepara la teoría en casa y en clase se hace la práctica.
- Aprendizaje Basado en Proyectos (ABP): Trabajar de forma cooperativa hacia un fin común.
- Visible Thinking: Rutinas de Harvard para hacer visible el pensamiento de los alumnos.

Después, profundizamos en la Evaluación. Un buen docente no puede basarse solo en un examen sumativo (cuantitativo y finalista). Hay que evaluar el proceso (formativa), al principio (diagnóstica) y contar con múltiples voces: Heteroevaluación (del profe al alumno), Autoevaluación y Coevaluación (entre compañeros). Nos marcó mucho el ejemplo del Test de Cooper en Educación Física: una prueba puramente capacitista que no tiene en cuenta las dificultades o el asma de un alumno, evaluando solo el resultado y no el esfuerzo o el progreso.

Tras el descanso, nos pusimos el sombrero de Comisión Evaluadora. Nos dividimos por parejas para supervisar y dar feedback al resto de grupos sobre sus propuestas para el Día del Libro y el Pueblo Gitano:

- Gloria y Josué (Grupos 1 y 3): El Grupo 1 (Víctor y Margot) destacó por usar a Camarón cantando a Lorca y plantear un debate para romper estereotipos gitanos. El Grupo 3 (Melania y Esther) presentó una actividad brillante fusionando ambos temas: los alumnos deben preparar un teatro basado en poemas gitanos y el resto debe adivinar de qué poema se trata.
- Pacheco y Mario (Grupo 2): (Alba y Elena). Han mejorado mucho sus recursos, aunque les falta definir un objetivo general claro y fomentar que todo su grupo participe por igual.
- Nathalie, Natalia y Joselu (Grupos 4 y 5): En el Grupo 4 (Navas y Angy) el trabajo en equipo fue impecable, asegurándose de que todos entendieran cada parte del proyecto. El Grupo 5 (Irene y Diana) planteó crear una historia conjunta bajo la premisa "Érase una vez en un pueblo gitano...", aunque notamos que algunos miembros del grupo hablaban mucho más que otros.

Como reflexión final, esta sesión ha sido oro puro. Hemos conectado la teoría (metodologías y evaluación formativa) con la práctica real, supervisando y guiando a nuestros compañeros. Entender que evaluar no es poner una nota para castigar, sino una herramienta para mejorar el proceso, es el mayor aprendizaje que nos llevamos hoy.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 18 ------------------
  {
    id: 18,
    semana: "Novena Semana",
    fecha: "23/04/2026",
    titulo: "Día del Libro: Flamenco, Teatros y el Juego de las Sillas",
    apuntes: `Hoy celebramos el Día del Libro de una forma única, liderada por el Grupo 4 (Ale Navas y Angy). Al entrar, el aula estaba transformada: sillas agrupadas mirando hacia fuera y el equipo organizador vestido de negro con detalles flamencos (peinetas, flores, mantillos). Además, trajeron material para que toda la clase nos metiéramos en el papel.

Comenzamos con una versión del clásico juego de las sillas al ritmo de música flamenca. Nos dividimos en grupos (Joselu y Gloria en uno; Pacheco y Nathalie en otro). Fue un momento súper divertido y lúdico, dejándonos anécdotas graciosas como la caída de Martina tras un rápido movimiento de Elena para conseguir su silla, coronándose como ganadora de esa ronda.

Conforme íbamos siendo eliminados, nos entregaban un fragmento literario para interpretarlo teatralmente con un objetivo claro: fomentar el orgullo de la cultura gitana desde el respeto.
- El equipo de Joselu y Gloria trabajó con "Camelamos naquerar" de José Heredia Maya. Representamos una obra donde unos personajes "payos" pasaban del prejuicio a la comprensión, dejando atrás los estereotipos y aprendiendo a no generalizar actitudes.
- El equipo de Pacheco y Nathalie interpretó un texto de "La Colmena" de Camilo José Cela. Aunque al principio nos pareció muy complejo, decidimos no cambiarlo y logramos transmitir un mensaje claro sobre la ruptura de barreras culturales.

El resto de la clase también hizo teatros impresionantes: Elena se metió totalmente en su papel de Gonzalo; Laura y Leal representaron una fuerte defensa contra la discriminación; y Margot y Diana adaptaron a Jane Austen con un toque flamenco genial. Al final, cada grupo leyó su fragmento y todas las piezas del puzzle encajaron dando sentido a las obras.

Como Comisión Evaluadora, aprovechamos para dejar definida la rúbrica oficial con la que calificaremos a todos los grupos. Los criterios son: Objetivo, Participación activa, Corrección de errores, Relación entre las temáticas, Recursos empleados, Organización de tiempos y Evaluación interna. Usaremos una escala visual y clara: ¡Excelente! 😀 – ¡Muy bien! 🙂 – Bien 👍 – Mejorable 😬 – Insuficiente 🙁.

Como reflexión final, fue una experiencia muy enriquecedora que unió literatura, respeto a la diversidad y diversión. El hecho de que el grupo organizador nos pidiera feedback al terminar demuestra su gran implicación. Hemos comprobado que cuando el aprendizaje es participativo, el mensaje de igualdad llega con muchísima más fuerza.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 19 ------------------
  {
    id: 19,
    semana: "Décima Semana",
    fecha: "28/04/2026",
    titulo: "Acción del Proyecto, Prevención de Plagios y Reyertas de Lorca",
    apuntes: `Empezamos la sesión directamente en fase de "acción" con nuestro Proyecto. Carlos nos avisó de dos cosas importantes: cuidado con las faltas de asistencia (son motivo de suspenso directo) y cuidado con el plagio o el abuso de la Inteligencia Artificial. Quería ver identidad propia y normas APA.

Nos dividimos las preguntas para avanzar más rápido:
- Joselu: Investigó si la calificación es una parte finalista de la didáctica. Encontró que no tiene por qué serlo; aunque puede ser un resumen numérico administrativo, su verdadero valor reside en su función formativa y de mejora continua.
- Pacheco: Abordó la Afectividad y cómo aplicar y valorar la didáctica. Apoyándose en autores como Chevallard (transposición didáctica) y Díaz-Barriga, concluyó que la didáctica se valora cuando los conocimientos complejos se reconstruyen de forma pedagógica para que el aprendizaje sea riguroso, accesible y útil en la vida real.
- Gloria: Investigó qué opinan diferentes autorías. Encontró a Comenio (el padre de la Didáctica Magna, quien defendía ir de lo simple a lo complejo apoyándose en la experiencia) y a Skinner (conductismo). 

En medio de nuestra búsqueda, Carlos nos llamó al orden: se había dado cuenta de que, por tirar de IA, todos los grupos estaban mencionando a los mismos autores (Vygotsky, Comenio...). Nos animó a buscar sobre la Escuela de Frankfurt, el socioconstructivismo y, muy importante, a darle visibilidad a mujeres pedagogas. Nos pidió también ampliar más cada reflexión.

En la segunda mitad de la clase, fue el turno del Grupo 3 para su actividad del Día del Libro. Nos explicaron el origen del Orgullo Gitano y nos repartieron poemas del "Romancero Gitano" de Lorca para interpretarlos teatralmente. Luego, intercambiaron los poemas para que tuviéramos que adivinar qué obra correspondía a qué poema.

Tuvimos un fallo técnico graciosísimo: nos tocó un poema muy difícil ("Reyerta"), no entendíamos nada y fuimos incapaces de adivinar la obra del grupo de Víctor y Margot... ¡hasta que Víctor nos avisó de que el poema seguía por detrás de la hoja! Nos morimos de vergüenza y de risa.
Luego nos tocó actuar a nosotros: Gloria y Natalia hicieron de ancianas lloronas, Pacheco se tiró al suelo a rodar haciéndose el muerto, Joselu entró como cura (Ángel negro) a echarle agua bendita, y Josué cerró la escena como Guardia Civil preguntando por los altercados.

Como Comisión Evaluadora, realizamos la evaluación del grupo. Aunque hubo confusión con su sistema de autoevaluación (parecía más bien heteroevaluación), la actividad fue brillante. Como reflexión, nos encanta cómo estas clases nos enseñan que aprender no es solo memorizar teoría, sino debatirla, construirla con el grupo y hasta tirarse al suelo a interpretar a Lorca.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 20 ------------------
  {
    id: 20,
    semana: "Décima Semana",
    fecha: "30/04/2026",
    titulo: "Cronología del Proyecto y Nuestras Huellas Sonoras",
    apuntes: `Empezamos la clase haciendo un balance global de la asignatura. Carlos nos recordó por qué estamos aquí: podíamos haber elegido la evaluación tradicional con un examen finalista, pero escogimos este camino (la evaluación continua). Repasamos nuestra evolución desde que empezamos el 13 de marzo (planificación, aprendizajes específicos, fase de acción) hasta la futura asamblea final de mayo. Nos advirtió que el proyecto final exige unas 96 horas de dedicación por persona, por lo que demanda esfuerzo, profundidad y, sobre todo, cero plagios. 

Tras esta puesta a punto, Carlos introdujo la "Tarea 7: Huellas Sonoras". Nos dio 20 minutos para buscar una canción que nos transportara a un momento clave de nuestra historia educativa y analizarla. Fue precioso ver cómo casi toda la clase coincidía en canciones (como "Madre Tierra" de Chayanne) que nos traían recuerdos de fin de curso o graduaciones. Reflexionamos sobre cómo de pequeños superábamos los errores mucho más rápido, mientras que ahora nos quedamos dándole vueltas a todo.

A continuación, compartimos las huellas sonoras de nuestro grupo:

Gloria: "Como una Ola" (Rocío Jurado)
"Esta canción era la alarma para salir al patio en mi colegio y fue la protagonista del vídeo del 25º aniversario del centro. Me genera muchísima nostalgia y me recuerda a un ambiente relajado y divertido. A nivel didáctico, había un vínculo fuerte basado en la gestión del tiempo y la organización (sabíamos cuándo entrar y salir). Se percibía una estrategia activa y cooperativa, especialmente al grabar el vídeo todos juntos. Como futura docente, solo cambiaría la canción por una más moderna, pero mantendría la dinámica de usar música alegre para gestionar las transiciones en el aula."

Pacheco: "M de Madre"
"En mi colegio religioso, en cuanto llegaba mayo todo cambiaba. Esta canción sonaba de fondo mientras nos saltábamos las clases para hacer juegos y actividades en el patio. Me transmite la nostalgia de una época sencilla. A nivel didáctico, el vínculo pasaba de lo académico a lo puramente emocional y comunitario, formando una identidad de centro. Es una estrategia de enseñanza activa y experiencial donde se fomentan valores. Si pudiera viajar en el tiempo como docente, mantendría este clima festivo, pero añadiría un espacio de reflexión final más dialógico para que los alumnos fueran 100% los protagonistas del mensaje."

Joselu: "La Canción de los Ríos de España"
"Mi canción me lleva directo a Primaria. La usábamos para aprendernos los nombres de los ríos de forma melódica. Me transmite la felicidad de una etapa sin complicaciones. Didácticamente, es un recurso audiovisual brillante que funciona como andamiaje para ayudar al profesor a explicar un contenido duro. Es una estrategia activa, mucho más dinámica que una clase magistral aburrida. Como docente, me encantaría seguir usando este recurso, simplemente actualizando el formato o creando nuevas canciones para abarcar todavía más temario."

Nathalie: "I Wanna Dance With Somebody" (Whitney Houston)
"Mi padre me ponía esta canción en bucle en el coche para llevarme al cole o a los exámenes, a pesar de que yo le decía que no me gustaba (solo por llevarle la contraria). Hoy me la pongo para limpiar o estudiar. Recuerdo que me la puso la primera vez que me enseñó a conducir. El análisis didáctico se enmarca en la educación informal (ámbito familiar): mi tutor legal ejerciendo de educador mediante el diálogo. El vínculo pedagógico es pura cercanía y afectividad. Como futura docente, quiero llevar este valor emocional al aula, demostrando que los pequeños gestos y canciones de acompañamiento son los que realmente se graban en la memoria de los alumnos."

Como reflexión final, esta sesión nos ha hecho entender que las actividades no son ejercicios aislados, sino piezas de nuestro crecimiento. La música tiene el inmenso poder de transportarnos, y compartir estos recuerdos ha creado un clima de empatía y confianza brutal en clase.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 21 ------------------
  {
    id: 21,
    semana: "Undécima Semana",
    fecha: "05/05/2026",
    titulo: "La Fábrica de Cuentos, Trabajo a Medias y ¿Cómo educar a Alvarito?",
    apuntes: `Comenzamos el día poniéndonos nuestra gorra de la Comisión Evaluadora para valorar la propuesta del Día del Libro del Grupo 1 (Margot y Víctor). Empezaron mostrando un corto de El Ministerio del Tiempo sobre Lorca seguido de un debate. Siendo sinceros, aunque la temática gitana estaba bien implementada, a esta primera parte le faltó fuerza para captar la atención real de la clase.

Sin embargo, remontaron de forma brillante con su actividad principal: "La Fábrica de los Cuentos". Nos dieron temáticas y fragmentos aislados a cada miembro del grupo; teníamos que crear una historia por separado y luego ponerlas en común para montar un teatro conjunto. Fue súper entretenido y encajó perfectamente con la temática. Además, nos entregaron hojas de autoevaluación (tanto para nuestro grupo como para ellos como docentes), un detalle excelente que sumó muchos puntos en nuestra rúbrica.

Después, Carlos nos dio tiempo para seguir avanzando en la "fase de acción" de nuestro proyecto final. Hoy nos tocó trabajar bajo mínimos porque solo estábamos dos miembros del grupo en clase. Nos centramos en responder las preguntas del bloque de Afectividad y en plantear los escenarios de "Y si..." del Proceso Lógico de Pensamiento. Avanzamos lo que pudimos a menor escala, resolvimos dudas con Carlos y dejamos el terreno preparado para ponerlo en común cuando estemos todos.

Tras el descanso, entramos en un debate interesantísimo a raíz del artículo "¿Cómo educar a Alvarito?". Una profesora se pregunta cómo manejar a un alumno disruptivo, lo que nos llevó a cuestionarnos: ¿el ser humano es disruptivo por naturaleza? ¿Qué daño hacen etiquetas como "retrasados" o "problemáticos" en la escuela? 
Aunque no terminamos de leerlo, llegamos a una conclusión clara: no hay un único camino o receta mágica para que los niños aprendan. Es el sistema educativo (con la inversión de recursos necesaria) el que debe adaptarse al alumno, y no el alumno al sistema. 

Para profundizar en esto, Carlos nos recomendó apuntar a dos autores clave de la pedagogía crítica: Jurjo Torres y Henry Giroux.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 22 ------------------
  {
    id: 22,
    semana: "Undécima Semana",
    fecha: "07/05/2026",
    titulo: "El Cáncer y la Muerte en el Aula: Charla con Mónica (Cudeca)",
    apuntes: `Hoy hemos tenido una de las sesiones más impactantes, crudas y necesarias de todo el curso. Nos ha visitado Mónica, psicooncóloga con 20 años de experiencia que actualmente trabaja en Cudeca (cuidados paliativos). El tema principal fue cómo abordar el cáncer y la muerte con nuestros futuros alumnos.

Mónica nos dejó claro que los niños siempre manifiestan su sufrimiento a través de la conducta (llamadas de atención, rebeldía, apatía). Cuando esto ocurre, nuestro deber como docentes es observar y preguntar, creando un espacio de total seguridad. Surgieron preguntas durísimas y muy reales que Mónica fue respondiendo magistralmente:

- ¿Y si le oculto la realidad al niño?
El peor error. Por el egocentrismo infantil, si a un niño le falta información, se la inventa, y casi siempre asume que es culpa suya. Mónica nos contó el desgarrador caso de un padre que, al morir su mujer de cáncer, le dijo a su hijo que "la había quemado un rayo". El niño vivió aterrorizado y sufriendo acoso escolar por culpa de esa mentira, hasta que Mónica intervino para hacer un ritual de despedida real. La verdad, adaptada a su edad, siempre sana más que la mentira.

- ¿Qué le digo a un alumno que viene llorando porque su madre va a morir?
No hay que dar falsas esperanzas ni quedarse mudo. A veces, la simple presencia física es suficiente. Un abrazo y dejar que exprese absolutamente todo lo que siente es nuestro mayor salvavidas para ellos.

- ¿Qué ocurre si como docente me pongo a llorar con el alumno?
Elena hizo esta interesantísima pregunta. Mónica nos explicó que emocionarse no es malo; de hecho, humaniza y crea un vínculo precioso. Sin embargo, hay que encontrar el equilibrio: el docente no puede derrumbarse hasta el punto de que sea el niño quien termine consolándolo. Somos su sostén.

- ¿Qué hago si un niño de mi clase tiene cáncer?
Mariam contó la experiencia de su primo pequeño, a quien la clase aislaba, no por asco, sino por miedo a contagiarle un resfriado y hacerle daño. Mónica subrayó la importancia de educar al resto de la clase para normalizar la situación, ajustar los objetivos académicos de ese alumno y reforzarle positivamente por su inmensa valentía.

También hablamos de que el docente no está solo (es un trabajo en red con familias y sanitarios) y de cómo la muerte sigue siendo el gran tema tabú de nuestra sociedad (incluso alejamos los cementerios de las ciudades). Mónica nos animó a empezar trabajando la pérdida desde cosas pequeñas (un juguete, una mascota) o con películas como El Rey León.

Como reflexión final, esta clase ha sido un golpe de realidad espectacular. Nos ha enseñado que la muerte y la enfermedad no pueden ser temas tabú en la escuela. Saber escuchar, no mentir y ser un ancla emocional es una responsabilidad inmensa, pero vital para nuestra futura profesión. Agradecemos muchísimo que la asignatura nos traiga estas experiencias "fuera del guion" que nos preparan para la vida real.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ EDICIÓN ESPECIAL: TUTORÍA ------------------
  {
    id: 23,
    semana: "🌟 Edición Especial",
    fecha: "11/05/2026",
    titulo: "Tutoría de Seguimiento y Reorientación",
    apuntes: `Hoy solicitamos una tutoría con Carlos para evaluar cómo iba nuestro progreso en la asignatura y asegurarnos de que el portfolio iba por el buen camino. Fue una sesión súper productiva que nos dio un subidón de motivación.

Al revisar nuestro trabajo, Carlos nos dio un par de pautas formales importantes: debemos incorporar un índice de contenidos y, además, un índice específico para las tablas y figuras. Al margen de eso, le encantó el enfoque que le estamos dando al diario. Nos confesó que le parece un acierto enorme que mezclemos las vivencias personales y las emociones con la teoría; nos dijo que eso es precisamente lo que busca, ya que prefiere leer la identidad de cada grupo antes que corregir doce proyectos idénticos y sistemáticos. 

Aprovechamos para explicarle con detalle todo nuestro despliegue creativo: lo que montamos para la Actividad 1 (la revista y el vídeo de Minecraft) y nuestra propuesta final para el portfolio (diseñar esta página web interactiva incluyendo vídeos reflexivos). Se quedó muy sorprendido y valoró enormemente que hayamos apostado por una idea tan innovadora y currada, alejándonos del típico e impersonal documento de Canva. Nos animó a dejar bien registrado en la web cómo se nos ocurrieron estas ideas y cómo ha sido todo nuestro proceso de diseño.

Luego entramos en el terreno de las dudas sobre la fase de "acción". Le comentamos nuestra intención de vincular una autoría científica a cada una de las preguntas del Proceso Lógico de Pensamiento para darles más peso. Carlos nos dio el visto bueno, pero nos lanzó un reto: que busquemos teorías y autores más modernos. Vygotsky es un pilar indiscutible de la didáctica, pero el proyecto ganará mucha más calidad si aportamos perspectivas de corrientes más actuales.

Para cerrar, le confesamos nuestro miedo a estar desviándonos de la planificación inicial. Carlos nos tranquilizó con una metáfora genial: "Si tú organizas un viaje para ir a Sevilla, pero por imprevistos o decisiones del camino terminas en Huelva, el viaje sigue siendo un éxito. Lo único que tienes que hacer es explicar los motivos del cambio (que en Huelva hay playa, que un amigo os dejaba una casa...)". Nos aclaró que no hace falta rehacer la planificación original; basta con justificar de forma reflexiva el porqué de los cambios. Esto nos quitó un peso enorme de encima.

Nos fuimos de la tutoría con las ideas clarísimas, el proyecto reorientado y con la enorme satisfacción de saber que nuestro esfuerzo y creatividad están siendo muy valorados por el profesor.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 23 ------------------
  {
    id: 24,
    semana: "Duodécima Semana",
    fecha: "12/05/2026",
    titulo: "Normativa Andaluza, Vínculos en Clase y el Susto con Turnitin",
    apuntes: `Empezamos la clase repasando los criterios de evaluación que vimos en la tutoría y recordando que este jueves tenemos el ejercicio de valoración. Carlos pidió un voluntario para resumir en qué consiste nuestro proyecto, y nuestro compañero Joselu tomó la iniciativa. Explicó a la perfección todo nuestro viaje: la planificación, los "¿y si...?", los aprendizajes específicos y, finalmente, la fase de acción. Escucharlo en voz alta nos dio muchísima satisfacción al ver que este método, en el que tú eres tu propio jefe, por fin cobra todo el sentido.

Después, pasamos a repasar teoría pura. Vimos la Normativa en Andalucía (centrándonos en el currículo del 9 de mayo de 2023) y entendimos la diferencia entre Competencias Clave (transversales a todas las materias) y Competencias Específicas (antiguos contenidos, evaluables a través de descriptores operativos). También repasamos la organización de los centros: el Consejo Escolar, la Comisión de Coordinación Pedagógica y los servicios de apoyo.

Carlos nos insistió en la necesidad de usar autorías modernas para nuestro proyecto, ya que clásicos como Comenio o Rousseau se quedan muy anticuados para la realidad actual (¡nos dejó descolocados al contar que Rousseau decía que la moralidad se traspasaba por la alimentación de la madre!). Tomando nota de esto, Nathalie y Joselu se fueron a la biblioteca a buscar artículos contemporáneos en Jábega y Google Scholar, centrándose en la didáctica crítica y la Escuela de Frankfurt.

A la vuelta del descanso, vivimos un momento precioso. Carlos lanzó 7 preguntas al azar para valorar el ambiente de la clase. Nerea le agradeció a Margot su ayuda para abrirse; Samuel destacó la amistad y el apoyo de Pallarés y Gabriel en los días malos; Diana confesó que esperaba un ambiente universitario competitivo y se ha encontrado todo lo contrario. Como deseo conjunto, Estela pidió que todos logremos ser los grandes docentes que soñamos ser. 

Para terminar, el grupo de Irene realizó su actividad del Día del Libro. Al salir de clase, hablamos con ella y la notamos muy indignada y frustrada; se había esforzado muchísimo, pero el resto de su equipo apenas había participado. Entendimos perfectamente su impotencia.

Reflexión final y nota sobre Turnitin:
Queremos dejar constancia de un imprevisto que nos generó mucha indignación al final del día. Pasamos este portfolio por Turnitin para comprobarlo y nos devolvió porcentajes altísimos (y diferentes para cada miembro). Queremos dejar clarísimo que todo lo que hay escrito aquí son apuntes, vivencias y reflexiones 100% personales redactadas a lo largo de 14 semanas. Nos asusta que una herramienta automática pueda desvalorizar un trabajo tan íntimo, humano y propio como este. Por la tarde, canalizamos esa energía haciendo unos buenos apuntes unificando las diapositivas de Carlos con este diario para prepararnos para la prueba del jueves.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  // ------------------ SESIÓN 24 ------------------
  {
    id: 25,
    semana: "Duodécima Semana",
    fecha: "14/05/2026",
    titulo: "El Ejercicio Reflexivo: ¿Un Examen Tradicional Encubierto?",
    apuntes: `Hoy tocó enfrentarse al esperado "ejercicio reflexivo", aunque tuvimos una baja en el equipo: Joselu no pudo asistir porque tenía clases de camión. La prueba consistió en 15 preguntas tipo test y una pregunta de desarrollo a elegir entre dos opciones: planificar siguiendo el Proceso Lógico de Pensamiento o planificar un aula basada en el ABP (Aprendizaje Basado en Proyectos).

Las sensaciones dentro del grupo fueron una auténtica montaña rusa. En la parte del test, Pacheco y Glori sintieron que les había salido bastante bien, mientras que a Nathalie le costó un poco más. Sin embargo, en la parte de desarrollo se invirtieron los papeles. Nathalie y Pacheco eligieron la opción 2 (ABP); Nathalie salió con la sensación de haberlo bordado y Pacheco también quedó muy satisfecho, aunque reconoció que le supuso más esfuerzo que el test. Por su parte, Glori eligió la opción 1 y salió contenta, pero al hablar con los compañeros fuera del aula se preocupó bastante al ver que cada persona lo había enfocado de una manera totalmente distinta.

Al terminar, Carlos nos avisó de que revisará los ejercicios y enviará un correo antes del domingo a aquellas personas que hayan estado "más flojas" para tener una tutoría con ellas. 

Como reflexión final, tenemos que ser sinceros y críticos: este ejercicio nos ha parecido un examen tradicional encubierto. Resulta bastante contradictorio que el profesor haya insistido todo el curso en que "nuestras acciones tienen que concordar con nuestras palabras" y en huir del modelo estandarizado, para luego ponernos un tipo test lleno de preguntas trampa. Aunque recalcó que no cuenta para nota, la realidad es que evaluaba los contenidos de una forma mucho más teórica y clásica de lo que esperábamos, alejándose de esa evaluación formativa y libre que hemos defendido todos estos meses.`,
    fotos: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
];

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

  // C) Inyectar Vlogs en Temporadas (10 capítulos por Temporada en un Grid responsive)
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

  // D) Función para abrir la sesión en el Modal
  window.abrirSesion = function(id) {
    const sesion = sesionesDelPDF.find(s => s.id === id);
    if(sesion) {
      document.getElementById('modalTitulo').textContent = `Sesión ${sesion.id}: ${sesion.titulo}`;
      
      document.getElementById('modalBadges').innerHTML = `
        <span class="badge bg-primary px-3 py-2 rounded-pill"><i class="bi bi-tag me-1"></i>${sesion.semana}</span>
        <span class="badge bg-success px-3 py-2 rounded-pill"><i class="bi bi-calendar-event me-1"></i>${sesion.fecha}</span>
      `;
      
      document.getElementById('modalApuntes').innerHTML = `<p class="mb-0 lh-lg">${sesion.apuntes.replace(/\n/g, '<br>')}</p>`;
      
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
});