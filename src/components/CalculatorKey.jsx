import React from 'react'

const CalculatorKey = (props) => {
  const { label, charCode, classes, onClick, keyPress } = props
  let classNames = classes ? `calculator-keys ${classes}` : 'calculator-keys'
  let text = charCode ? String.fromCharCode(charCode) : label

  return (
    <button
      className={classNames}
      onClick={onClick ? () => onClick(keyPress || '') : null}>
      {text}
    </button>
  )
}

export default CalculatorKey
