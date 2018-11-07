/**
 * Tests for HomePage sagas
 */
import { put, takeLatest } from 'redux-saga/effects'

import { apiLoaded, apiLoadingError } from 'containers/App/actions'
import tasteDiveSaga, { getSuggestions } from '../saga'
import { LOAD_API } from '../../App/constants'

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
      Similar: {
        Info: ['something'],
        Results: ['else'],
      },
    }

    const expected = ['something', 'else']
    const putDescriptor = getSuggestionsGenerator.next(response).value
    expect(putDescriptor).toEqual(put(apiLoaded(expected)))
  })

  it('should call the apiLoadingError action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = getSuggestionsGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(apiLoadingError(response)))
  })
})

describe('tasteDiveSaga Saga ', () => {
  const tasteDiveSagaTest = tasteDiveSaga()

  it('should start task to watch for LOAD_API action', () => {
    const takeLatestDescriptor = tasteDiveSagaTest.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_API, getSuggestions))
  })
})
