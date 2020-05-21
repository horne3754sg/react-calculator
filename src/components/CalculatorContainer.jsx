import React, { Component } from 'react'
import Calculator from './Calculator'
import './Calculator.scss'

export default class CalculatorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentOuput: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
    }
  }

  /**
   * Inputs: (0,1,2,3,4,5,6,7,8,9,decimal)
   *
   * Inputs are assigned to the left or right operand
   * based on whether an operator is selected
   */
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

  /**
   * Clicking an operator is considered to be a new calculation,
   * so we set rightOperand to 0
   */
  handleOnClickOperator = (keyPress) => {
    this.setState({ operator: keyPress, rightOperand: 0 })
  }

  /**
   * Reset the calculator state back to default
   */
  handleOnClear = () => {
    this.setState({
      currentOuput: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
    })
  }

  /**
   * Calculate and set the current output and left operand to the result
   *
   * We can only run this if we have an operator and rightOperand
   */
  handleOnCalculate = () => {
    if (this.state.operator && this.state.rightOperand) {
      let result = this.getResult()
      this.setState({
        currentOuput: result,
        leftOperand: result,
      })
    }
  }

  /**
   * Determines which operation to perform
   */
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
      <Calculator
        currentOuput={this.state.currentOuput}
        onClickInput={this.handleOnClickInput}
        onClickOperator={this.handleOnClickOperator}
        onClear={this.handleOnClear}
        onCalculate={this.handleOnCalculate}
      />
    )
  }
}
