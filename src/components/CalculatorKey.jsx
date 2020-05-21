import React from 'react'

const CalculatorKey = (props) => {
  const { label, charCode, classes, onClick } = props
  let classNames = classes ? `calculator-keys ${classes}` : 'calculator-keys'
  let text = charCode ? String.fromCharCode(charCode) : label

  if (props.isActive) classNames += ' active'

  return (
    <button className={classNames} onClick={onClick ? onClick : null}>
      {text}
    </button>
  )
}

export default CalculatorKey
