import { fromJS } from 'immutable'
import appReducer from '../reducer'
import { loadApi, apiLoaded, apiLoadingError } from '../actions'

describe('appReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      searchQuery: '',
      tasteDive: fromJS({
        apiData: false,
      }),
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(appReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the loadApi action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['tasteDive', 'apiData'], false)

    expect(appReducer(state, loadApi())).toEqual(expectedResult)
  })

  it('should handle the apiLoaded action correctly', () => {
    const mockResult = { res: 'ImAMockRespose' }
    const expectedResult = state
      .setIn(['tasteDive', 'apiData'], mockResult)
      .set('loading', false)

    expect(appReducer(state, apiLoaded(mockResult))).toEqual(expectedResult)
  })

  it('should handle the apiLoadingError action correctly', () => {
    const fakeError = {
      msg: 'lookAtMeAnError',
    }
    const expectedResult = state.set('error', fakeError).set('loading', false)

    expect(appReducer(state, apiLoadingError(fakeError))).toEqual(
      expectedResult,
    )
  })
})
