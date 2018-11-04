import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Footer from '../index'

describe('<Footer />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Footer />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
