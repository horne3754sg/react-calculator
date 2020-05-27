import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import CalculatorContainer from './CalculatorContainer'
import Calculator from './Calculator'

describe('<CalculatorContainer />', () => {
  it('mathes the snapshot', () => {
    const CalculatorContainerComponent = renderer
      .create(<CalculatorContainer />)
      .toJSON()
    expect(CalculatorContainerComponent).toMatchSnapshot()
  })

  it('renders <Calculator />', () => {
    const component = shallow(<CalculatorContainer />)
    expect(component.find(Calculator)).toHaveLength(1)
  })

  // handleOnClickInput
  it('updates left/right operands when inputs are clicked', () => {})

  // handleOnClickOperator
  it('updates the operator', () => {})

  // handleOnClear
  it('resets the calculator back to default state when clear is clicked', () => {})

  // handleOnCalculate
  it('calculates', () => {})
})
