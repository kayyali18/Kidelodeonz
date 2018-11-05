import { fromJS } from 'immutable'

import {
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
  selectGlobal,
} from 'containers/App/selectors'

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      global: globalState,
    })

    expect(selectGlobal(mockedState)).toEqual(globalState)
  })
})

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation()
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    })

    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    )
  })
})

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading()
  it('should select the loading', () => {
    const loading = false
    const mockedState = fromJS({
      global: {
        loading,
      },
    })

    expect(loadingSelector(mockedState)).toEqual(loading)
  })
})

describe('makeSelectError', () => {
  const errorSelector = makeSelectError()
  it('should select the error', () => {
    const error = 404
    const mockedState = fromJS({
      global: {
        error,
      },
    })

    expect(errorSelector(mockedState)).toEqual(error)
  })
})
