// ============================================================
//  COURSE INFO
// ============================================================
export const courseInfo = {
  title: 'Aplicaciones prácticas de la Inteligencia Artificial Generativa para Farmacéuticos de Atención Primaria',
  edition: '1ª Edición',
  organizer: 'SEFAP',
  totalHours: 22,
  syncHours: 10,
  asyncHours: 12,
  places: 100,
  audience: 'Farmacéuticos de Atención Primaria con interés en conocer los fundamentos básicos de inteligencia artificial, en concreto el funcionamiento y las limitaciones de los modelos de Inteligencia Artificial Generativa (IAG) y Retrieval Augmented Generation (RAG), con ejemplos prácticos.',
  sessions: [
    { n: 1, date: '7 abril 2026', time: '17:00–18:00', title: 'Introducción a los conceptos de Inteligencia Artificial', instructor: 'María García Gil' },
    { n: 2, date: '9 abril 2026', time: '17:00–18:00', title: 'Marco legal y ético. Uso de la IA responsable', instructor: 'Ana Isabel Rigueira García' },
    { n: 3, date: '14 abril 2026', time: '17:00–18:00', title: 'Modelos de LLM. Aprende a promptear y conoce las limitaciones', instructor: 'Eduardo Tornos Inza' },
    { n: 4, date: '16 abril 2026', time: '17:00–18:00', title: 'Aplicaciones de la IA Generativa en investigación: ChatGPT, Scite, Semantic Scholar', instructor: 'Emilio Monte Boquet' },
    { n: 5, date: '22 abril 2026', time: '17:00–18:00', title: 'Aplicaciones de la IA en investigación: Perplexity, ResearchRabbit, Elicit', instructor: 'Sonia Guillem Solera, María García Gil' },
    { n: 6, date: '29 abril 2026', time: '17:00–18:00', title: 'Resolución de consultas farmacoterapéuticas con IA: Openevidence, Consensus', instructor: 'Rosa Mª Tomás Sanz, Jose Fco Ávila de Tomás' },
    { n: 7, date: '6 mayo 2026', time: '17:00–18:00', title: 'Visualización de datos con herramientas de IA', instructor: 'Elena Plaza Moreno' },
    { n: 8, date: '13 mayo 2026', time: '17:00–18:00', title: 'NotebookLM: conceptos básicos', instructor: 'Eduardo Tornos Inza' },
    { n: 9, date: '20 mayo 2026', time: '16:30–17:30', title: 'NotebookLM: taller de profundización', instructor: 'Alfredo Montero Delgado, Yared González Pérez', highlight: true },
    { n: 10, date: '27 mayo 2026', time: '16:30–17:30', title: 'Creación de soluciones digitales con IA', instructor: 'Alfredo Montero Delgado, Yared González Pérez', highlight: true },
  ],
  evaluation: {
    attendance: 'Asistencia con registro de inscripción y acceso a la plataforma virtual al 100% de las sesiones síncronas de cada unidad.',
    unitTest: 'Resolución de 5 preguntas tipo test por unidad (4 opciones, 1 correcta). Aprobado con 3/5 (60%). Dos intentos.',
    finalExam: 'Examen final de 25 preguntas tipo test (10 unidades). Aprobado con 15/25 (60%). Dos intentos.',
  }
}

// ============================================================
//  AUTHORS
// ============================================================
export const authors = [
  {
    name: 'Yared González Pérez',
    role: 'Farmacéutico. Hospital Universitario Nuestra Señora de la Candelaria. Servicio de Farmacia Hospitalaria. Servicio Canario de Salud.',
    email: 'yaredgpz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yared-gonz%C3%A1lez-p%C3%A9rez/',
    initials: 'YG',
    photo: 'assets/yared-photo.webp',
  },
  {
    name: 'Alfredo Montero Delgado',
    role: 'Farmacéutico. Hospital Universitario Nuestra Señora de la Candelaria. Servicio de Farmacia Hospitalaria. Servicio Canario de Salud.',
    email: 'amonterodel@gmail.com',
    linkedin: 'https://es.linkedin.com/in/alfredomonterodelgado',
    initials: 'AM',
    photo: 'assets/alfredo-photo.png',
  },
]

// ============================================================
//  UNIT 9 QUIZ
// ============================================================
export const unit9Quiz = [
  {
    id: 1,
    question: 'En la “Capa 1 (Arquitectura)”, ¿por qué se desaconseja subir manuales clínicos completos o documentos excesivamente voluminosos “por si acaso”?',
    options: [
      'Porque NotebookLM tiene un límite estricto de 10 páginas por fuente.',
      'Porque añadir documentos que no vienen al caso degrada la precisión, haciendo que el sistema recupere fragmentos parecidos a la consulta aunque no sean los relevantes.',
      'Porque el modelo consume su cuota de tokens diarios en la fase de indexación.',
      'Porque la sincronización automática con Google Drive se bloquea con archivos de más de 50 MB.',
    ],
    correctIndex: 1,
    justification: 'El exceso de ruido reduce la calidad del sistema RAG. Un documento que no responde directamente a las consultas planificadas no debe estar en el corpus.',
  },
  {
    id: 2,
    question: '¿Qué ventaja técnica y operativa aporta el uso de una nomenclatura sistemática como “[GC]-ESC-Hipertension-2023” al nombrar las fuentes?',
    options: [
      'El modelo reconoce el tipo de fuente desde el primer token mejorando la coherencia, y permite al humano auditar las citas de un vistazo sin abrir el archivo.',
      'Desbloquea la capacidad del modelo para buscar actualizaciones de la guía en internet.',
      'Fuerza a NotebookLM a traducir automáticamente el documento al español.',
      'Evita que el sistema elimine el documento por inactividad tras 30 días.',
    ],
    correctIndex: 0,
    justification: 'La etiqueta inicial (como [GC] para Guía Clínica) actúa como un metadato que el modelo usa para recuperar la información y que facilita la auditoría rápida de la evidencia.',
  },
  {
    id: 3,
    question: '¿Cuál es la diferencia fundamental entre un “prompt de conversación” y un “system prompt” (Instrucciones personalizadas) en NotebookLM?',
    options: [
      'El prompt de conversación es de pago, mientras que el system prompt es gratuito.',
      'El prompt de conversación solo admite texto, mientras que el system prompt admite imágenes.',
      'El prompt de conversación resuelve una consulta táctica puntual, mientras que el system prompt fija de forma permanente el rol, formato y restricciones para todas las interacciones.',
      'El prompt de conversación busca en internet; el system prompt solo busca en las fuentes locales.',
    ],
    correctIndex: 2,
    justification: 'El system prompt define el comportamiento base del cuaderno, transformándolo de una herramienta genérica a un colaborador especializado (Capa 2: Agentización).',
  },
  {
    id: 4,
    question: 'Desde un punto de vista estratégico (Capa 3), ¿cuándo está justificado llevar el cuaderno de NotebookLM a Gemini como contexto?',
    options: [
      'Cuando se requiere la máxima trazabilidad bibliográfica y no se admiten alucinaciones.',
      'Cuando se necesita generar resúmenes de audio (Audio Overviews).',
      'Cuando se busca crear un artefacto interactivo y editable (como una herramienta web en HTML mediante Canvas) o explorar información más allá del corpus.',
      'Cuando se han superado las 50 fuentes máximas permitidas en la versión gratuita.',
    ],
    correctIndex: 2,
    justification: 'La integración con Gemini se utiliza para capacidades que NotebookLM no posee (como Canvas para código interactivo), asumiendo el riesgo de perder el anclaje estricto a las fuentes (grounding).',
  },
  {
    id: 5,
    question: 'En cuanto a la generación de artefactos visuales en el panel Studio, ¿qué formato de prompt garantiza el mayor nivel de control sobre la jerarquía visual y los colores?',
    options: [
      'Lenguaje natural descriptivo (“hazlo bonito y profesional”).',
      'Texto libre en mayúsculas.',
      'Estructuras de datos en formato JSON que imponen un esquema rígido al modelo de imagen.',
      'No se pueden modificar, Studio solo utiliza plantillas predeterminadas inalterables.',
    ],
    correctIndex: 2,
    justification: 'El formato JSON actúa como un plano técnico (colores hex, tipografías, layout) que el modelo no puede ignorar, reduciendo el margen de interpretación imprevisible del texto libre.',
  },
]

// ============================================================
//  UNIT 9 PASAPALABRA
// ============================================================
export const unit9Pasapalabra = [
  { letter: 'A', relation: 'Empieza por A', definition: 'Fase de diseño del cuaderno (Capa 2) donde se define su comportamiento mediante instrucciones personalizadas y habilidades (skills).', answer: 'Agentizacion' },
  { letter: 'C', relation: 'Empieza por C', definition: 'Funcionalidad específica de Gemini que justifica exportar el cuaderno para generar y editar herramientas web interactivas.', answer: 'Canvas' },
  { letter: 'J', relation: 'Empieza por J', definition: 'Formato de texto estructurado recomendado como plano técnico para controlar los colores y la jerarquía visual al generar infografías en Studio.', answer: 'JSON' },
  { letter: 'M', relation: 'Empieza por M', definition: 'Lenguaje de marcado ligero recomendado para estructurar los prompts en el campo “Customize” del panel Studio.', answer: 'Markdown' },
  { letter: 'P', relation: 'Empieza por P', definition: 'Criterio estadístico por el cual el modelo genera las respuestas, en lugar de inferir la “verdad” clínica absoluta, requiriendo siempre verificación humana.', answer: 'Probable' },
  { letter: 'S', relation: 'Empieza por S', definition: 'Procedimiento operativo estándar en formato texto que ejecuta siempre la misma tarea con una sola acción de copiar y pegar (ej. /lectura-critica).', answer: 'Skill' },
  { letter: 'T', relation: 'Empieza por T', definition: 'Propiedad clave de NotebookLM que permite auditar de dónde viene cada afirmación clínica mediante citas, y que se compromete al usar Gemini con internet.', answer: 'Trazabilidad' },
]

// ============================================================
//  UNIT 10 QUIZ
// ============================================================
export const unit10Quiz = [
  {
    id: 1,
    question: '¿Qué acrónimo utiliza la metodología presentada para estructurar las necesidades de un FAP antes de iniciar el desarrollo de una herramienta?',
    options: ['SWOT', 'CREAR', 'PICO', 'SMART'],
    correctIndex: 1,
    justification: 'La metodología CREAR (Contexto, Resultados, Experiencia, Acción, Restricciones) es el framework definido para aterrizar proyectos digitales desde la visión clínica del farmacéutico.',
  },
  {
    id: 2,
    question: '¿Cuál es la función principal del farmacéutico de AP como “traductor tecnológico” en el ecosistema sanitario actual?',
    options: [
      'Programar el código fuente de los servidores del hospital.',
      'Actuar como puente entre la necesidad clínica (salud) y las soluciones técnicas, facilitando el desarrollo a los ingenieros de IA.',
      'Sustituir al departamento de IT en la gestión de redes.',
      'Realizar exclusivamente auditorías de ciberseguridad.',
    ],
    correctIndex: 1,
    justification: 'El farmacéutico no debe reemplazar al ingeniero, sino traducir el dominio de salud y el flujo de trabajo clínico para que los tecnólogos puedan implementar soluciones eficaces.',
  },
  {
    id: 3,
    question: 'Según el flujo propuesto, ¿qué es un PRD (Product Requirements Document) y para qué sirve?',
    options: [
      'Un script de Python para automatizar el cálculo de dosificaciones.',
      'Un documento técnico generado por IA tras aplicar la metodología CREAR para definir el alcance del proyecto.',
      'Una ley europea sobre el uso de dispositivos médicos.',
      'Una licencia gratuita para distribuir software.',
    ],
    correctIndex: 1,
    justification: 'El PRD es el briefing estructurado que sirve de base para que la IA genere el código de la aplicación, ahorrando iteraciones innecesarias.',
  },
  {
    id: 4,
    question: 'En el contexto de la creación de herramientas digitales, ¿qué diferencia hay entre las dos soluciones que puede desarrollar un FAP?',
    options: [
      'Apps online de pago vs. Apps gratuitas de escritorio.',
      'Soluciones locales (para gestión de datos propios y seguridad) vs. Soluciones en la nube (para colaboración masiva o datos abiertos).',
      'Apps de texto vs. Apps de voz.',
      'No hay diferencia, todas son soluciones locales.',
    ],
    correctIndex: 1,
    justification: 'La elección depende del dato: los datos de salud sensibles exigen entornos locales cerrados, mientras que la colaboración masiva o estadística abierta permite entornos en la nube.',
  },
  {
    id: 5,
    question: '¿Qué es la “Ley de la Disrupción” en el contexto de la creación digital?',
    options: [
      'La tecnología avanza exponencialmente, mientras que la cultura y la regulación avanzan linealmente.',
      'La IA genera errores aleatorios constantes.',
      'Los médicos siempre rechazan las soluciones de los farmacéuticos.',
      'Los datos de salud se pierden por obsolescencia.',
    ],
    correctIndex: 0,
    justification: 'Esta brecha de velocidad genera la tensión que obliga a los farmacéuticos a ser “traductores tecnológicos” para acortar distancias en el sistema.',
  },
]

// ============================================================
//  UNIT 10 PASAPALABRA
// ============================================================
export const unit10Pasapalabra = [
  { letter: 'A', relation: 'Empieza por A', definition: 'Herramienta digital (app) que se ejecuta en tu propio ordenador (en local) y no requiere conexión a internet para funcionar, garantizando la privacidad de los datos.', answer: 'Aplicacion local' },
  { letter: 'C', relation: 'Empieza por C', definition: 'Siglas de la metodología para definir requisitos: Contexto, Resultados, Experiencia, Acción, Restricciones.', answer: 'Crear' },
  { letter: 'D', relation: 'Empieza por D', definition: 'Profesional que debe trabajar codo a codo con el farmacéutico de AP para desarrollar soluciones técnicas basadas en la salud.', answer: 'Desarrollador' },
  { letter: 'E', relation: 'Empieza por E', definition: 'Tipo de archivo (a menudo exportado desde una hoja de cálculo) necesario para trabajar con los datos de forma eficaz con la IA.', answer: 'Excel' },
  { letter: 'I', relation: 'Empieza por I', definition: 'Documento técnico (o brief) que la IA genera para definir los requisitos de la aplicación basándose en tus respuestas.', answer: 'Informe de requisitos' },
  { letter: 'P', relation: 'Contiene la P', definition: 'Siglas del “Product Requirements Document” que se genera tras aplicar la metodología CREAR.', answer: 'PRD' },
  { letter: 'T', relation: 'Empieza por T', definition: 'Rol emergente del farmacéutico que sirve de puente entre las necesidades clínicas y las soluciones de ingeniería.', answer: 'Traductor tecnologico' },
]

// ============================================================
//  UNIT 9 CONTENT
// ============================================================
export const unit9Content = {
  title: 'NotebookLM avanzado: el cuaderno como sistema de IA',
  subtitle: 'Saca todo el provecho a esta herramienta para preparar sesiones clínicas, visual abstracts, investigación, docencia, todo con control.',
  objectives: [
    'Diseñar un cuaderno de NotebookLM como sistema, decidiendo qué fuentes incluir, en qué formato y cómo nombrarlas para que el modelo recupere con precisión.',
    'Configurar el comportamiento del cuaderno mediante un system prompt y, cuando proceda, mediante skills, distinguiendo cuándo aportan valor y cuándo son sobreingeniería.',
    'Decidir con criterio cuándo trabajar dentro de NotebookLM y cuándo llevar el cuaderno a Gemini como contexto, según la necesidad concreta.',
    'Reconocer las limitaciones del sistema (alucinaciones residuales, interpretación probabilística, ausencia de relaciones explícitas entre fragmentos) y aplicar la verificación humana como parte del flujo de trabajo.',
  ],
  introLevels: [
    { level: 'Nivel 0', name: 'Usuario', desc: 'Usas el producto de otros' },
    { level: 'Nivel 1', name: 'Curador', desc: 'Adaptas y personalizas soluciones ya creadas' },
    { level: 'Nivel 2', name: 'Creador', desc: 'Creas tus propias soluciones' },
    { level: 'Nivel 3', name: 'Arquitecto', desc: 'Diriges y diseñas sistemas complejos' },
  ],
  // Table 1: Source formats
  sourceFormats: [
    { name: 'Google Docs', suitability: 'high', sync: 'Sí', notes: 'Mantiene jerarquía estructural; ideal para documentos dinámicos' },
    { name: 'PDF nativo (texto)', suitability: 'high', sync: 'Limitada', notes: 'Fiable si buena estructura de encabezados' },
    { name: 'PDF escaneado', suitability: 'low', sync: 'No', notes: 'Calidad depende del OCR; evitar si hay alternativa' },
    { name: 'DOCX', suitability: 'medium', sync: 'No', notes: 'Puede introducir ruido según historial de edición' },
    { name: 'Google Sheets', suitability: 'medium', sync: 'Sí', notes: 'Datos en tabla: convertir a texto para Q&A' },
    { name: 'Texto plano (.txt)', suitability: 'high', sync: 'No', notes: 'Fiable pero sin jerarquía estructural' },
    { name: 'URL web', suitability: 'variable', sync: 'No', notes: 'Depende de estructura de la página; páginas dinámicas se recuperan mal' },
    { name: 'Audio/vídeo', suitability: 'medium', sync: 'No', notes: 'Calidad depende de la transcripción automática' },
  ],
  // Table 2: NotebookLM vs Gemini
  comparisonTable: [
    { need: 'Respuesta con cita verificable de fuente', notebook: true, gemini: false },
    { need: 'Corpus cerrado, sin acceso a internet', notebook: true, gemini: false },
    { need: 'Studio: audio, vídeo, infografía, mapa mental', notebook: true, gemini: false },
    { need: 'Artefacto editable (doc, tabla, herramienta) — Canvas', notebook: false, gemini: true },
    { need: 'Aprendizaje con profundidad más allá del corpus', notebook: false, gemini: true },
    { need: 'Generación de vídeo', notebook: false, gemini: true },
    { need: 'Añadir archivos temporales sin persistencia', notebook: false, gemini: true },
    { need: 'Cruzar múltiples cuadernos en una consulta', notebook: false, gemini: true },
    { need: 'System prompt permanente y skills', notebook: true, gemini: false },
  ],
  // Table 3: Best practices
  bestPractices: [
    { layer: 'Arquitectura', good: 'Priorizar PDF nativo; nombrar fuentes descriptivamente', bad: 'Subir documentos “por si acaso”; dejar nombres de archivo por defecto' },
    { layer: 'Arquitectura', good: 'Validar el corpus con consultas reales antes de continuar', bad: 'Añadir fuentes sin comprobar que no introducen ruido' },
    { layer: 'Agentización', good: 'Especificar en el system prompt todos los criterios clínicamente relevantes', bad: 'Dejar implícito lo que el modelo resolverá por probabilidad' },
    { layer: 'Agentización', good: 'Crear skills solo cuando las tareas son distintas y recurrentes', bad: 'Construir skills antes de tener un system prompt funcional' },
    { layer: 'Conexión', good: 'Ir a Gemini cuando se busca un artefacto editable o una capacidad ausente', bad: 'Ir a Gemini para consultas que requieren trazabilidad de fuente' },
    { layer: 'Transversal', good: 'Verificar las citas clínicas en la fuente original antes de usar el resultado', bad: 'Asumir que la cita recuperada es siempre el fragmento más relevante' },
    { layer: 'Transversal', good: 'Mantener el corpus actualizado cuando las guías se revisan', bad: 'Dejar fuentes obsoletas activas sin señalizarlas' },
  ],
  useCases: [
    { title: 'Preparación de sesión clínica multifuente con cuaderno agentizado', desc: 'Centraliza guías internacionales, protocolo de área, literatura reciente y fichas técnicas. Con el skill /preparacion-sesion produce un esquema con objetivos, puntos clave con cita, aspectos prácticos y preguntas de discusión.' },
    { title: 'Corpus investigador para revisión bibliográfica asistida', desc: 'Permite consultas cruzadas entre literatura: lagunas de población, comparadores utilizados, discrepancias de resultados. Studio extrae variables concretas de múltiples fuentes en una tabla comparable.' },
    { title: 'Docencia a residentes: cuaderno como generador de autoevaluación', desc: 'Contiene material de rotación, guías, protocolos y casos clínicos resueltos. Genera preguntas de autoevaluación directamente desde Studio, ancladas al contenido cargado.' },
  ],
  bibliography: [
    'Liu NF, Lin K, Hewitt J, Paranjape A, Bevilacqua M, Petroni F, et al. Lost in the Middle: How Language Models Use Long Contexts. Trans Assoc Comput Linguist. 2024;12:157-73.',
    'Google. Notebooks in Gemini Apps [Internet]. NotebookLM Help; 2026.',
    'Google Workspace. Take your notebooks further by adding NotebookLM as a source in the Gemini app [Internet]. Google Workspace Updates; 27 Jan 2026.',
  ],
}

// ============================================================
//  UNIT 10 CONTENT
// ============================================================
export const unit10Content = {
  title: 'Creación de soluciones digitales',
  subtitle: 'De vibecoder a arquitecto: el farmacéutico como traductor tecnológico',
  objectives: [
    'Comprender el concepto de vibecoding y su aplicación práctica en el entorno sanitario.',
    'Identificar los dos tipos de soluciones digitales que un FAP puede desarrollar y sus diferencias.',
    'Aplicar la metodología CREAR para estructurar las necesidades antes de desarrollar una herramienta.',
    'Conocer el marco competencial digital (DigComp 3.0 y OFIL-ILAPHAR) y el stack tecnológico por niveles.',
    'Comprender el marco regulatorio aplicable a soluciones digitales sanitarias (SaMD).',
  ],
  mainQuote: 'Los ingenieros saben construir técnicamente; tú sabes qué construir y para qué. Esa combinación es escasa y poderosa.',
  figureCards: [
    { icon: '💡', title: 'Identificar el problema', desc: 'Detectar necesidades reales del día a día en atención primaria que pueden resolverse con tecnología.' },
    { icon: '📝', title: 'Definir requisitos', desc: 'Estructurar qué necesitas con la metodología CREAR y generar un PRD con IA.' },
    { icon: '⚙️', title: 'Construir la solución', desc: 'Usar herramientas de vibecoding para generar la aplicación a partir del PRD.' },
    { icon: '🚀', title: 'Validar y desplegar', desc: 'Probar con usuarios reales, iterar y desplegar la solución en el entorno adecuado.' },
  ],
  adHocVsSpec: {
    adHoc: {
      title: 'Soluciones ad hoc de bajo riesgo',
      items: [
        'Herramientas internas, personales o de equipo',
        'No manejan datos sensibles de pacientes',
        'Prototipado rápido para validar hipótesis',
        'Desarrollo con vibecoding (Claude, Cursor, Bolt...)',
        'Despliegue en Vercel, Netlify o local',
        'Sin necesidad de certificación regulatoria',
      ],
    },
    spec: {
      title: 'Spec Driven Development',
      items: [
        'Soluciones para uso clínico o institucional',
        'Pueden manejar datos sensibles (pacientes, medicación)',
        'Requieren especificaciones formales (PRD completo)',
        'Desarrollo profesional con equipo de IT',
        'Infraestructura certificada del servicio de salud',
        'Sujeto a regulación SaMD si aplica',
      ],
    },
  },
  fapUseCases: [
    { title: 'Prototipado rápido para validar una hipótesis', desc: 'Crear una versión mínima viable de una herramienta para demostrar que la idea funciona antes de invertir recursos.' },
    { title: 'Demostración a proveedor o al servicio de informática', desc: 'Construir un prototipo funcional que muestre al equipo técnico exactamente qué necesitas, acelerando el desarrollo profesional.' },
    { title: 'Soluciones personales o internas', desc: 'Herramientas de uso propio o de equipo: calculadoras, dashboards, generadores de informes, que mejoran tu flujo de trabajo diario.' },
  ],
  fapProTip: 'No necesitas permiso para innovar en tu flujo de trabajo personal. Un prototipo que funciona vale más que mil presentaciones de PowerPoint.',
  digcomp: [
    { id: '5.2', name: 'Identificación de necesidades y respuestas tecnológicas', desc: 'Evaluar necesidades y encontrar herramientas digitales o decidir desarrollar soluciones personalizadas.' },
    { id: '5.3', name: 'Uso creativo de la tecnología digital', desc: 'Usar herramientas digitales de forma creativa e innovadora para resolver problemas y optimizar procesos.' },
  ],
  ofilCompetencies: [
    'Gestión de datos y análisis estadístico',
    'Automatización de procesos repetitivos',
    'Diseño de interfaces y experiencia de usuario',
    'Comunicación visual de datos clínicos',
    'Evaluación crítica de herramientas digitales',
    'Integración de IA en el flujo de trabajo farmacéutico',
  ],
  techStack: [
    {
      level: 'Nivel 1 — Explorador',
      color: '#22C55E',
      tools: ['ChatGPT / Claude', 'Google NotebookLM', 'Canva con IA', 'Google Sheets + IA'],
    },
    {
      level: 'Nivel 2 — Constructor',
      color: '#3B82F6',
      tools: ['Bolt.new', 'Lovable', 'v0 (Vercel)', 'Cursor', 'Replit Agent'],
    },
    {
      level: 'Nivel 3 — Integrador',
      color: '#8B5CF6',
      tools: ['Claude Code / Codex CLI', 'GitHub + Vercel', 'Supabase', 'APIs REST', 'Python + Streamlit'],
    },
    {
      level: 'Nivel 4 — Arquitecto',
      color: '#EF4444',
      tools: ['MCP Servers', 'Docker', 'Bases de datos', 'CI/CD Pipelines', 'Cloud (AWS/GCP)'],
    },
  ],
  automationFlow: [
    'Identificar problema clínico o necesidad operativa',
    'Aplicar metodología CREAR para estructurar requisitos',
    'Generar PRD con IA (Product Requirements Document)',
    'Construir prototipo con vibecoding',
    'Validar con usuarios reales (farmacéuticos, médicos)',
    'Iterar y mejorar según feedback',
    'Desplegar en entorno adecuado (local o nube)',
    'Documentar y compartir con el equipo',
  ],
  regulationItems: [
    { icon: '🇪🇺', title: 'Reglamento (UE) 2017/745 — MDR', desc: 'Marco europeo para dispositivos médicos, incluye software como dispositivo médico (SaMD).' },
    { icon: '💻', title: 'Software as a Medical Device (SaMD)', desc: 'Software que por sí solo es un dispositivo médico, sin ser parte de un hardware médico físico.' },
    { icon: '⚠️', title: 'Clasificación de riesgo', desc: 'Determinada por la gravedad de la decisión clínica que informa y la condición del paciente.' },
    { icon: '🛡️', title: 'Marcado CE', desc: 'Obligatorio para SaMD que se comercialice en la UE. Las herramientas internas de bajo riesgo están exentas.' },
  ],
  legalDisclaimer: 'Las soluciones ad hoc de bajo riesgo (herramientas internas, calculadoras personales, dashboards sin datos de pacientes) generalmente no requieren certificación regulatoria. Sin embargo, cualquier herramienta que influya en decisiones clínicas sobre pacientes puede considerarse SaMD y requerir evaluación regulatoria.',
  crearPrompt1: `# CONTEXTO
[Describe brevemente quién eres y en qué curso estás.]
[¿Qué dificultad tienes con el aprendizaje de este contenido?]

# RESULTADOS
[¿Qué quieres ver o conseguir con la herramienta?]
[Ej: un dashboard de progreso, quiz, resúmenes visuales...]

# EXPERIENCIA DE USUARIO
[Describe los pasos que da el usuario dentro de la app,
de principio a fin, en lenguaje natural.]

# ACCIONES / FUNCIONALIDADES
[Lista las funcionalidades que quieres que tenga la app.]

# RESTRICCIONES
[Ej: sin login, sin base de datos, solo web, alojamiento en Vercel...]

# TAREA
Actúa como Product Manager senior y diseñador full stack
especializado en herramientas [añadir temática: educativas digitales.]
Con la información anterior, hazme las preguntas necesarias
para generar un PRD estructurado con estas 7 secciones:
1. Descripción del problema
2. Objetivo y criterios de éxito
3. Perfil de usuario
4. Funcionalidades requeridas (lista numerada)
5. Restricciones técnicas y legales
6. Stack tecnológico
7. Criterios de aceptación`,
  crearPrompt2: `# ROL
Actúa como desarrollador full stack senior especializado en
el stack tecnológico definido en el PRD adjunto.

# TAREA
Construye la aplicación descrita en el PRD adjunto.

# REGLAS
- Respeta todas las especificaciones del PRD sin excepción.
- No añadas funcionalidades que no estén descritas.
- El código debe ser limpio, funcional y desplegable.
- Si algo del PRD es ambiguo, no tienes claro o hay
  contraindicaciones, pregunta antes de asumir.

# PRD
[PEGA AQUÍ TU PRD o adjunta el archivo]`,
  bibliography: [
    'European Commission. Regulation (EU) 2017/745 on medical devices. Official Journal of the European Union. 2017.',
    'IMDRF. Software as a Medical Device: Key Definitions. International Medical Device Regulators Forum. 2013.',
    'DigComp 2.2: The Digital Competence Framework for Citizens. European Commission. 2022.',
    'OFIL-ILAPHAR. Competencias digitales del farmacéutico hospitalario. 2024.',
  ],
}
