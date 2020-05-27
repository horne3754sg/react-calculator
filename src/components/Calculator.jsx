import React, { Component } from 'react'
import Keypad from './Keypad'
import { Display } from './Display'
import { CalculateOperations } from '../utils/CalculateOperations'
import './Calculator.scss'

/**
 * Calculator manages the state and methods for updating the state
 *
 * The handlers are split according to type {Input, Operator, Clear, Calculate}
 */
export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: 0,
      initialLeftOperand: 0,
      leftOperand: 0,
      rightOperand: 0,
      selectedOperator: null,
      newOperation: false,
      numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'CE'],
      operators: ['/', '*', '-', '+'],
    }
  }

  handleKeyPress = (keyPress) => {
    const { numbers, operators } = this.state
    if (keyPress === 'CE') {
      this.reset()
      return
    }

    numbers.forEach((number) => {
      if (keyPress === number) {
        this.updateInput(number)
      }
    })

    operators.forEach((operator) => {
      if (keyPress === operator) {
        this.updateOperator(operator)
      }
    })
  }

  updateInput = (keyPress) => {
    let displayValue = this.state.displayValue
    let operand =
      this.state.selectedOperator === null ? 'leftOperand' : 'rightOperand'

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
      operand === 'rightOperand' &&
      !this.state.newOperation &&
      keyPress.match(/^[0-9]/g)
    ) {
      displayValue = keyPress
      this.setState({ leftOperand: this.state.initialLeftOperand })
    }

    this.setState({ displayValue, [operand]: displayValue })
  }

  updateOperator = (selectedOperator) => {
    // if we click on another operator, calculate the current result
    if (this.state.newOperation) this.handleOnCalculate()
    this.setState({ selectedOperator, rightOperand: 0, newOperation: true })
  }

  /**
   * Reset the calculator state back to default
   */
  reset = () => {
    this.setState({
      displayValue: 0,
      initialLeftOperand: 0,
      leftOperand: 0,
      rightOperand: 0,
      selectedOperator: null,
      newOperation: false,
    })
  }

  /**
   * Calculate and set the current output and left operand to the result
   *
   * We can only run this if we have an operator and rightOperand
   */
  handleOnCalculate = () => {
    const { selectedOperator, leftOperand, rightOperand } = this.state
    if (this.state.selectedOperator && this.state.rightOperand) {
      let result = CalculateOperations[selectedOperator](
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
      <div className='calculator'>
        <Display value={this.state.displayValue} />
        <Keypad
          numbers={this.state.numbers}
          operators={this.state.operators}
          handleKeyPress={this.handleKeyPress}
          onCalculate={this.handleOnCalculate}
        />
      </div>
    )
  }
}
