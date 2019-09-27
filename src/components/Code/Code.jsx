import React from 'react'

import './Code.scss'

const Code = ({ children, ...props }) => (
  <div className="code" {...props}>
    <div className="fakeMenu">
      <div className="fakeButtons fakeClose"></div>
      <div className="fakeButtons fakeMinimize"></div>
      <div className="fakeButtons fakeZoom"></div>
    </div>
    <div className="fakeScreen">{children}</div>
  </div>
)

export default Code
