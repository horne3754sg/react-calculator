import React, { Component } from 'react'
import { CalculatorKey } from '../utils/CalculatorKey'
import './Calculator.scss'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: 0,
      operand: '',
    }
  }

  handleOnClickInput = (keyPress) => {
    // const keyPressed = e.target.value
    console.log(keyPress)
  }

  handleOnClickOperand = (keyPress) => {
    // const keyPressed = e.target.value
    // this.setState({operand: key})
    console.log(keyPress)
  }

  handleOnCalculate = () => {
    console.log('Calculate')
  }

  handleOnClear = () => {
    console.log('Clear')
    this.setState({ expression: 0 })
  }

  render() {
    return (
      <div className='calculator'>
        <div className='ui-result'>{this.state.expression}</div>
        <div className='ui-inputs'>
          <CalculatorKey
            label='Clear'
            keyPress='clear'
            classes='clear-key'
            onClick={this.handleOnClear}
          />
          <CalculatorKey
            charCode='247'
            keyPress='divide'
            onClick={this.handleOnClickOperand}
          />

          <CalculatorKey
            label='7'
            keyPress='7'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='8'
            keyPress='8'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='9'
            keyPress='9'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            charCode='215'
            keyPress='multiply'
            onClick={this.handleOnClickOperand}
          />

          <CalculatorKey
            label='4'
            keyPress='4'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='5'
            keyPress='5'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='6'
            keyPress='6'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            charCode='8722'
            keyPress='minus'
            onClick={this.handleOnClickOperand}
          />

          <CalculatorKey
            label='1'
            keyPress='1'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='2'
            keyPress='2'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            label='3'
            keyPress='3'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            charCode='43'
            keyPress='add'
            onClick={this.handleOnClickOperand}
          />

          <CalculatorKey />
          <CalculatorKey
            label='0'
            keyPress='0'
            onClick={this.handleOnClickInput}
          />
          <CalculatorKey
            charCode='8729'
            keyPress='decimal'
            onClick={this.handleOnClickOperand}
          />
          <CalculatorKey charCode='61' onClick={this.handleOnCalculate} />
        </div>
      </div>
    )
  }
}
