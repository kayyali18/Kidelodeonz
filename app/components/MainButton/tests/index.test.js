/**
 * Testing our Button component
 */

import React from 'react'
import { mount } from 'enzyme'
import { mountWrap, shallowWrap } from '../../../utils/contextWrapper'

import Button from '../index'

const children = <h1>TEST</h1>
const renderComponent = (props = { path: '/' }) =>
  mountWrap(<Button {...props}>{children}</Button>)

describe('<Button />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })
})
