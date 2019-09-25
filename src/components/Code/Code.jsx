import React from 'react'

import './Code.scss'

const Code = ({ children, ...props }) => (
  <div className="code" {...props}>
    <div className="fakeMenu">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">{children}</div>
  </div>
)

export default Code
