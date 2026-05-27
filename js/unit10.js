import { html } from './lib.js'
import { unit10Content, unit10Quiz, unit10Pasapalabra } from './data.js'
import {
  AuthorsBio, ObjectivesList, HighlightedQuote, Disclaimer,
  UseCaseList, BibliographySection, PromptTemplate,
  MethodologyCREAR, TechStackBadges, CompetencyDNA,
  RegulationSchema, ProcessFlow
} from './components.js'
import { QuizContainer } from './quiz.js'
import { PasapalabraContainer } from './pasapalabra.js'

const c = unit10Content

export function Unit10Page() {
  return html`
    <div>
      <section className="section" style=${{ background: 'var(--sefap-accent-light)', paddingBottom: '2rem' }}>
        <div className="container">
          <span className="section-label" style=${{ color: 'var(--sefap-accent)' }}>Unidad 10</span>
          <h1 style=${{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
            ${c.title}
          </h1>
          <p style=${{ color: 'var(--gray-500)', maxWidth: '700px', marginBottom: '2rem' }}>${c.subtitle}</p>
          <${AuthorsBio} />
        </div>
      </section>

      <div className="container" style=${{ paddingTop: '2rem' }}>

        <!-- Objectives -->
        <section className="unit-section" id="objetivos-10">
          <h2>🎯 Objetivos de aprendizaje</h2>
          <${ObjectivesList} items=${c.objectives} />
        </section>

        <!-- Introduction -->
        <section className="unit-section" id="intro-10">
          <h2>Introducción: la resolución de problemas y el vibecoding</h2>
          <p>En un ecosistema sanitario donde la tecnología avanza exponencialmente y la regulación lo hace linealmente (la Ley de la Disrupción), el farmacéutico de AP tiene una oportunidad única: convertirse en el <strong>traductor tecnológico</strong> que conecta las necesidades clínicas con las soluciones de ingeniería.</p>

          <h3>¿Por qué el FAP puede desarrollar esta nueva competencia?</h3>
          <p>El farmacéutico conoce los flujos de trabajo clínicos, los datos que se manejan, las restricciones legales y las necesidades reales de los pacientes. Esa visión de dominio es el activo más valioso para diseñar soluciones digitales eficaces.</p>

          <${HighlightedQuote} label="Pro Tip" tip>
            No necesitas ser ingeniero para innovar. Necesitas entender el problema mejor que nadie.
          <//>

          <div style=${{ background: 'var(--sefap-primary)', color: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-xl)', margin: '1.5rem 0', textAlign: 'center' }}>
            <p style=${{ fontSize: '1.15rem', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6, color: 'var(--white)', marginBottom: 0 }}>
              "${c.mainQuote}"
            </p>
          </div>
        </section>

        <!-- 4 Figure Cards -->
        <section className="unit-section" id="proceso-10">
          <h2>El proceso de creación digital</h2>
          <div className="figure-cards">
            ${c.figureCards.map((card, i) => html`
              <div className="figure-card" key=${i}>
                <div className="figure-card-icon">${card.icon}</div>
                <h4>${card.title}</h4>
                <p>${card.desc}</p>
              </div>
            `)}
          </div>
        </section>

        <!-- Two Vertientes -->
        <section className="unit-section" id="vertientes-10">
          <h2>Dos vertientes en el desarrollo de soluciones digitales sanitarias</h2>

          <div className="two-col">
            <div className="col-box" style=${{ borderColor: 'var(--correct)', background: 'var(--correct-bg)' }}>
              <h3 style=${{ color: 'var(--correct)' }}>${c.adHocVsSpec.adHoc.title}</h3>
              <ul>
                ${c.adHocVsSpec.adHoc.items.map((item, i) => html`<li key=${i} style=${{ color: 'var(--gray-700)' }}>${item}</li>`)}
              </ul>
            </div>
            <div className="col-box" style=${{ borderColor: 'var(--layer-2)', background: 'var(--layer-2-bg)' }}>
              <h3 style=${{ color: 'var(--layer-2)' }}>${c.adHocVsSpec.spec.title}</h3>
              <ul>
                ${c.adHocVsSpec.spec.items.map((item, i) => html`<li key=${i} style=${{ color: 'var(--gray-700)' }}>${item}</li>`)}
              </ul>
            </div>
          </div>

          <${Disclaimer} text=${c.legalDisclaimer} />
        </section>

        <!-- FAP Use Cases -->
        <section className="unit-section" id="casos-10">
          <h2>Casos de uso del Farmacéutico de Atención Primaria</h2>
          <${UseCaseList} items=${c.fapUseCases} />
          <${HighlightedQuote} label="Pro Tip" tip>
            ${c.fapProTip}
          <//>
        </section>

        <!-- Competencies & Stack -->
        <section className="unit-section" id="competencias-10">
          <h2>Competencias y Stack del Vibecoder Sanitario</h2>

          <h3>ADN del farmacéutico digital</h3>
          <${CompetencyDNA} digcomp=${c.digcomp} ofil=${c.ofilCompetencies} />

          <h3 style=${{ marginTop: '2rem' }}>Stack tecnológico por niveles</h3>
          <${TechStackBadges} levels=${c.techStack} />
        </section>

        <!-- Automation Flow -->
        <section className="unit-section" id="flujo-10">
          <h2>Flujo de automatización</h2>
          <p>El camino desde la identificación de un problema hasta la solución desplegada:</p>
          <${ProcessFlow} steps=${c.automationFlow} />
        </section>

        <!-- Regulation -->
        <section className="unit-section" id="regulacion-10">
          <h2>🛡️ Regulación: SaMD y marco legal</h2>
          <${RegulationSchema} items=${c.regulationItems} />
        </section>

        <!-- CREAR Methodology BONUS -->
        <section className="unit-section" id="crear-10" style=${{ background: 'var(--sefap-primary-bg)', padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
          <h2 style=${{ textAlign: 'center' }}>🎁 BONUS: Metodología CREAR (FRiki)</h2>
          <p style=${{ textAlign: 'center', color: 'var(--gray-500)', marginBottom: '2rem' }}>El framework para aterrizar tus proyectos digitales desde la visión clínica</p>

          <${MethodologyCREAR} />

          <h3 style=${{ marginTop: '2rem' }}>Prompt 1: Genera tu PRD con CREAR</h3>
          <${PromptTemplate} title="Prompt CREAR → PRD" content=${c.crearPrompt1} />

          <h3 style=${{ marginTop: '2rem' }}>Prompt 2: Construye desde el PRD</h3>
          <${PromptTemplate} title="Prompt Desarrollador → App" content=${c.crearPrompt2} />
        </section>

        <!-- Bibliography -->
        <section className="unit-section" id="biblio-10">
          <${BibliographySection} items=${c.bibliography} />
        </section>

        <!-- Quiz -->
        <section className="unit-section" id="quiz-10" style=${{ background: 'var(--gray-50)', padding: '2rem', borderRadius: 'var(--radius-xl)', marginTop: '2rem' }}>
          <h2 style=${{ textAlign: 'center' }}>📝 Quiz — Unidad 10</h2>
          <p style=${{ textAlign: 'center', color: 'var(--gray-500)', marginBottom: '2rem' }}>Pon a prueba tus conocimientos. Necesitas 3/5 para aprobar.</p>
          <${QuizContainer} questions=${unit10Quiz} />
        </section>

        <!-- Pasapalabra -->
        <section className="unit-section" id="pasapalabra-10" style=${{ background: 'var(--gray-900)', color: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-xl)', marginTop: '2rem' }}>
          <h2 style=${{ textAlign: 'center', color: 'var(--white)' }}>🔤 Pasapalabra — Unidad 10</h2>
          <p style=${{ textAlign: 'center', color: 'var(--gray-400)', marginBottom: '1rem' }}>7 letras, 150 segundos. ¿Cuántas acertarás?</p>
          <${PasapalabraContainer} letters=${unit10Pasapalabra} />
        </section>
      </div>
    </div>
  `
}
