import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'

import { HomePage, mapDispatchToProps } from '../index'
import messages from '../messages'
import { UPDATE_STUMBLE } from '../constants'

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

  it.skip('should call categoryClick on click', () => {
    const renderedComponent = shallow(
      <HomePage categoryClick={mockCategoryClick} />,
    )
    renderedComponent.find('button').simulate('click')
    expect(mockCategoryClick).toHaveBeenCalled()
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
