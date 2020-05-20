import React from 'react'

export function CalculatorKey(props) {
  const { label, charCode, classes, onClick, keyPress } = props
  let classNames = classes ? `calculator-keys ${classes}` : 'calculator-keys'
  let text = props.charCode ? String.fromCharCode(charCode) : label

  return (
    <button
      className={classNames}
      onClick={onClick ? () => onClick(keyPress || '') : null}>
      {text}
    </button>
  )
}
