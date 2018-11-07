/**
 * Tests for DisplayPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects'

import { RUN_STUMBLE_SAGA } from '../constants'
import stumblingSaga, { getStumble } from '../saga'
import { displayStumble } from '../actions'

const stumble = false

/* eslint-disable redux-saga/yield-effects prettier-ignore */
describe('getStumble Saga', () => {
  let getStumbleGenerator

  beforeAll(() => {
    getStumbleGenerator = getStumble()

    // describe the selector (makeSelectData)
    const selectDescriptor = getStumbleGenerator.next()
    expect(selectDescriptor).toMatchSnapshot()
  })

  it('should dispatch the displayStumble with a stumble', () => {
    const putDescriptor = getStumbleGenerator.next(stumble).value
    expect(putDescriptor).toEqual(put(displayStumble(stumble)))
  })
})

describe('stumblingSaga', () => {
  const stumblingSagaTest = stumblingSaga()

  it('should start a task to watch for RUN_STUMBLE_SAGA', () => {
    const takeLatestDescriptor = stumblingSagaTest.next().value
    expect(takeLatestDescriptor).toEqual(
      takeLatest(RUN_STUMBLE_SAGA, getStumble),
    )
  })
})
