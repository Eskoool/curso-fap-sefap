import { html, useState, useEffect, useRef, Link, Icon, copyToClipboard } from './lib.js'
import { authors } from './data.js'

// ============ HEADER ============
export function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return html`
    <header className="header">
      <div className="header-inner">
        <a href="#/" className="header-logo" onClick=${() => setMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#0A7E8C"/>
            <text x="20" y="25" textAnchor="middle" fill="white" fontWeight="800" fontSize="16" fontFamily="Inter,sans-serif">S</text>
          </svg>
          <span>SEFAP · Curso IA</span>
        </a>
        <button className="mobile-menu-btn" onClick=${() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <${Icon} name="menu" size=${24} />
        </button>
        <nav className=${'header-nav' + (menuOpen ? ' open' : '')}>
          <${Link} to="/" className="header-nav-link" activeClass="active" currentRoute=${route}
            onClick=${() => setMenuOpen(false)}>Inicio<//>
          <${Link} to="/unidad-9" className="header-nav-link" activeClass="active" currentRoute=${route}
            onClick=${() => setMenuOpen(false)}>Unidad 9<//>
          <${Link} to="/unidad-10" className="header-nav-link" activeClass="active" currentRoute=${route}
            onClick=${() => setMenuOpen(false)}>Unidad 10<//>
        </nav>
      </div>
    </header>
  `
}

// ============ FOOTER ============
export function Footer() {
  return html`
    <footer className="footer">
      <p>Hecho con <span className="footer-heart">❤️</span> por Yared para ustedes</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/yared-gonz%C3%A1lez-p%C3%A9rez/" target="_blank" rel="noopener">LinkedIn Yared</a>
        <a href="https://es.linkedin.com/in/alfredomonterodelgado" target="_blank" rel="noopener">LinkedIn Alfredo</a>
      </div>
    </footer>
  `
}

// ============ AUTHORS BIO ============
export function AuthorsBio() {
  return html`
    <div className="authors-row">
      ${authors.map((a, i) => html`
        <div className="author-card" key=${i}>
          <img className="author-photo" src=${a.photo} alt=${a.name} />
          <div className="author-info">
            <h4>${a.name}</h4>
            <p>${a.role}</p>
            <div className="author-links">
              <a href="mailto:${a.email}"><${Icon} name="mail" size=${14} /> ${a.email}</a>
              <a href=${a.linkedin} target="_blank" rel="noopener"><${Icon} name="linkedin" size=${14} /> LinkedIn</a>
            </div>
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ OBJECTIVES LIST ============
export function ObjectivesList({ items }) {
  return html`
    <ul className="objectives-list">
      ${items.map((item, i) => html`
        <li key=${i} className="animate-in">
          <span className="obj-number">${i + 1}</span>
          <span>${item}</span>
        </li>
      `)}
    </ul>
  `
}

// ============ HIGHLIGHTED QUOTE ============
export function HighlightedQuote({ children, label, tip }) {
  return html`
    <div className=${'highlight-quote' + (tip ? ' tip' : '')}>
      ${label && html`<div className="highlight-quote-label">${label}</div>`}
      <div>${children}</div>
    </div>
  `
}

// ============ CASE STUDY ============
export function CaseStudy({ title, children }) {
  return html`
    <div className="case-study">
      <div className="case-study-label">
        <${Icon} name="lightbulb" size=${14} /> Caso práctico
      </div>
      <h4>${title}</h4>
      <p>${children}</p>
    </div>
  `
}

// ============ INTERACTIVE TABLE (Card Grid) ============
export function InteractiveTable({ items, renderItem }) {
  return html`
    <div className="itable-grid">
      ${items.map((item, i) => html`
        <div className="itable-card" key=${i}>
          ${renderItem(item)}
        </div>
      `)}
    </div>
  `
}

// ============ COMPARISON TABLE ============
export function ComparisonTable({ items, leftLabel, rightLabel, leftColor, rightColor }) {
  return html`
    <div className="comparison-table" style=${{ borderColor: 'var(--gray-200)' }}>
      <div className="comparison-header" style=${{ background: leftColor || 'var(--sefap-primary)' }}>${leftLabel}</div>
      <div className="comparison-header" style=${{ background: rightColor || 'var(--sefap-accent)' }}>${rightLabel}</div>
      ${items.map((item, i) => html`
        <div className="comparison-row" key=${i}>
          <div className="comparison-cell" style=${{ background: i % 2 === 0 ? 'var(--gray-50)' : 'var(--white)' }}>
            <span>${item.need}</span>
          </div>
          <div className="comparison-cell" style=${{ background: i % 2 === 0 ? 'var(--gray-50)' : 'var(--white)' }}>
            ${item.notebook !== undefined
              ? html`<span style=${{ color: item.notebook ? 'var(--correct)' : 'var(--incorrect)', fontWeight: 600 }}>
                  ${item.notebook ? '✓ Sí' : '✗ No'}
                </span>`
              : html`<span>${item.right}</span>`
            }
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ CHECKLIST ============
export function Checklist({ items }) {
  return html`
    <div className="checklist">
      ${items.map((item, i) => html`
        <div className="checklist-item" key=${i}>
          <span className="checklist-layer" style=${{
            color: item.layer === 'Arquitectura' ? 'var(--layer-1)' :
              item.layer === 'Agentización' ? 'var(--layer-2)' :
              item.layer === 'Conexión' ? 'var(--layer-3)' : 'var(--gray-500)'
          }}>${item.layer}</span>
          <div>
            <span className="checklist-good">${item.good}</span>
          </div>
          <div>
            <span className="checklist-bad">${item.bad}</span>
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ USE CASE LIST ============
export function UseCaseList({ items }) {
  return html`
    <div className="usecase-list">
      ${items.map((item, i) => html`
        <div className="usecase-item" key=${i}>
          <div className="usecase-number">${i + 1}</div>
          <div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ BIBLIOGRAPHY ============
export function BibliographySection({ items }) {
  const [open, setOpen] = useState(false)
  return html`
    <div className="biblio-section">
      <button className=${'biblio-toggle' + (open ? ' open' : '')} onClick=${() => setOpen(!open)}>
        <${Icon} name="book-open" size=${18} />
        <span>Bibliografía (${items.length} referencias)</span>
        <${Icon} name="chevron-down" size=${16} />
      </button>
      ${open && html`
        <ol className="biblio-list">
          ${items.map((ref, i) => html`<li key=${i}>${ref}</li>`)}
        </ol>
      `}
    </div>
  `
}

// ============ LAYER TABS ============
export function LayerTabs({ children }) {
  const [active, setActive] = useState(0)
  const layers = [
    { label: 'Capa 1 — Arquitectura', color: 1 },
    { label: 'Capa 2 — Agentización', color: 2 },
    { label: 'Capa 3 — Conectado', color: 3 },
  ]
  return html`
    <div>
      <div className="layer-tabs">
        ${layers.map((l, i) => html`
          <button key=${i}
            className=${'layer-tab' + (active === i ? ` active-${l.color}` : '')}
            onClick=${() => setActive(i)}>
            ${l.label}
          </button>
        `)}
      </div>
      <div className=${'layer-content border-' + (active + 1)}>
        ${children[active]}
      </div>
    </div>
  `
}

// ============ SYNTHESIS DIAGRAM ============
export function SynthesisDiagram() {
  const layers = [
    { name: 'Capa 3 — Conexión', desc: 'Complementa y extiende la herramienta', color: 'var(--layer-3)' },
    { name: 'Capa 2 — Agentización', desc: 'Determina cómo se comporta', color: 'var(--layer-2)' },
    { name: 'Capa 1 — Arquitectura', desc: 'Determina qué puede hacer el cuaderno', color: 'var(--layer-1)' },
  ]
  return html`
    <div className="synthesis">
      ${layers.map((l, i) => html`
        <div key=${i}>
          ${i > 0 && html`<div className="synthesis-arrow" style=${{ margin: '0 auto' }}></div>`}
          <div className="synthesis-layer" style=${{ background: l.color }}>
            <h4>${l.name}</h4>
            <p>${l.desc}</p>
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ PROMPT TEMPLATE ============
export function PromptTemplate({ title, content }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await copyToClipboard(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return html`
    <div className="prompt-box">
      <div className="prompt-box-header">
        <span className="prompt-box-title">${title}</span>
        <button className=${'copy-btn' + (copied ? ' copied' : '')} onClick=${handleCopy}>
          ${copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <div>${content}</div>
    </div>
  `
}

// ============ CREAR METHODOLOGY ============
export function MethodologyCREAR() {
  const letters = [
    { letter: 'C', word: 'Contexto', desc: 'Quién eres, en qué curso estás, qué dificultad tienes', color: '#0A7E8C' },
    { letter: 'R', word: 'Resultados', desc: 'Qué quieres ver o conseguir con la herramienta', color: '#3B82F6' },
    { letter: 'E', word: 'Experiencia', desc: 'Los pasos que da el usuario dentro de la app', color: '#6C5CE7' },
    { letter: 'A', word: 'Acciones', desc: 'Lista de funcionalidades que quieres que tenga', color: '#E8843C' },
    { letter: 'R', word: 'Restricciones', desc: 'Limitaciones técnicas, legales o de despliegue', color: '#EF4444' },
  ]
  return html`
    <div className="crear-grid">
      ${letters.map((l, i) => html`
        <div className="crear-box" key=${i} style=${{ borderColor: l.color, background: l.color + '08' }}>
          <div className="crear-letter" style=${{ color: l.color }}>${l.letter}</div>
          <div className="crear-word" style=${{ color: l.color }}>${l.word}</div>
          <div className="crear-desc">${l.desc}</div>
        </div>
      `)}
    </div>
  `
}

// ============ TECH STACK BADGES ============
export function TechStackBadges({ levels }) {
  return html`
    <div className="stack-levels">
      ${levels.map((level, i) => html`
        <div key=${i}>
          <div className="stack-level-header">
            <span className="stack-level-badge" style=${{ background: level.color }}>${'★'.repeat(i + 1)}</span>
            <span className="stack-level-name">${level.level}</span>
          </div>
          <div className="stack-tools">
            ${level.tools.map((tool, j) => html`
              <span className="stack-tool" key=${j}>${tool}</span>
            `)}
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ COMPETENCY DNA ============
export function CompetencyDNA({ digcomp, ofil }) {
  return html`
    <div className="competency-dna">
      <div className="dna-silhouette">
        <div className="dna-body">
          <svg viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="40" r="28" fill="var(--sefap-primary-light)" stroke="var(--sefap-primary)" strokeWidth="2"/>
            <text x="90" y="44" textAnchor="middle" fill="var(--sefap-primary)" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">FAP</text>
            <path d="M 90 68 L 90 180" stroke="var(--sefap-primary)" strokeWidth="3"/>
            <path d="M 90 90 L 40 130" stroke="var(--sefap-primary)" strokeWidth="3"/>
            <path d="M 90 90 L 140 130" stroke="var(--sefap-primary)" strokeWidth="3"/>
            <path d="M 90 180 L 55 260" stroke="var(--sefap-primary)" strokeWidth="3"/>
            <path d="M 90 180 L 125 260" stroke="var(--sefap-primary)" strokeWidth="3"/>
            <!-- DNA helix hint -->
            <path d="M 70 100 Q 90 115 110 100" stroke="var(--sefap-accent)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
            <path d="M 70 130 Q 90 115 110 130" stroke="var(--sefap-accent)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
            <path d="M 70 145 Q 90 160 110 145" stroke="var(--sefap-accent)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
            <path d="M 70 175 Q 90 160 110 175" stroke="var(--sefap-accent)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
          </svg>
        </div>
      </div>
      <div className="dna-labels">
        <h4 style=${{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>DigComp 3.0</h4>
        ${digcomp.map((c, i) => html`
          <div className="dna-label" key=${i} style=${{ borderLeftColor: 'var(--sefap-primary)' }}>
            <strong>${c.id}</strong> — ${c.name}
            <div style=${{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>${c.desc}</div>
          </div>
        `)}
        <h4 style=${{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.1rem' }}>6 Competencias OFIL-ILAPHAR</h4>
        ${ofil.map((c, i) => html`
          <div className="dna-label" key=${i} style=${{ borderLeftColor: 'var(--sefap-accent)' }}>
            <strong>${i + 1}.</strong> ${c}
          </div>
        `)}
      </div>
    </div>
  `
}

// ============ REGULATION SCHEMA ============
export function RegulationSchema({ items }) {
  return html`
    <div className="regulation-schema">
      ${items.map((item, i) => html`
        <div className="regulation-item" key=${i}>
          <div className="regulation-icon">${item.icon}</div>
          <div>
            <strong style=${{ display: 'block', marginBottom: '0.25rem' }}>${item.title}</strong>
            <span style=${{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>${item.desc}</span>
          </div>
        </div>
      `)}
    </div>
  `
}

// ============ DISCLAIMER ============
export function Disclaimer({ text }) {
  return html`
    <div className="disclaimer">
      <span className="disclaimer-icon">⚖️</span>
      <div>${text}</div>
    </div>
  `
}

// ============ PROCESS FLOW ============
export function ProcessFlow({ steps }) {
  return html`
    <div className="process-flow">
      ${steps.map((step, i) => html`
        <div key=${i}>
          ${i > 0 && html`<div className="process-connector"></div>`}
          <div className="process-step">
            <span className="process-step-number">${i + 1}</span>
            <span style=${{ fontSize: '0.9rem' }}>${step}</span>
          </div>
        </div>
      `)}
    </div>
  `
}
