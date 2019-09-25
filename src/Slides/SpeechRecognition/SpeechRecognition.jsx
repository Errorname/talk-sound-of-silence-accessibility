import React from 'react'

const SpeechRecognition = ({ step }) => (
  <div id="speech-recognition-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Speech Recognition API</p>

      {step === 2 && (
        <img
          src={process.env.PUBLIC_URL + '/images/speech_recognition.webp'}
          alt="Speech Recognition with a woman in front of a large computer"
          style={{ maxWidth: '900px' }}
        />
      )}

      {step > 2 && (
        <div style={{ width: '1000px', height: '500px' }}>
          <div style={{ height: [null, null, null, 100, 230, 430, 500][step], overflow: 'hidden' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/speech_recognition_example.png'}
              alt="Speech recognition example"
              style={{ width: '1000px' }}
            />
          </div>
        </div>
      )}
    </div>
  </div>
)

SpeechRecognition.steps = 6

export default SpeechRecognition
