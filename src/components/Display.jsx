import React from 'react'
import TextScaler from '../utils/TextScaler'

import './Display.scss'

export const Display = (props) => {
  return (
    <div className='display-container'>
      <TextScaler className='origin-right'>{props.value}</TextScaler>
    </div>
  )
}
