import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Header from '../index'

describe('<Header />', () => {
  it('should match snapshot', () => {
    // setup
    const renderedComponent = shallow(<Header />)

    // expectation
    expect(renderedComponent).toMatchSnapshot()
  })
})
