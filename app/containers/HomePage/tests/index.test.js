import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'

import { HomePage } from '../index'
import messages from '../messages'

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
})
