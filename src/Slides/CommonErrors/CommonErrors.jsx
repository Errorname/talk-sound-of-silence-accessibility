import React from 'react'

import './CommonErrors.scss'

const errors = [
  { step: 2, type: 'Low contrast', percentage: 85.3 },
  { step: 5, type: 'Missing alternative text', percentage: 68 },
  { step: 10, type: 'Empty links', percentage: 58.1 },
  { step: 14, type: 'Missing form labels', percentage: 52.8 },
  { step: 17, type: 'Missing document language', percentage: 33.1 },
  { step: 20, type: 'Empty buttons', percentage: 25 },
]

const CommonErrors = ({ step }) => (
  <div id="common-errors-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Les erreurs les plus communes</p>

      {(!!errors.find((err) => err.step === step) ||
        !!errors.find((err) => err.step - 1 === step) ||
        step === CommonErrors.steps) && (
        <>
          <ul className="chart">
            {errors.map(({ step: error_step, type, percentage }, index) => (
              <li key={type}>
                <span
                  style={{
                    height: error_step <= step ? percentage + '%' : '0%',
                    visibility: error_step <= step ? 'visible' : 'hidden',
                  }}
                  title={type}
                >
                  {percentage}%
                </span>
              </li>
            ))}
          </ul>
          <i
            style={{ fontSize: '1.1em', color: 'white', marginTop: '100px', marginBottom: '-50px' }}
          >
            Source: WebAIM
          </i>
        </>
      )}
      {step === 3 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px',
          }}
        >
          <span style={{ fontSize: '1.8em', color: 'white' }}>aremycolorsaccessible.com</span>
          <iframe
            title="Color picker"
            src="https://aremycolorsaccessible.com/"
            style={{
              marginTop: '-220px',
              width: '2000px',
              height: '1000px',
              //zoom: '0.5'
              transform: 'scale(0.5)',
            }}
          />
        </div>
      )}
      {step === 6 && (
        <img
          src={process.env.PUBLIC_URL + '/images/common_errors_alt_text.png'}
          alt="Code for alt text"
          style={{ maxWidth: '1000px' }}
        />
      )}
      {step === 7 && (
        <img
          src={process.env.PUBLIC_URL + '/images/cat_dragon.jpeg'}
          alt="My cute cat looking at me over the table"
          style={{ maxWidth: '650px' }}
        />
      )}
      {step === 8 && (
        <img
          src={process.env.PUBLIC_URL + '/images/common_errors_alt_text2.png'}
          alt="Code for alt text"
          style={{ maxWidth: '1000px' }}
        />
      )}
      {(step === 11 || step === 12) && (
        <div
          style={{
            overflow: 'hidden',
            height: step === 11 ? '170px' : 'auto',
            marginBottom: step === 11 ? '177px' : '0',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/common_errors_empty_link.png'}
            alt="Code for empty link"
            style={{ maxWidth: '1000px' }}
          />
        </div>
      )}
      {step === 15 && (
        <img
          src={process.env.PUBLIC_URL + '/images/common_errors_missing_label.png'}
          alt="Code for missing label"
          style={{ maxWidth: '800px' }}
        />
      )}
      {step === 18 && (
        <img
          src={process.env.PUBLIC_URL + '/images/common_errors_missing_document_language.png'}
          alt="Code for missing document language"
          style={{ maxWidth: '800px' }}
        />
      )}
      {(step === 21 || step === 22) && (
        <div
          style={{
            overflow: 'hidden',
            height: step === 21 ? '125px' : 'auto',
            marginBottom: step === 21 ? '137px' : '0',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/common_errors_empty_button.png'}
            alt="Code for empty link"
            style={{ maxWidth: '1000px' }}
          />
        </div>
      )}
    </div>
  </div>
)

CommonErrors.steps = 23

export default CommonErrors
