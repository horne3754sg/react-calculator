import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import App from './App'

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the CalculatorContainer', () => {
    // test goes here
  })
})
