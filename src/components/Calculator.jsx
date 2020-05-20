import React, { Component } from 'react'
import { CalculatorKey } from '../utils/CalculatorKey'
import './Calculator.scss'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentOuput: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
    }
  }

  handleOnClickInput = (keyPress) => {
    let currentOuput = this.state.currentOuput
    if (this.state.operator === null) {
      let leftOperand = `${this.state.leftOperand || ''}${keyPress}`
      currentOuput = leftOperand
      this.setState({ leftOperand })
    } else {
      let rightOperand = `${this.state.rightOperand || ''}${keyPress}`
      currentOuput = rightOperand
      this.setState({ rightOperand })
    }

    this.setState({ currentOuput })
  }

  handleOnClickOperator = (keyPress) => {
    this.setState({ operator: keyPress })
  }

  handleOnCalculate = () => {
    console.log('Calculate')
    let result = this.getResult()
    this.setState({
      currentOuput: result,
      leftOperand: result,
      rightOperand: 0,
      operator: null,
    })
  }

  handleOnClear = () => {
    this.setState({
      currentOuput: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
    })
  }

  getResult = () => {
    const { leftOperand, rightOperand, operator } = this.state
    if (operator === 'add') {
      return parseInt(leftOperand) + parseInt(rightOperand)
    } else if (operator === 'minus') {
      return parseInt(leftOperand) - parseInt(rightOperand)
    } else if (operator === 'multiply') {
      return parseInt(leftOperand) * parseInt(rightOperand)
    } else if (operator === 'divide') {
      return parseInt(leftOperand) / parseInt(rightOperand)
    }
  }

  render() {
    return (
      <div className='calculator'>
        <div className='ui-result'>{this.state.currentOuput}</div>
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
            onClick={this.handleOnClickOperator}
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
            onClick={this.handleOnClickOperator}
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
            onClick={this.handleOnClickOperator}
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
            onClick={this.handleOnClickOperator}
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
            onClick={this.handleOnClickOperator}
          />
          <CalculatorKey charCode='61' onClick={this.handleOnCalculate} />
        </div>
      </div>
    )
  }
}
