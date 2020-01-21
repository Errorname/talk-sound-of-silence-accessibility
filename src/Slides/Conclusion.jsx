import React from 'react'

const Conclusion = ({ step }) => (
  <div className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Conclusion</p>
      <div style={{ display: 'flex', width: '1200px', justifyContent: 'space-between' }}>
        <img
          src={process.env.PUBLIC_URL + '/images/wcag2.jpg'}
          alt="Logo WCAG"
          style={{
            width: '400px',
            objectFit: 'contain',
            visibility: step >= 2 ? 'visible' : 'hidden'
          }}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/europeancommission.webp'}
          alt="Logo Commission Europeenne"
          style={{
            width: '550px',
            objectFit: 'contain',
            visibility: step >= 3 ? 'visible' : 'hidden'
          }}
        />
      </div>
      <img
        src={process.env.PUBLIC_URL + '/images/CI.png'}
        alt="Continuous Integration"
        style={{
          width: '550px',
          objectFit: 'contain',
          marginTop: '60px',
          visibility: step >= 4 ? 'visible' : 'hidden'
        }}
      />
    </div>
  </div>
)

Conclusion.steps = 4

export default Conclusion
