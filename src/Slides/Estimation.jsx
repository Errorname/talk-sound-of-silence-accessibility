import React from 'react'
import cn from 'classnames'

const Estimation = ({ step }) => (
  <div id="estimation-slide" className="slide-container">
    <div className="container slide centered">
      <p className="title is-1 has-text-white">Combien sont concernés ?</p>
      {step > 1 && (
        <p
          className="title is-2 has-text-white"
          style={{
            marginTop: '8rem'
          }}
        >
          ≃ 600 millions
        </p>
      )}
      {step > 2 && (
        <>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row'
            }}
          >
            {[...new Array(10)].map((x, i) => (
              <i
                key={i}
                className={cn('fas fa-9x', i === 9 ? 'fa-child' : 'fa-male')}
                style={{
                  flex: '1 0 20%',
                  padding: '25px 0',
                  color: i === 9 ? 'orange' : '#ddd'
                }}
              />
            ))}
          </div>

          <i className="subtitle is-5 has-text-white" style={{ marginTop: '1.5rem' }}>
            Source: OMS
          </i>
        </>
      )}
    </div>
  </div>
)

Estimation.steps = 3

export default Estimation
