import React from 'react'
import Sprite from '../../../UI/sprite/Sprite'

function Item({children}) {
  return (
    <button className='results-filter__item'>
        <span>{children}</span>
        <Sprite icon='close-2' width={12} height={12}  />
    </button>
  )
}

export default Item