/**
 * Testing our Button component
 */

import React from 'react'
import { mountWrap, shallowWrap } from '../../../utils/contextWrapper'

import Button from '../index'

const children = <h1>TEST</h1>
const renderComponent = (props = { path: '/' }) =>
  mountWrap(<Button {...props}>{children}</Button>)

describe('<Button />', () => {
  it('should match snapshot', () => {
    const renderedComponent = (props = { path: '/' }) =>
      shallowWrap(<Button {...props} />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })

  it('should handle click events', () => {
    const onClickSpy = jest.fn()
    const renderedComponent = renderComponent({
      onClick: onClickSpy,
      path: '/',
    })
    renderedComponent.find('a').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
})
