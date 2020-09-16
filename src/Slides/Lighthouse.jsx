import React from 'react'

import Code from '../components/Code'

const Lighthouse = ({ step }) => (
  <div id="lighthouse-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Lighthouse</p>

      {step === 2 && (
        <img
          src={process.env.PUBLIC_URL + '/images/lighthouse_logo.png'}
          alt="Lighthouse demo"
          style={{ maxWidth: '400px' }}
        />
      )}

      {step === 3 && (
        <img
          src={process.env.PUBLIC_URL + '/images/lighthouse_extension.png'}
          alt="Lighthouse extension"
        />
      )}

      {step === 4 && (
        <>
          <img
            src={process.env.PUBLIC_URL + '/images/lighthouse_report_snowcamp.png'}
            alt="Lighthouse report commonly found"
          />
          <i style={{ marginTop: '2em', fontSize: '1.1em', color: 'white' }}>
            {/*Rapport de https://snowcamp.io*/}
            Rapport que l'on peut trouver sur de nombreux sites
          </i>
        </>
      )}

      {step === 5 && (
        <>
          <img
            src={process.env.PUBLIC_URL + '/images/lighthouse_report_bento.png'}
            alt="Lighthouse report bento-starter"
          />
          <i style={{ marginTop: '2em', fontSize: '1.1em', color: 'white' }}>
            Rapport de Bento Starter
          </i>
        </>
      )}

      {step === 6 && (
        <Code style={{ marginBottom: '5em' }}>$ npm install -g lighthouse lighthouse-ci</Code>
      )}

      {step === 7 && (
        <img
          src={process.env.PUBLIC_URL + '/images/demo.png'}
          alt="Live demo"
          style={{ maxWidth: '500px' }}
        />
      )}
    </div>
  </div>
)

Lighthouse.steps = 7

export default Lighthouse
