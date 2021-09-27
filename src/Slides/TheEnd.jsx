import React from 'react'

const TheEnd = ({ step }) => (
  <div id="the-end-slide" className="slide-container">
    <div
      className="container slide centered"
      style={{ justifyContent: 'start', marginTop: '30vh' }}
    >
      <p className="title is-1 has-text-white">Thank you for listening !</p>
      <p className="subtitle is-3 has-text-white">Questions?</p>
      <span role="img" aria-label="thinking" style={{ fontSize: '90px' }}>
        🤔
      </span>
      <small className="has-text-white" style={{marginTop: '200px'}}><i>Psst, on recrute chez October!</i></small>
    </div>
    <div className="footer">
      <span>
        <i className="fab fa-twitter fa-2x" /> @Errorname_
      </span>
      <span>
        <i className="fab fa-github fa-2x" /> Errorname
      </span>
      <span>
        <i className="fas fa-globe fa-2x" /> https://errorna.me
      </span>
    </div>
  </div>
)

TheEnd.steps = 1

export default TheEnd
