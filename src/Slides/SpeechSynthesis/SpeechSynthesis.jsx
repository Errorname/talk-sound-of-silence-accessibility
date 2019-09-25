import React, { useState, useEffect } from 'react'

import HighFive from '../../components/HighFive'

import synth from '../../services/speechSynthesis'
import recog from '../../services/speechRecognition'

import lines from './Thomas'

const SpeechSynthesis = ({ step, setCurrent }) => {
  const [microStep, setMicroStep] = useState(0)

  const onHighFive = () => {
    setCurrent(current => ({ ...current, step: 3 }))
    setMicroStep(1)
  }

  useEffect(() => {
    if (microStep === 0) return

    if (microStep === 1) {
      recog.stop()
    }

    if (lines.length > microStep - 1) {
      const line = lines[microStep - 1]

      synth.speak(line.phon).then(() => {
        setTimeout(() => {
          setMicroStep(microStep + 1)
        }, line.after)
      })

      recog.addSentence(line.text)
    }

    if (microStep > lines.length) {
      recog.start()
    }
  }, [microStep])

  return (
    <div id="speech-synthesis-slide" className="slide-container">
      <div className="container slide centered">
        <p className="title is-1 has-text-white">SpeechSynthesis API</p>

        {step === 2 && (
          <img
            src={process.env.PUBLIC_URL + '/images/speech_synthesis_logo.svg'}
            alt="Speech synthesis logo"
            style={{ width: '500px' }}
          />
        )}
        {step === 3 && (
          <div>
            <HighFive onClick={onHighFive} />
          </div>
        )}
        {step === 4 && [1, 2].includes(microStep) && (
          <span style={{ fontSize: '100px' }} role="img" aria-label="hand waving and robot">
            👋🤖
          </span>
        )}
        {step === 4 && [3, 4].includes(microStep) && (
          <img
            src={process.env.PUBLIC_URL + '/images/speech_synthesis_team.svg'}
            style={{ width: '400px' }}
            alt="Team of voices"
          />
        )}
        {step === 4 && microStep > 4 && (
          <div style={{ width: '1000px', height: '500px' }}>
            <div
              style={{
                height: { 5: 150, 6: 210, 7: 270, 8: 270, 9: 390, 10: 450 }[microStep] || 500,
                overflow: 'hidden'
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/speech_synthesis_example.png'}
                alt="Speech synthesis example"
                style={{ width: '1000px' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

SpeechSynthesis.steps = 4

export default SpeechSynthesis
