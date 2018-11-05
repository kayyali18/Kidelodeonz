/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'

import { FETCH_TASTEDIVE } from './constants'

// The initial state of the App
export const initialState = fromJS({
  category: '',
  query: '',
})

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASTEDIVE:
      return state.set('category', {
        category: action.category,
      })
    default:
      return state
  }
}

export default homeReducer
