import { html, useState } from './lib.js'

export function QuizContainer({ questions, title }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [results, setResults] = useState([])
  const [finished, setFinished] = useState(false)

  const q = questions[current]

  const handleSelect = (idx) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    setResults([...results, { questionId: q.id, selected: idx, correct: idx === q.correctIndex }])
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  const handleRetry = () => {
    setCurrent(0)
    setSelected(null)
    setShowFeedback(false)
    setResults([])
    setFinished(false)
  }

  const score = results.filter(r => r.correct).length

  if (finished) {
    const passed = score >= 3
    return html`
      <div className="quiz-container">
        <div className="quiz-summary">
          <h3>Resultado del Quiz</h3>
          <div className=${'quiz-score ' + (passed ? 'pass' : 'fail')}>
            ${score} / ${questions.length}
          </div>
          <p style=${{ color: 'var(--gray-500)', marginBottom: '1rem' }}>
            ${passed ? '¡Enhorabuena! Has superado el quiz.' : 'No has alcanzado el mínimo (3/5). ¡Inténtalo de nuevo!'}
          </p>
          <div style=${{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left', marginBottom: '1.5rem' }}>
            ${results.map((r, i) => html`
              <div key=${i} style=${{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <span style=${{ color: r.correct ? 'var(--correct)' : 'var(--incorrect)', fontWeight: 700 }}>
                  ${r.correct ? '✓' : '✗'}
                </span>
                <span style=${{ color: 'var(--gray-600)' }}>Pregunta ${i + 1}: ${r.correct ? 'Correcta' : 'Incorrecta'}</span>
              </div>
            `)}
          </div>
          <button className="quiz-retry-btn" onClick=${handleRetry}>Reintentar Quiz</button>
        </div>
      </div>
    `
  }

  return html`
    <div className="quiz-container">
      <div className="quiz-progress">
        ${questions.map((_, i) => {
          let cls = 'quiz-progress-dot'
          if (i < current) cls += results[i]?.correct ? ' done' : ' wrong'
          else if (i === current) cls += ' current'
          return html`<div key=${i} className=${cls}></div>`
        })}
      </div>

      <div className="quiz-question-number">Pregunta ${current + 1} de ${questions.length}</div>
      <div className="quiz-question">${q.question}</div>

      <div className="quiz-options">
        ${q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (showFeedback) {
            cls += ' disabled'
            if (i === selected && i === q.correctIndex) cls += ' selected correct'
            else if (i === selected && i !== q.correctIndex) cls += ' selected incorrect'
            else if (i === q.correctIndex) cls += ' correct-reveal'
          }
          return html`
            <button key=${i} className=${cls}
              onClick=${() => handleSelect(i)}
              disabled=${showFeedback}>
              ${opt}
            </button>
          `
        })}
      </div>

      ${showFeedback && html`
        <div className=${'quiz-feedback ' + (selected === q.correctIndex ? 'correct' : 'incorrect')}>
          <strong>${selected === q.correctIndex ? '¡Correcto!' : 'Incorrecto'}</strong>
          <p style=${{ marginTop: '0.5rem', marginBottom: 0 }}>${q.justification}</p>
        </div>
        <button className="quiz-next-btn" onClick=${handleNext}>
          ${current < questions.length - 1 ? 'Siguiente pregunta →' : 'Ver resultado'}
        </button>
      `}
    </div>
  `
}
