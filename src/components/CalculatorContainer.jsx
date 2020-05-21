import React, { Component } from 'react'
import Calculator from './Calculator'
import { CalculateOperations } from '../utils/CalculateOperations'
import './Calculator.scss'

export default class CalculatorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: 0,
      initialLeftOperand: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
      newOperation: false,
    }
  }

  /**
   * Inputs: (0,1,2,3,4,5,6,7,8,9,decimal)
   *
   * Inputs are assigned to the left or right operand
   * based on whether an operator is selected
   */
  handleOnClickInput = (keyPress) => {
    let displayValue = this.state.displayValue
    let operand = this.state.operator === null ? 'leftOperand' : 'rightOperand'

    // we only want one decimal
    if (keyPress === '.' && this.state[operand].toString().match(/\./g)) return

    // add the pressed key value to the operand
    displayValue = `${this.state[operand] || ''}${keyPress}`

    // set the initial left operand value
    if (operand === 'leftOperand') {
      this.setState({ initialLeftOperand: displayValue })
    }

    // if we press a number while setting the right operand, we reset the left operand and assign
    // the new keypress value to the right operand
    // this allows us to perform new operations on the original left operand
    if (
      !this.state.newOperation &&
      operand === 'rightOperand' &&
      keyPress.match(/^[0-9]/g)
    ) {
      displayValue = keyPress
      this.setState({ leftOperand: this.state.initialLeftOperand })
    }

    this.setState({ displayValue, [operand]: displayValue })
  }

  /**
   * Clicking an operator is considered to be a new calculation,
   * so we set rightOperand to 0
   */
  handleOnClickOperator = (keyPress) => {
    // if we click on another operator, calculate the current result
    if (this.state.newOperation) this.handleOnCalculate()
    this.setState({ operator: keyPress, rightOperand: 0, newOperation: true })
  }

  /**
   * Reset the calculator state back to default
   */
  handleOnClear = () => {
    this.setState({
      displayValue: 0,
      initialLeftOperand: 0,
      leftOperand: 0,
      rightOperand: 0,
      operator: null,
      newOperation: false,
    })
  }

  /**
   * Calculate and set the current output and left operand to the result
   *
   * We can only run this if we have an operator and rightOperand
   */
  handleOnCalculate = () => {
    const { operator, leftOperand, rightOperand } = this.state
    if (this.state.operator && this.state.rightOperand) {
      let result = CalculateOperations[operator](
        Number(leftOperand),
        Number(rightOperand)
      )
      this.setState({
        displayValue: result,
        leftOperand: result,
        newOperation: false,
      })
    }
  }

  render() {
    return (
      <Calculator
        displayValue={this.state.displayValue}
        operator={this.state.operator}
        onClickInput={this.handleOnClickInput}
        onClickOperator={this.handleOnClickOperator}
        onClear={this.handleOnClear}
        onCalculate={this.handleOnCalculate}
      />
    )
  }
}
