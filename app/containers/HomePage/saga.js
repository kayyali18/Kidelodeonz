/**
 * Gets the suggestions from the tasteDive API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects'
import { LOAD_API } from 'containers/App/constants'
import { apiLoaded, apiLoadingError } from 'containers/App/actions'

import request from 'utils/request'
import { makeSelectQuery } from 'containers/HomePage/selectors'
import { tasteDive } from '../../utils/API_keys'

/**
 * Taste Dive api request/response handler
 */
export function* getSuggestions() {
  // Select query from store
  const key = tasteDive
  const query = yield select(makeSelectQuery())
  const requestURL = `https://tastedive.com/api/similar?k=${key}&info=1&limit=100&q=${query}`

  try {
    // Call our request helper (see 'utils/request')
    const results = yield call(request, requestURL)
    yield put(apiLoaded(results))
  } catch (err) {
    yield put(apiLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_API actions and calls getSuggestions when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_API, getSuggestions)
}
