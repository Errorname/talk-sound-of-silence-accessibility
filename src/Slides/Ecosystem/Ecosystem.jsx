import React from 'react'

import './Ecosystem.scss'

const Ecosystem = ({ step }) => (
  <div id="ecosystem-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">La référence de l'accessibilité: WCAG</p>
      {step === 2 && <img src={process.env.PUBLIC_URL + '/images/wcag.png'} alt="Logo WCAG" />}
      {step === 3 && (
        <img src={process.env.PUBLIC_URL + '/images/wcag_levels.jpg'} alt="WCAG levels" />
      )}
    </div>
  </div>
)

Ecosystem.steps = 3

export default Ecosystem
