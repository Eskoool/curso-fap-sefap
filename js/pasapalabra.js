import { html, useState, useEffect, useRef, useCallback, normalizeAnswer } from './lib.js'

const TIMER_SECONDS = 150

function getLetterPositions(letters, cx, cy, r) {
  const n = letters.length
  const startAngle = -Math.PI / 2
  return letters.map((_, i) => {
    const angle = startAngle + (2 * Math.PI * i) / n
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })
}

export function PasapalabraContainer({ letters, title }) {
  const [gameState, setGameState] = useState('idle') // idle, playing, finished
  const [letterStates, setLetterStates] = useState(letters.map(() => 'pending'))
  const [currentIdx, setCurrentIdx] = useState(0)
  const [input, setInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS)
  const [flash, setFlash] = useState(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)

  const startGame = () => {
    setGameState('playing')
    setLetterStates(letters.map(() => 'pending'))
    setCurrentIdx(0)
    setInput('')
    setTimeLeft(TIMER_SECONDS)
    setFlash(null)
  }

  useEffect(() => {
    if (gameState !== 'playing') return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          setGameState('finished')
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [gameState])

  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) inputRef.current.focus()
  }, [currentIdx, gameState])

  const findNextPending = useCallback((fromIdx) => {
    const states = letterStates
    for (let i = 1; i <= letters.length; i++) {
      const idx = (fromIdx + i) % letters.length
      if (states[idx] === 'pending' || states[idx] === 'skipped') return idx
    }
    return -1
  }, [letterStates, letters.length])

  const advance = useCallback((newStates) => {
    const nextIdx = findNextPendingFrom(newStates, currentIdx, letters.length)
    if (nextIdx === -1) {
      setGameState('finished')
      clearInterval(timerRef.current)
    } else {
      setCurrentIdx(nextIdx)
    }
    setInput('')
  }, [currentIdx, letters.length])

  const handleSubmit = () => {
    if (!input.trim() || gameState !== 'playing') return
    const correct = normalizeAnswer(input) === normalizeAnswer(letters[currentIdx].answer)
    const newStates = [...letterStates]
    newStates[currentIdx] = correct ? 'correct' : 'incorrect'
    setLetterStates(newStates)
    setFlash({ idx: currentIdx, type: correct ? 'correct' : 'incorrect' })
    setTimeout(() => setFlash(null), 400)

    const nextIdx = findNextPendingFrom(newStates, currentIdx, letters.length)
    if (nextIdx === -1) {
      setGameState('finished')
      clearInterval(timerRef.current)
    } else {
      setCurrentIdx(nextIdx)
    }
    setInput('')
  }

  const handleSkip = () => {
    if (gameState !== 'playing') return
    const newStates = [...letterStates]
    if (newStates[currentIdx] === 'pending') newStates[currentIdx] = 'skipped'
    setLetterStates(newStates)

    const nextIdx = findNextPendingFrom(newStates, currentIdx, letters.length)
    if (nextIdx === -1) {
      setGameState('finished')
      clearInterval(timerRef.current)
    } else {
      setCurrentIdx(nextIdx)
    }
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  const handleRetry = () => {
    setGameState('idle')
    setLetterStates(letters.map(() => 'pending'))
    setCurrentIdx(0)
    setInput('')
    setTimeLeft(TIMER_SECONDS)
    setFlash(null)
  }

  const correctCount = letterStates.filter(s => s === 'correct').length
  const incorrectCount = letterStates.filter(s => s === 'incorrect').length
  const skippedCount = letterStates.filter(s => s === 'skipped' || s === 'pending').length

  // SVG dimensions
  const svgSize = 360
  const cx = svgSize / 2
  const cy = svgSize / 2
  const roscoR = svgSize / 2 - 30
  const nodeR = 20
  const positions = getLetterPositions(letters, cx, cy, roscoR)

  const stateColors = {
    pending: { fill: 'var(--gray-100)', stroke: 'var(--gray-300)', text: 'var(--gray-500)' },
    correct: { fill: 'var(--correct-bg)', stroke: 'var(--correct)', text: 'var(--correct)' },
    incorrect: { fill: 'var(--incorrect-bg)', stroke: 'var(--incorrect)', text: 'var(--incorrect)' },
    skipped: { fill: 'var(--skipped-bg)', stroke: 'var(--skipped)', text: 'var(--skipped)' },
  }

  const timerPercent = timeLeft / TIMER_SECONDS
  const timerCircumference = 2 * Math.PI * 50
  const timerOffset = timerCircumference * (1 - timerPercent)

  return html`
    <div className="pasapalabra-container">

      <div className="rosco-wrapper">
        <svg viewBox="0 0 ${svgSize} ${svgSize}" className="rosco-svg">
          <!-- Timer circle (background) -->
          <circle cx=${cx} cy=${cy} r="50" fill="none" stroke="var(--gray-200)" strokeWidth="4"/>
          ${gameState === 'playing' && html`
            <circle cx=${cx} cy=${cy} r="50" fill="none"
              stroke=${timeLeft <= 30 ? 'var(--incorrect)' : 'var(--sefap-primary)'}
              strokeWidth="4" strokeLinecap="round"
              strokeDasharray=${timerCircumference}
              strokeDashoffset=${timerOffset}
              transform="rotate(-90 ${cx} ${cy})"
              style=${{ transition: 'stroke-dashoffset 1s linear' }}
            />
          `}
          <text x=${cx} y=${cy}
            className=${'rosco-timer-text' + (timeLeft <= 30 ? ' warning' : '')}
            >${gameState === 'playing' ? timeLeft : (gameState === 'finished' ? '🏁' : '▶')}</text>

          <!-- Letter nodes -->
          ${letters.map((l, i) => {
            const pos = positions[i]
            const state = letterStates[i]
            const colors = stateColors[state]
            const isCurrent = gameState === 'playing' && i === currentIdx
            const isFlashing = flash && flash.idx === i
            return html`
              <g key=${i} className=${'rosco-letter' + (isCurrent ? ' current' : '')}>
                <circle cx=${pos.x} cy=${pos.y} r=${nodeR}
                  fill=${colors.fill} stroke=${colors.stroke}
                  strokeWidth=${isCurrent ? 3 : 1.5}
                  style=${{
                    transition: 'all 0.3s ease',
                    transform: isFlashing ? `scale(1.2)` : 'scale(1)',
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                  }}
                />
                <text x=${pos.x} y=${pos.y} fill=${colors.text}
                  style=${{ fontSize: isCurrent ? '16px' : '14px', fontWeight: isCurrent ? 800 : 700,
                    fontFamily: 'Inter,sans-serif', dominantBaseline: 'central', textAnchor: 'middle' }}>
                  ${l.letter}
                </text>
              </g>
            `
          })}
        </svg>
      </div>

      ${gameState === 'idle' && html`
        <button className="btn-start" onClick=${startGame}>
          Comenzar Pasapalabra
        </button>
      `}

      ${gameState === 'playing' && html`
        <div className="clue-panel">
          <div className="clue-relation">${letters[currentIdx].relation}</div>
          <div className="clue-definition">${letters[currentIdx].definition}</div>
        </div>

        <div className="answer-row">
          <input ref=${inputRef}
            className="answer-input"
            type="text"
            placeholder="Escribe tu respuesta..."
            value=${input}
            onInput=${(e) => setInput(e.target.value)}
            onKeyDown=${handleKeyDown}
            autoComplete="off"
          />
        </div>

        <div className="game-controls">
          <button className="btn-submit" onClick=${handleSubmit} disabled=${!input.trim()}>
            Enviar
          </button>
          <button className="btn-skip" onClick=${handleSkip}>
            Pasapalabra
          </button>
        </div>
      `}

      ${gameState === 'finished' && html`
        <div className="game-over-overlay" onClick=${(e) => e.target === e.currentTarget && handleRetry()}>
          <div className="game-over-modal">
            <h3>🏁 Fin del juego</h3>
            <div className="game-over-stats">
              <div className="game-over-stat">
                <div className="game-over-stat-value" style=${{ color: 'var(--correct)' }}>${correctCount}</div>
                <div className="game-over-stat-label">Aciertos</div>
              </div>
              <div className="game-over-stat">
                <div className="game-over-stat-value" style=${{ color: 'var(--incorrect)' }}>${incorrectCount}</div>
                <div className="game-over-stat-label">Fallos</div>
              </div>
              <div className="game-over-stat">
                <div className="game-over-stat-value" style=${{ color: 'var(--skipped)' }}>${skippedCount}</div>
                <div className="game-over-stat-label">Sin responder</div>
              </div>
            </div>
            <div style=${{ textAlign: 'left', marginBottom: '1.5rem' }}>
              ${letters.map((l, i) => html`
                <div key=${i} style=${{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style=${{ fontWeight: 700, color: stateColors[letterStates[i]].stroke, minWidth: '1.5rem' }}>
                    ${l.letter}
                  </span>
                  <span style=${{ color: 'var(--gray-600)' }}>
                    ${l.answer}
                    ${letterStates[i] === 'correct' ? ' ✓' : letterStates[i] === 'incorrect' ? ' ✗' : ' —'}
                  </span>
                </div>
              `)}
            </div>
            <button className="btn-start" onClick=${handleRetry} style=${{ fontSize: '0.95rem', padding: '0.75rem 2rem' }}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      `}
    </div>
  `
}

function findNextPendingFrom(states, fromIdx, total) {
  for (let i = 1; i <= total; i++) {
    const idx = (fromIdx + i) % total
    if (states[idx] === 'pending' || states[idx] === 'skipped') return idx
  }
  return -1
}
