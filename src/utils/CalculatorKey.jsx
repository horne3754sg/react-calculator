import React from 'react'

export function CalculatorKey(props) {
  let classes = props.classes
    ? `calculator-keys ${props.classes}`
    : 'calculator-keys'
  let text = props.charCode ? String.fromCharCode(props.charCode) : props.text

  return (
    <button className={classes} value={text} onClick={props.onClick}>
      {text}
    </button>
  )
}
