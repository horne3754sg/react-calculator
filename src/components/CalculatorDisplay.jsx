import React from 'react'
import TextScaler from '../utils/TextScaler'

export const CalculatorDisplay = (props) => {
  return (
    <div className='calculator-display'>
      <TextScaler data-testid='display' className='origin-right'>
        {props.value}
      </TextScaler>
    </div>
  )
}
