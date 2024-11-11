import React from 'react'
import Sprite from '../../UI/sprite/Sprite'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link className='header__logo' to={'/'}>
          <Sprite icon="logo" width={91} height={23} />
    </Link>
  )
}

export default Logo