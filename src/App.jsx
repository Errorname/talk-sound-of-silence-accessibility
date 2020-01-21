import React, { useState, useEffect } from 'react'
import './App.scss'

import { onKeyPress } from './helpers'

import Subtitles from './components/Subtitles'

import slides from './slides'

function App() {
  const [current, setCurrent] = useState(
    () =>
      (localStorage.SoundOfSilence && JSON.parse(localStorage.SoundOfSilence)) || {
        slide: 1,
        step: 1
      }
  )

  useEffect(() => {
    const callback = onKeyPress(slides, setCurrent, current)
    document.addEventListener('keydown', callback)
    return () => document.removeEventListener('keydown', callback)
  }, [setCurrent, current])

  useEffect(() => {
    localStorage.SoundOfSilence = JSON.stringify(current)
  }, [current])

  return (
    <div className="app sea-blue">
      <section className="slides" style={{ left: (current.slide - 1) * -100 + 'vw' }}>
        {slides.map((Slide, i) => {
          const step = current.slide === i + 1 ? current.step : current.slide <= i ? 1 : Slide.steps
          return <Slide step={step} key={i} setCurrent={setCurrent} />
        })}
      </section>
      <Subtitles />
    </div>
  )
}

export default App
