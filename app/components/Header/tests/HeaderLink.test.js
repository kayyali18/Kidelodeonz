import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import HeaderLink from '../HeaderLink'

describe('<HeaderLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<HeaderLink />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
});