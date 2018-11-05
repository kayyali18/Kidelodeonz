/**
 * Tests for HomePage sagas
 */

//  import { put, takeLatest } from 'redux-saga/effects'

//  import { LOAD_API } from 'containers/App/constants'
import { apiLoaded, apiLoadingError } from 'containers/App/actions'

//  import tasteDiveData,
import { put } from 'redux-saga/effects'
import { getSuggestions } from '../saga'

const query = 'cars'

/* eslint-disable redux-saga/yield-effects prettier-ignore */
describe('getSuggestions Saga', () => {
  let getSuggestionsGenerator

  // Because we test twice for a succesful and unsuccessful api load
  // we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getSuggestionsGenerator = getSuggestions()

    // describe the selector (makeSelectQuery)
    const selectDescriptor = getSuggestionsGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = getSuggestionsGenerator.next(query).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should dispatch the apiLoaded action if it requests the data succesfully', () => {
    const response = {
      data: 'this is mockdata',
    }
    const putDescriptor = getSuggestionsGenerator.next(response).value
    expect(putDescriptor).toEqual(put(apiLoaded(response)))
  })
})
