import React from 'react'

import './Description.scss'

const Description = ({ step }) => (
  <div id="description-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Qu'est ce qu'une déficience ?</p>

      {step === 2 && (
        <blockquote>
          <p className="quotation">
            Perte de substance ou altération définitive ou provisoire, d'une structure ou fonction
            psychologique, physiologique ou anatomique.
          </p>
          <footer>— Wikipédia</footer>
        </blockquote>
      )}
      {step === 3 && (
        <div
          style={{
            height: '100%',
            padding: '7.5em 0 9.5em 0',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/types.png'}
            alt="types of disabilities"
            style={{ height: '100%' }}
          />
        </div>
      )}
    </div>
  </div>
)

Description.steps = 3

export default Description
