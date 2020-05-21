import React from 'react'
import CalculatorKeypad from './CalculatorKeypad'

const Calculator = (props) => {
  return (
    <div className='calculator'>
      <div className='ui-result'>{props.displayValue}</div>
      <CalculatorKeypad
        onClickInput={props.onClickInput}
        onClickOperator={props.onClickOperator}
        onClear={props.onClear}
        onCalculate={props.onCalculate}
      />
    </div>
  )
}

export default Calculator
