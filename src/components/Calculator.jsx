import React from 'react'
import CalculatorKeypad from './CalculatorKeypad'

const Calculator = (props) => {
  return (
    <div className='calculator'>
      <div className='ui-result'>{props.displayValue}</div>
      <CalculatorKeypad {...props} />
    </div>
  )
}

export default Calculator
