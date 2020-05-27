import React from 'react'
import Key from './Key'

import './Keypad.scss'

const Keypad = (props) => {
  const { numbers, operators, handleKeyPress, onCalculate } = props
  return (
    <div className='keypad-container'>
      <div className='numbers-container'>
        {numbers.map((number, i) => (
          <Key
            key={`${number}${i}`}
            label={`${number}`}
            onClick={() => handleKeyPress(number)}
          />
        ))}
      </div>

      <div className='operators-container'>
        {operators.map((operator, i) => (
          <Key
            key={`${operator}${i}`}
            label={`${operator}`}
            classes='operator-key'
            onClick={() => handleKeyPress(operator)}
          />
        ))}
      </div>

      <Key label='=' classes='equals-key' onClick={onCalculate} />
    </div>
  )
}

export default Keypad
