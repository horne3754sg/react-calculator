import React from 'react'
import { CalculatorDisplay } from './CalculatorDisplay'
import CalculatorKeypad from './CalculatorKeypad'

const Calculator = (props) => {
  return (
    <div className='calculator'>
      <CalculatorDisplay value={props.displayValue} />
      <CalculatorKeypad {...props} />
    </div>
  )
}

export default Calculator
