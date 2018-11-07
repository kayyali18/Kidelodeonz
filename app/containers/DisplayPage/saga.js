/**
 * Gets the stumble from the tasteDive API
 */

import { put, select, takeLatest } from 'redux-saga/effects'

import { makeSelectData } from 'containers/App/selectors'
import { RUN_STUMBLE_SAGA } from './constants'
import { displayStumble } from './actions'

/**
 * Stumbling Saga --> Tells the story of how we display our info
 */
export function* getStumble() {
  // Select data from store
  let stumble
  const num = Math.floor(Math.random() * 6) + 1
  const stumbles = yield select(makeSelectData())
  if (stumbles) stumble = stumbles[num]
  else stumble = false
  yield put(displayStumble(stumble))
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stumblingSaga() {
  // Watches for DISPLAY_STUMBLE actions and calls getStumble when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(RUN_STUMBLE_SAGA, getStumble)
}
