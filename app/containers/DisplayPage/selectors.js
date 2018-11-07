/**
 * Displaypage selectors
 */
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDisplay = state => state.get('display', initialState)

const makeSelectStumble = () =>
  createSelector(selectDisplay, displayState => displayState.get('stumble'))

export { selectDisplay, makeSelectStumble }
