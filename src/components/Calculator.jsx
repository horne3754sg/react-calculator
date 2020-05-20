import React, { Component } from 'react'
import { CalculatorKey } from '../utils/CalculatorKey'
import './Calculator.scss'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
    }
  }

  handleOnClick = (e) => {
    const keyPressed = e.target.value
    console.log(keyPressed)
  }

  handleOnClear = () => {
    this.setState({ result: 0 })
  }

  renderInputKey = (text, classStr) => {
    const classes = classStr ? `calculator-keys ${classStr}` : 'calculator-keys'
    return (
      <button className={classes} value={text} onClick={this.handleOnClick}>
        {text}
      </button>
    )
  }

  renderOperandKey = (text, classStr) => {
    const classes = classStr ? `calculator-keys ${classStr}` : 'calculator-keys'
    return (
      <button className={classes} value={text} onClick={this.handleOnClick}>
        {text}
      </button>
    )
  }

  render() {
    return (
      <div className='calculator'>
        <div className='ui-result'>{this.state.result}</div>
        <div className='ui-inputs'>
          <CalculatorKey
            text='Clear'
            classes='clear-key'
            onClick={this.handleOnClear}
          />
          <CalculatorKey charCode='247' onClick={this.handleOnClick} />

          <CalculatorKey text='7' onClick={this.handleOnClick} />
          <CalculatorKey text='8' onClick={this.handleOnClick} />
          <CalculatorKey text='9' onClick={this.handleOnClick} />
          <CalculatorKey charCode='215' onClick={this.handleOnClick} />

          <CalculatorKey text='4' onClick={this.handleOnClick} />
          <CalculatorKey text='5' onClick={this.handleOnClick} />
          <CalculatorKey text='6' onClick={this.handleOnClick} />
          <CalculatorKey charCode='8722' onClick={this.handleOnClick} />

          <CalculatorKey text='1' onClick={this.handleOnClick} />
          <CalculatorKey text='2' onClick={this.handleOnClick} />
          <CalculatorKey text='3' onClick={this.handleOnClick} />
          <CalculatorKey charCode='43' onClick={this.handleOnClick} />

          <CalculatorKey text='0' onClick={this.handleOnClick} />
          <CalculatorKey charCode='8729' onClick={this.handleOnClick} />
          <CalculatorKey text='AC' onClick={this.handleOnClick} />
          <CalculatorKey charCode='61' onClick={this.handleOnClick} />
        </div>
      </div>
    )
  }
}
