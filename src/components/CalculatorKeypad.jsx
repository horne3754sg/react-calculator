import React from 'react'
import CalculatorKey from './CalculatorKey'

const CalculatorKeypad = (props) => {
  const { onClickInput, onClickOperator, onClear, onCalculate } = props

  return (
    <div className='calculator-keypad'>
      <CalculatorKey
        label='Clear'
        keyPress='clear'
        classes='clear-key'
        onClick={onClear}
      />
      <CalculatorKey charCode='247' onClick={() => onClickOperator('/')} />

      <CalculatorKey label='7' onClick={() => onClickInput('7')} />
      <CalculatorKey label='8' onClick={() => onClickInput('8')} />
      <CalculatorKey label='9' onClick={() => onClickInput('9')} />
      <CalculatorKey charCode='215' onClick={() => onClickOperator('*')} />

      <CalculatorKey label='4' onClick={() => onClickInput('4')} />
      <CalculatorKey label='5' onClick={() => onClickInput('5')} />
      <CalculatorKey label='6' onClick={() => onClickInput('6')} />
      <CalculatorKey charCode='8722' onClick={() => onClickOperator('-')} />

      <CalculatorKey label='1' onClick={() => onClickInput('1')} />
      <CalculatorKey label='2' onClick={() => onClickInput('2')} />
      <CalculatorKey label='3' onClick={() => onClickInput('3')} />
      <CalculatorKey charCode='43' onClick={() => onClickOperator('+')} />

      <CalculatorKey />
      <CalculatorKey label='0' onClick={() => onClickInput('0')} />
      <CalculatorKey charCode='8729' onClick={() => onClickInput('.')} />
      <CalculatorKey charCode='61' onClick={onCalculate} />
    </div>
  )
}

export default CalculatorKeypad
