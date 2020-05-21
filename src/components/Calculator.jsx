import React from 'react'
import { TextScaler } from '../utils/TextScaler'
import CalculatorKeypad from './CalculatorKeypad'

const Calculator = (props) => {
  return (
    <div className='calculator'>
      <div className='calculator-display'>
        <TextScaler>{props.displayValue}</TextScaler>
      </div>
      <CalculatorKeypad {...props} />
    </div>
  )
}

export default Calculator
