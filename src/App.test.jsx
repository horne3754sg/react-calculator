import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import CalculatorContainer from './components/CalculatorContainer'

describe('<App />', () => {
  it('renders <CalculatorContainer />', () => {
    const app = shallow(<App />)
    expect(app.find(CalculatorContainer)).toHaveLength(1)
  })
})
