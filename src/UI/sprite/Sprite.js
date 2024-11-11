import React from 'react'

import icons from './icons.svg'

function Sprite({icon='',width=0, height=0, classIcon=null}) {
  return (
    <svg className={classIcon && classIcon} width={width} height={height}>
      <use xlinkHref={`${icons}#${icon}` } />
    </svg>
  )
}

export default Sprite