import React from 'react'
import MusicSheet from '../components/MusicSheet'

const Title = () => (
  <div id="title-slide" className="slide-container">
    <div className="container slide centered">
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '10px',
          textAlign: 'center',
          padding: '1em 1.5em',
          marginBottom: '8em'
        }}
      >
        <p className="title is-1 has-text-white">The Sound of Silence</p>
        <p className="subtitle is-3 has-text-white" style={{ textAlign: 'center' }}>
          Des APIs Web pour l'accessibilité des déficiences visuelles et auditives
        </p>
      </div>
      <MusicSheet />
    </div>
    <div className="footer">
      <span>
        Thibaud Courtoison - @Errorname_
      </span>
    </div>
  </div>
)

Title.steps = 1

export default Title
