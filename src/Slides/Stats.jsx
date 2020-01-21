import React from 'react'

const Stats = ({ step }) => (
  <div className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">A quel point sommes-nous nuls ?</p>

      <p
        className="subtitle is-3 has-text-white"
        style={{ visibility: step >= 2 ? 'initial' : 'hidden' }}
      >
        Pourcentage de sites ayant au moins une erreur WCAG ?
      </p>

      <p
        className="subtitle is-1 has-text-white"
        style={{
          fontSize: '90px',
          margin: '140px 0',
          visibility: step >= 3 ? 'initial' : 'hidden'
        }}
      >
        97.8%
      </p>

      <i
        style={{ fontSize: '1.1em', color: 'white', visibility: step >= 3 ? 'initial' : 'hidden' }}
      >
        Source: WebAIM
      </i>
    </div>
  </div>
)

Stats.steps = 3

export default Stats
