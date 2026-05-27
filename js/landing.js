import { html } from './lib.js'
import { courseInfo } from './data.js'
import { Icon } from './lib.js'
import { navigate } from './lib.js'

export function LandingPage() {
  return html`
    <div>
      <!-- HERO -->
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>📚</span> ${courseInfo.edition} · ${courseInfo.organizer}
          </div>
          <h1>${courseInfo.title}</h1>
          <p>${courseInfo.audience}</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">${courseInfo.totalHours}h</div>
              <div className="hero-stat-label">Horas totales</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">${courseInfo.syncHours}h</div>
              <div className="hero-stat-label">Síncronas (Zoom)</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">${courseInfo.asyncHours}h</div>
              <div className="hero-stat-label">Asíncronas</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">${courseInfo.places}</div>
              <div className="hero-stat-label">Plazas</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCHEDULE -->
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Programa</span>
            <h2>Sesiones síncronas (Zoom)</h2>
            <p>10 sesiones de abril a mayo de 2026</p>
          </div>
          <div className="schedule-grid">
            ${courseInfo.sessions.map((s, i) => html`
              <div key=${i} className=${'schedule-item' + (s.highlight ? ' highlight' : '')}>
                <span className="schedule-date">
                  <${Icon} name="clock" size=${14} /> ${s.date}
                  <br/><small>${s.time}</small>
                </span>
                <span className="schedule-title">
                  <strong>U${s.n}.</strong> ${s.title}
                </span>
                <span className="schedule-instructor">${s.instructor}</span>
              </div>
            `)}
          </div>
        </div>
      </section>

      <!-- EVALUATION -->
      <section className="section" style=${{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Evaluación</span>
            <h2>Evaluación por desempeño</h2>
          </div>
          <div className="eval-card">
            <div className="eval-item">
              <div className="eval-icon"><${Icon} name="users" size=${16} /></div>
              <div className="eval-text">${courseInfo.evaluation.attendance}</div>
            </div>
            <div className="eval-item">
              <div className="eval-icon"><${Icon} name="clipboard" size=${16} /></div>
              <div className="eval-text">${courseInfo.evaluation.unitTest}</div>
            </div>
            <div className="eval-item">
              <div className="eval-icon"><${Icon} name="award" size=${16} /></div>
              <div className="eval-text">${courseInfo.evaluation.finalExam}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- UNIT CARDS -->
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Contenido interactivo</span>
            <h2>Unidades disponibles</h2>
            <p>Explora el contenido, pon a prueba tus conocimientos con quizzes y juega al Pasapalabra</p>
          </div>
          <div className="unit-cards">
            <div className="unit-card" onClick=${() => navigate('/unidad-9')}>
              <div className="unit-card-number" style=${{ background: 'var(--sefap-primary)' }}>9</div>
              <h3>NotebookLM avanzado</h3>
              <p>El cuaderno como sistema de IA: arquitectura, agentización y conexión. Saca todo el provecho a esta herramienta.</p>
              <span className="unit-card-arrow">
                Explorar unidad <${Icon} name="arrow-right" size=${16} />
              </span>
            </div>
            <div className="unit-card" onClick=${() => navigate('/unidad-10')}>
              <div className="unit-card-number" style=${{ background: 'var(--sefap-accent)' }}>10</div>
              <h3>Creación de soluciones digitales</h3>
              <p>De vibecoder a arquitecto: metodología CREAR, competencias digitales y stack tecnológico del FAP.</p>
              <span className="unit-card-arrow">
                Explorar unidad <${Icon} name="arrow-right" size=${16} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}
