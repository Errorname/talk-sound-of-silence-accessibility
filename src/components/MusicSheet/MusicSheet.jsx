import React, { useState, useEffect } from 'react'

import './MusicSheet.scss'

const MusicSheet = () => {
  const [music, setMusic] = useState([])
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(show => !show)
    }, 9000)

    return () => clearInterval(interval)
  }, [setShow])

  useEffect(() => {
    if (show) {
      const next = [...new Array(5)].map(() =>
        [...new Array(4)].map(() => ({
          letter: 'abdeg'[Math.floor(Math.random() * 5)],
          type: Math.random() < 0.25 ? 'double' : 'single'
        }))
      )
      setMusic(next)
    }
  }, [show, setMusic])

  return (
    <div className="wrapper" key={show ? 'showing' : 'hiding'}>
      <div className="sheet-music">
        <ul className="sheet-music__staff">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="sheet-music__items">
          <div className="treble">
            <img src={process.env.PUBLIC_URL + '/images/treble.svg'} alt="" />
          </div>

          <div className="notes">
            {music.map((measure, i) => {
              const delay = i * 1.25 + 1.75
              return (
                <div
                  className="notes__measure"
                  style={{
                    opacity: show ? '0' : '1',
                    animation: `${show ? 'display' : 'hide'} 1s linear ${delay +
                      (show ? 0 : 1.25)}s`,
                    WebkitAnimationFillMode: 'forwards'
                  }}
                  key={i}
                >
                  {measure.map((note, j) => {
                    const note_delay = delay + 0.25 + j * 0.25
                    return (
                      <i
                        className={`ion-ios-musical-note${
                          note.type === 'double' ? 's' : ''
                        } note--${note.letter}`}
                        style={{
                          opacity: show ? '0' : '1',
                          animation: `${show ? 'display' : 'hide'} 1s linear ${note_delay}s`,
                          WebkitAnimationFillMode: 'forwards'
                        }}
                        key={j}
                      ></i>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicSheet
