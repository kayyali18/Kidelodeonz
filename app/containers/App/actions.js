/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_API, LOAD_API_SUCCESS, LOAD_API_ERROR } from './constants'

/**
 * Load the api data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_API
 */
export function loadApi() {
  return {
    type: LOAD_API,
  }
}

/**
 * Dispatched when the API suggestions are loaded by the request saga
 *
 * @param  {object} results The api response data
 *
 * @return {object}      An action object with a type of LOAD_API_SUCCESS passing the result
 */
export function apiLoaded(result) {
  return {
    type: LOAD_API_SUCCESS,
    result,
  }
}

/**
 * Dispatched when loading the API fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_API_ERROR passing the error
 */
export function apiLoadingError(error) {
  return {
    type: LOAD_API_ERROR,
    error,
  }
}
