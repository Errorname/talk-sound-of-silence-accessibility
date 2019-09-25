import React from 'react'

import { ReactComponent as HighFiveSvg } from './high-five.svg'

import './HighFive.scss'

const HighFive = props => (
  <div className="high-five" {...props}>
    <HighFiveSvg width="150" height="150" />
  </div>
)

export default HighFive
