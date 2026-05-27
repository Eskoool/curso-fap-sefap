import { createRoot } from 'react-dom/client'
import { html, useRoute, useScrollReveal } from './lib.js'
import { Header, Footer } from './components.js'
import { LandingPage } from './landing.js'
import { Unit9Page } from './unit9.js'
import { Unit10Page } from './unit10.js'

function NotFoundPage() {
  return html`
    <div className="container" style=${{ textAlign: 'center', padding: '6rem 1.5rem' }}>
      <h1 style=${{ fontSize: '4rem', fontWeight: 800, color: 'var(--gray-300)', marginBottom: '1rem' }}>404</h1>
      <p style=${{ fontSize: '1.1rem', color: 'var(--gray-500)', marginBottom: '2rem' }}>Página no encontrada</p>
      <a href="#/" style=${{ color: 'var(--sefap-primary)', fontWeight: 600 }}>← Volver al inicio</a>
    </div>
  `
}

function App() {
  const route = useRoute()
  useScrollReveal()

  let Page
  switch (route) {
    case '/': Page = LandingPage; break
    case '/unidad-9': Page = Unit9Page; break
    case '/unidad-10': Page = Unit10Page; break
    default: Page = NotFoundPage
  }

  return html`
    <div>
      <${Header} route=${route} />
      <main>
        <${Page} />
      </main>
      <${Footer} />
    </div>
  `
}

const root = createRoot(document.getElementById('root'))
root.render(html`<${App} />`)
