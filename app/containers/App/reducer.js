/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_USER_INFO,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  userData: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_INFO:
        draft.loading = true;
        draft.error = false;
        break;

      case GET_USER_INFO_SUCCESS:
        break;

      case GET_USER_INFO_ERROR:
        draft.loading = false;
        break;
    }
  });

export default appReducer;
