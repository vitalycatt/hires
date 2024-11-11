import React from 'react'
import Sprite from '../sprite/Sprite'

import './basket.css'

function Basket({className}) {
  return (
    <button className={`basket${className ? ' ' + className : ''}`}>
        <Sprite icon='basket' width={16} height={16} />
    </button>
  )
}

export default Basket