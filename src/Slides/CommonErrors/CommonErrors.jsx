import React from 'react'

import './CommonErrors.scss'

const errors = [
  { step: 2, type: 'Low contrast', percentage: 86.3 },
  { step: 5, type: 'Missing alternative text', percentage: 66 },
  { step: 10, type: 'Empty links', percentage: 59.9 },
  { step: 14, type: 'Missing form labels', percentage: 53.8 },
  { step: 17, type: 'Empty buttons', percentage: 28.7 },
  { step: 22, type: 'Missing document language', percentage: 28 },
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
            marginTop: '200px',
          }}
        >
          <span style={{ fontSize: '1.8em', color: 'white' }}>aremycoloursaccessible.com</span>
          <iframe
            title="Color picker"
            src="https://www.aremycoloursaccessible.com/"
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
          src={process.env.PUBLIC_URL + '/images/tyche.jpg'}
          alt="My cute cat looking at me over the table"
          style={{ maxWidth: '400px' }}
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
      {(step === 18 || step === 19) && (
        <div
          style={{
            overflow: 'hidden',
            height: step === 18 ? '125px' : 'auto',
            marginBottom: step === 18 ? '137px' : '0',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/common_errors_empty_button.png'}
            alt="Code for empty link"
            style={{ maxWidth: '1000px' }}
          />
        </div>
      )}
      {step === 23 && (
        <img
          src={process.env.PUBLIC_URL + '/images/common_errors_missing_document_language.png'}
          alt="Code for missing document language"
          style={{ maxWidth: '800px' }}
        />
      )}
    </div>
  </div>
)

CommonErrors.steps = 24

export default CommonErrors
