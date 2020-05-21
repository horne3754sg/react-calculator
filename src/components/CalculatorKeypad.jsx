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
      <CalculatorKey
        charCode='247'
        keyPress='divide'
        onClick={onClickOperator}
      />

      <CalculatorKey label='7' keyPress='7' onClick={onClickInput} />
      <CalculatorKey label='8' keyPress='8' onClick={onClickInput} />
      <CalculatorKey label='9' keyPress='9' onClick={onClickInput} />
      <CalculatorKey
        charCode='215'
        keyPress='multiply'
        onClick={onClickOperator}
      />

      <CalculatorKey label='4' keyPress='4' onClick={onClickInput} />
      <CalculatorKey label='5' keyPress='5' onClick={onClickInput} />
      <CalculatorKey label='6' keyPress='6' onClick={onClickInput} />
      <CalculatorKey
        charCode='8722'
        keyPress='minus'
        onClick={onClickOperator}
      />

      <CalculatorKey label='1' keyPress='1' onClick={onClickInput} />
      <CalculatorKey label='2' keyPress='2' onClick={onClickInput} />
      <CalculatorKey label='3' keyPress='3' onClick={onClickInput} />
      <CalculatorKey charCode='43' keyPress='add' onClick={onClickOperator} />

      <CalculatorKey />
      <CalculatorKey label='0' keyPress='0' onClick={onClickInput} />
      <CalculatorKey
        charCode='8729'
        keyPress='decimal'
        onClick={onClickOperator}
      />
      <CalculatorKey charCode='61' onClick={onCalculate} />
    </div>
  )
}

export default CalculatorKeypad
