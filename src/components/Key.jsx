import React from 'react'

import './Key.scss'

const CalculatorKey = (props) => {
  const { label, classes, onClick } = props
  let classNames = classes ? `key ${classes}` : 'key'

  if (props.isActive) classNames += ' active'

  return (
    <button className={classNames} onClick={onClick ? onClick : null}>
      {label}
    </button>
  )
}

export default CalculatorKey
