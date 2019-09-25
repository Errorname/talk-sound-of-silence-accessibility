import React from 'react'

const Insights = ({ step }) => (
  <div id="insights-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Microsoft Accessibility Insights</p>

      {step === 2 && (
        <>
          <img
            src={process.env.PUBLIC_URL + '/images/insights_logo_big.png'}
            alt="Insights logo"
            style={{
              maxWidth: '300px'
            }}
          />
          <a
            href="https://accessibilityinsights.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'black',
              fontSize: '3rem',
              marginTop: '15px',
              textDecoration: 'underline'
            }}
          >
            https://accessibilityinsights.io/
          </a>
        </>
      )}

      {step === 3 && (
        <img
          src={process.env.PUBLIC_URL + '/images/insights_extension.png'}
          alt="Insights extension"
        />
      )}

      {step === 4 && (
        <img
          src={process.env.PUBLIC_URL + '/images/insights_features.png'}
          alt="Insights features"
          style={{ height: '65vh', marginTop: '-3rem' }}
        />
      )}

      {step === 5 && (
        <img
          src={process.env.PUBLIC_URL + '/images/demo.png'}
          alt="Live demo"
          style={{ maxWidth: '500px' }}
        />
      )}
    </div>
  </div>
)

Insights.steps = 5

export default Insights
