import React from 'react'

const positioning = (currentStep, step) => ({
  position: 'relative',
  color: 'black !important',
  transition: '0.5s ease-out',
  marginTop: currentStep >= step ? 0 : '80vh'
})

const rules = [
  <b>Rules:</b>,
  '- alt-text',
  '- html-has-lang',
  '- anchor-has-content',
  '- form-has-label',
  '- accessible-emoji',
  '- ...'
]

const plugins = ['Plugins:', '- eslint-plugin-jsx-a11y', '- eslint-plugin-vue-a11y', '- ...']

const Eslint = ({ step }) => (
  <div className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">ESLint a11y plugins</p>
      <div style={{ display: 'flex', maxWidth: '80vw', width: '1200px', height: '400px' }}>
        <div
          style={{
            flex: '1',
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {rules.map((rule, i) => (
            <p
              key={rule}
              className="subtitle is-4 has-text-white"
              style={{ ...positioning(step, i + 2), width: '230px' }}
            >
              {rule}
            </p>
          ))}
        </div>
        <div
          style={{
            flex: '1',
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {plugins.map((plugin, i) => (
            <p
              key={plugin}
              className="subtitle is-4 has-text-white"
              style={{ ...positioning(step, i + rules.length + 2), width: '280px' }}
            >
              <b>{plugin}</b>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
)

Eslint.steps = 1 + rules.length + plugins.length

export default Eslint
