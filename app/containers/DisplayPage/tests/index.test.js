// import React from 'react'
// import { shallow } from 'enzyme'

import { mapDispatchToProps } from '../index'
import { RUN_STUMBLE_SAGA } from '../constants'

describe('getStumble', () => {
  let dispatch
  let mappedProps
  beforeEach(() => {
    dispatch = jest.fn()
    mappedProps = mapDispatchToProps(dispatch)
  })

  it('should map a function to getStumble', () => {
    expect(mappedProps.getStumble).toBeDefined()
  })

  it('should dispatch the stumbleSaga action', () => {
    const expected = {
      type: RUN_STUMBLE_SAGA,
    }
    mappedProps.getStumble()
    expect(dispatch).toHaveBeenCalledWith(expected)
  })
})
