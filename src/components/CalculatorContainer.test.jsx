import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import CalculatorContainer from './CalculatorContainer'
import Calculator from './Calculator'
import CalculatorDisplay from './CalculatorDisplay'

describe('<CalculatorContainer />', () => {
  // create a snapshot
  it('renders correct <CalculatorContainer />', () => {
    const component = renderer.create(<CalculatorContainer />).toJSON()
    expect(component).toMatchSnapshot()
  })

  // Test props
  it('correctly passes displayValue to <CalculatorDisplay />', () => {
    const props = {
      displayValue: 0,
      operator: null,
    }
    const component = mount(<CalculatorContainer {...props} />)
    console.log(component.debug())
    expect(component.prop('displayValue')).toBe(
      component.find(CalculatorDisplay).prop('value')
    )
  })
})
