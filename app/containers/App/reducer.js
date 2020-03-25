/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { SET_ERROR } from './constants';

export const initialState = {
  error: 'Some error occured!',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ERROR:
        draft.error = action.error.message;
    }
  });

export default appReducer;
