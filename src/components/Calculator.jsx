import React from 'react'
import CalculatorKeypad from './CalculatorKeypad'

const Calculator = (props) => {
  return (
    <div className='calculator'>
      <div className='calculator-display'>{props.displayValue}</div>
      <CalculatorKeypad {...props} />
    </div>
  )
}

export default Calculator
