import { fromJS } from 'immutable'

import displayReducer from '../reducer'
import { displayStumble } from '../actions'

describe('displayReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      stumble: {},
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(displayReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the displayStumble action correctly', () => {
    const stumble = { title: 'I am a stumble' }
    const expectedResult = state.set('stumble', stumble)

    expect(displayReducer(state, displayStumble(stumble))).toEqual(
      expectedResult,
    )
  })
})
