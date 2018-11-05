import { fromJS } from 'immutable'

import homeReducer from '../reducer'
// import { fetchTasteDive } from '../actions'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      category: '',
      query: '',
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })
})
