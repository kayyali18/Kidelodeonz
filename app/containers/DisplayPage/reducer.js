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

import { DISPLAY_STUMBLE } from './constants'

// The initial state of the App
export const initialState = fromJS({
  stumble: {},
})

function displayReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_STUMBLE:
      return state.set('stumble', action.stumble)
    default:
      return state
  }
}

export default displayReducer
