import React, { Component } from 'react'
import './TextScaler.scss'

export default class TextScaler extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: 1,
    }
  }

  componentDidUpdate() {
    const { scale } = this.state

    const node = this.node
    const parentWidth = node.parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = parentWidth / actualWidth

    if (scale === actualScale) return

    if (actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (scale < 1) {
      this.setState({ scale: 1 })
    }
  }

  render() {
    const { scale } = this.state

    return (
      <div
        className={`auto-scaling-text ${this.props.className}`}
        style={{ transform: `scale(${scale},${scale})` }}
        ref={(node) => (this.node = node)}>
        {this.props.children}
      </div>
    )
  }
}
