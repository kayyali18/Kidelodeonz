import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'

import { HomePage, mapDispatchToProps } from '../index'
import messages from '../messages'
import { UPDATE_STUMBLE } from '../constants'
import { loadApi } from '../../App/actions'
import { updateStumble } from '../actions'

describe('<HomePage />', () => {
  let mockCategoryClick

  beforeEach(() => {
    mockCategoryClick = jest.fn()
  })

  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage categoryClick={mockCategoryClick} />,
    )
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true)
  })

  describe('Menu Item onClick', () => {
    it('should dispatch dispatchLoadApi when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      result.dispatchLoadApi()
      expect(dispatch).toHaveBeenCalledWith(loadApi())
    })
    it('should dispatch updateStumble when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      result.categoryClick()
      expect(dispatch).toHaveBeenCalledWith(updateStumble())
    })
  })

  describe('mapDispatchToProps', () => {
    let dispatch
    beforeEach(() => {
      dispatch = jest.fn()
    })
    it('should map a function to categoryClick', () => {
      const mappedProps = mapDispatchToProps(dispatch)
      expect(mappedProps.categoryClick).toBeDefined()
    })
    it('categoryClick should dispatch an action', () => {
      const mappedProps = mapDispatchToProps(dispatch)
      const expected = {
        type: UPDATE_STUMBLE,
      }
      mappedProps.categoryClick()
      expect(dispatch).toHaveBeenCalledWith(expected)
    })
  })
})
