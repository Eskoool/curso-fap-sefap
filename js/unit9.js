import { html } from './lib.js'
import { unit9Content, unit9Quiz, unit9Pasapalabra } from './data.js'
import {
  AuthorsBio, ObjectivesList, HighlightedQuote, CaseStudy,
  InteractiveTable, ComparisonTable, Checklist, UseCaseList,
  SynthesisDiagram, BibliographySection, LayerTabs
} from './components.js'
import { QuizContainer } from './quiz.js'
import { PasapalabraContainer } from './pasapalabra.js'

const c = unit9Content

function SourceFormatCard(item) {
  const badgeClass = item.suitability === 'high' ? 'high' : item.suitability === 'medium' ? 'medium' : item.suitability === 'low' ? 'low' : 'variable'
  const badgeLabel = item.suitability === 'high' ? 'Alta' : item.suitability === 'medium' ? 'Media' : item.suitability === 'low' ? 'Baja' : 'Variable'
  return html`
    <div>
      <span className=${'itable-badge ' + badgeClass}>${badgeLabel}</span>
      <h4>${item.name}</h4>
      <p><strong>Sync Drive:</strong> ${item.sync}</p>
      <p>${item.notes}</p>
    </div>
  `
}

function Layer1Content() {
  return html`
    <div>
      <h3>Source engineering: qué fuentes poner y en qué formato</h3>
      <p>NotebookLM trabaja sobre un contexto CERRADO (sin acceso a internet durante el chat). La calidad del techo se establece antes de escribir el primer prompt. Más fuentes no significa mejor: añadir documentos irrelevantes degrada la precisión del sistema RAG.</p>

      <${HighlightedQuote} label="Nomenclatura recomendada" tip>
        Usa el formato <strong>[TIPO]-Descriptor-Año</strong> para nombrar fuentes y cuadernos.
        Ejemplos: <code>[GC]-ESC-Hipertension-2023</code>, <code>[EC]-ROCKET-AF-2011</code>,
        <code>[FT]-Rivaroxaban-2024</code>, <code>[GT]-AreaSaludTenerife-2024</code>
      <//>

      <h3>Tabla 1. Formatos de fuente en NotebookLM</h3>
      <${InteractiveTable} items=${c.sourceFormats} renderItem=${SourceFormatCard} />

      <h3>Las notas del cuaderno como metadatos funcionales</h3>
      <p>Las notas se recuperan como cualquier otra fuente. Una nota con "contexto y propósito" que explique para qué sirve el cuaderno reduce las respuestas fuera de lugar y complementa la orientación del system prompt.</p>

      <h3>Sincronización con Google Drive: ventajas y limitaciones</h3>
      <p>Las actualizaciones NO son automáticas; deben solicitarse manualmente. Más fiable con Google Docs/Slides/Sheets que con PDFs. Los cambios entre versiones pueden mezclar información. Solución: convertir PDF a Google Doc editable.</p>

      <${CaseStudy} title="Mismo corpus, dos cuadernos, resultados distintos">
        Mismo material pero con: nombres descriptivos de fuentes, PDFs nativos en lugar de escaneados, y nota de metadatos con contexto. Resultado: mejor auditabilidad y trazabilidad de las citas.
      <//>
    </div>
  `
}

function Layer2Content() {
  return html`
    <div>
      <h3>System prompt vs. prompt de conversación</h3>
      <p>El <strong>prompt de conversación</strong> resuelve una consulta táctica puntual y no afecta a la siguiente consulta. El <strong>system prompt</strong> es permanente: aplica a TODAS las conversaciones y define el comportamiento del modelo desde el inicio.</p>

      <h3>Diseño del system prompt: 4 componentes mínimos</h3>
      <div className="card-grid" style=${{ marginBottom: '1.5rem' }}>
        ${[
          { title: '1. Rol', desc: 'Qué es el cuaderno. Ej: "Asistente especializado en farmacia de AP orientado a preparar sesiones clínicas"' },
          { title: '2. Formato de output', desc: '¿Tono académico-formal? ¿Citas Vancouver? ¿Máximo 2 niveles de profundidad?' },
          { title: '3. Jerarquía de fuentes', desc: 'Qué guías tienen prioridad si hay conflicto entre documentos.' },
          { title: '4. Restricciones', desc: 'Qué NO debe hacer el modelo. Lo más valioso y lo más olvidado.' },
        ].map((item, i) => html`
          <div className="card" key=${i}>
            <strong>${item.title}</strong>
            <p style=${{ marginTop: '0.5rem', fontSize: '0.85rem' }}>${item.desc}</p>
          </div>
        `)}
      </div>

      <${HighlightedQuote} label="Errores frecuentes">
        <strong>Vaguedad:</strong> "Responde clara y rigurosamente" (no aporta información).
        <strong>Sobreextensión:</strong> Prompt de 2.000 palabras con contradicciones = comportamiento errático.
        <strong>Mezclar comportamiento con contenido:</strong> La información clínica va en las fuentes, no en el system prompt.
      <//>

      <h3>Skills: qué son, cómo se definen, cuándo son sobreingeniería</h3>
      <p>Un <strong>skill</strong> es un prompt estructurado, probado, guardado fuera del cuaderno, que ejecuta siempre la misma tarea con una acción de copiar y pegar. Añaden valor cuando hay múltiples tareas distintas y recurrentes. Son sobreingeniería si el cuaderno tiene una sola función bien definida en el system prompt.</p>

      <${CaseStudy} title="InformesLM: cuaderno agentizado para evaluación farmacoclínica">
        5 elementos de agentización: (1) Nombres de fuentes con identificadores [FT], [EC], [PACIENTE], (2) Flujo ordenado de solicitud de información, (3) Regla de cálculo económico con biometría, (4) Regla de no invención: si no hay datos, lo dice explícitamente, (5) Skill de lectura crítica que audita calidad del estudio antes de usar la evidencia.
      <//>
    </div>
  `
}

function Layer3Content() {
  return html`
    <div>
      <h3>NotebookLM como corpus para Gemini: cuándo tiene sentido</h3>
      <p>El valor no está en generar infografías (mejor en NotebookLM), sino en las capacidades que Gemini tiene y NotebookLM no: Canvas para artefactos editables, aprendizaje más allá del corpus, generación de vídeo, y archivos temporales sin persistencia.</p>

      <${HighlightedQuote} label="Trade-off clave" tip>
        Gemini puede incluir búsqueda web → el corpus ya no es cerrado. Se pierde trazabilidad a cambio de capacidades nuevas.
      <//>

      <h3>Tabla 2. NotebookLM frente a Gemini con el cuaderno como contexto</h3>
      <${ComparisonTable}
        items=${c.comparisonTable}
        leftLabel="NotebookLM"
        rightLabel="Gemini + Cuaderno"
        leftColor="var(--sefap-primary)"
        rightColor="var(--layer-3)"
      />

      <h3>Campo Customize y prompting estructurado</h3>
      <${HighlightedQuote} label="Formato recomendado">
        Usa Markdown con secciones explícitas: ## Rol, ## Contenido prioritario, ## Estructura del output, ## Restricciones. Marca como INFERENCIA cualquier conclusión que no sea textual.
      <//>

      <h3>Control granular con prompts en formato JSON</h3>
      <${HighlightedQuote} label="Artefactos visuales">
        Para presentaciones e infografías, usa JSON como plano técnico: define jerarquía visual, paleta de colores (hex), tipografía y distribución de elementos. El modelo no puede ignorar un esquema JSON rígido, a diferencia del texto descriptivo libre.
      <//>

      <${CaseStudy} title="Herramienta clínica interactiva desde Gemini Canvas">
        Cuaderno de cáncer de próstata con guías NCCN/EAU/ESMO y ensayos pivotales. Llevado a Gemini, crea una herramienta HTML interactiva que compara 4 fármacos en eficacia, seguridad, dosificación e interacciones relevantes. Refinable en lenguaje natural y exportable para uso clínico.
      <//>

      <h3>Horizonte: cuaderno como base de conocimiento para agentes externos</h3>
      <p>Integración futura vía MCP (Model Context Protocol). Un agente accede al cuaderno y actúa de forma autónoma usándolo como base de conocimiento: responder consultas farmacoterapéuticas, generar borradores de conciliación, u organizar contenido de sesiones clínicas.</p>
    </div>
  `
}

export function Unit9Page() {
  return html`
    <div>
      <section className="section" style=${{ background: 'var(--sefap-primary-bg)', paddingBottom: '2rem' }}>
        <div className="container">
          <span className="section-label">Unidad 9</span>
          <h1 style=${{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
            ${c.title}
          </h1>
          <p style=${{ color: 'var(--gray-500)', maxWidth: '700px', marginBottom: '2rem' }}>${c.subtitle}</p>
          <${AuthorsBio} />
        </div>
      </section>

      <div className="container" style=${{ paddingTop: '2rem' }}>
        <!-- Objectives -->
        <section className="unit-section" id="objetivos-9">
          <h2>🎯 Objetivos de aprendizaje</h2>
          <${ObjectivesList} items=${c.objectives} />
        </section>

        <!-- Introduction -->
        <section className="unit-section" id="intro-9">
          <h2>De usuario a arquitecto</h2>
          <p>El recorrido desde ser un simple usuario hasta convertirte en arquitecto de sistemas de IA se estructura en cuatro niveles de madurez digital:</p>
          <div className="intro-levels">
            ${c.introLevels.map((l, i) => html`
              <div className="intro-level" key=${i}>
                <div className="intro-level-number">${l.level}</div>
                <h4>${l.name}</h4>
                <p>${l.desc}</p>
              </div>
            `)}
          </div>
        </section>

        <!-- Three Layers -->
        <section className="unit-section" id="capas-9">
          <h2>Las tres capas del cuaderno</h2>
          <${LayerTabs}>
            ${[html`<${Layer1Content} />`, html`<${Layer2Content} />`, html`<${Layer3Content} />`]}
          <//>
        </section>

        <!-- Best Practices -->
        <section className="unit-section" id="buenas-practicas-9">
          <h2>✅ Buenas prácticas y errores habituales</h2>
          <${Checklist} items=${c.bestPractices} />
        </section>

        <!-- Use Cases -->
        <section className="unit-section" id="casos-9">
          <h2>Casos de uso en Farmacia de Atención Primaria</h2>
          <${UseCaseList} items=${c.useCases} />
        </section>

        <!-- Synthesis -->
        <section className="unit-section" id="sintesis-9">
          <h2>Síntesis: el sistema completo</h2>
          <p>La lógica de acumulación: <strong>Arquitectura</strong> determina qué puede hacer → <strong>Agentización</strong> determina cómo se comporta → <strong>Conexión</strong> complementa y extiende la herramienta.</p>
          <${SynthesisDiagram} />
          <${HighlightedQuote} tip label="Distinción clave">
            <strong>Usuario vs. Arquitecto = Herramienta vs. Sistema.</strong> El sistema no garantiza respuestas correctas (eso lo aporta el juicio profesional), pero garantiza: comportamiento predecible, trazabilidad y capacidad de mejora.
          <//>
        </section>

        <!-- Bibliography -->
        <section className="unit-section" id="biblio-9">
          <${BibliographySection} items=${c.bibliography} />
        </section>

        <!-- Quiz -->
        <section className="unit-section" id="quiz-9" style=${{ background: 'var(--gray-50)', padding: '2rem', borderRadius: 'var(--radius-xl)', marginTop: '2rem' }}>
          <h2 style=${{ textAlign: 'center' }}>📝 Quiz — Unidad 9</h2>
          <p style=${{ textAlign: 'center', color: 'var(--gray-500)', marginBottom: '2rem' }}>Pon a prueba tus conocimientos. Necesitas 3/5 para aprobar.</p>
          <${QuizContainer} questions=${unit9Quiz} />
        </section>

        <!-- Pasapalabra -->
        <section className="unit-section" id="pasapalabra-9" style=${{ background: 'var(--gray-900)', color: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-xl)', marginTop: '2rem' }}>
          <h2 style=${{ textAlign: 'center', color: 'var(--white)' }}>🔤 Pasapalabra — Unidad 9</h2>
          <p style=${{ textAlign: 'center', color: 'var(--gray-400)', marginBottom: '1rem' }}>7 letras, 150 segundos. ¿Cuántas acertarás?</p>
          <${PasapalabraContainer} letters=${unit9Pasapalabra} />
        </section>
      </div>
    </div>
  `
}
