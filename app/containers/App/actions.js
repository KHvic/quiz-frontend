/*
 *
 * App actions
 *
 */

import { SET_ERROR } from './constants';

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}
