/**
 * Homepage selectors
 */
import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectHome = state => state.get('home', initialState)

const makeSelectQuery = () =>
  createSelector(selectHome, homeState => homeState.get('query'))

export { selectHome, makeSelectQuery }
