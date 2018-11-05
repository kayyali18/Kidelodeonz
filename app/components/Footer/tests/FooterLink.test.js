import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import FooterLink from '../FooterLink'

describe('<FooterLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow(<FooterLink />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
