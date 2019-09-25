import React, { useState, useEffect } from 'react'

import speech from '../../services/speechRecognition'

import './Subtitles.scss'

const Subtitles = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    speech.onUpdate(setText)
    speech.start()
  }, [])

  return (
    <div className="subtitles-wrapper">
      {text && (
        <div className="subtitles">
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

export default Subtitles
