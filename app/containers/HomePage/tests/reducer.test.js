import { fromJS } from 'immutable'

import homeReducer from '../reducer'
import { fetchTasteDive } from '../actions'

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

  it('should handle the fetchTasteDive action correctly', () => {
    const category = 'cars'
    const expectedResult = state.set('category', category)

    expect(homeReducer(state, fetchTasteDive(category))).toEqual(expectedResult)
  })
})
