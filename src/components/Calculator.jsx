import React, { Component } from 'react'
import './Calculator.scss'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleOnClick = () => {}

  renderButton = (text) => {
    return <button>{text}</button>
  }

  render() {
    return (
      <div className='calculator'>
        <div className='result'></div>
        <div className='inputs'>
          {this.renderButton('Clear')}
          {this.renderButton(String.fromCharCode(247))}
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton(String.fromCharCode(215))}
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton(String.fromCharCode(8722))}
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton(String.fromCharCode(43))}
          {this.renderButton(String.fromCharCode(61))}
        </div>
      </div>
    )
  }
}
