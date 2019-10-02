/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
} from './constants';

export const initialState = {
  loginLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_LOGIN_REQUEST:
        draft.loginLoading = true;
        break;
      case POST_LOGIN_SUCCESS:
        draft.loginLoading = false;
        break;
      case POST_LOGIN_FAIL:
        draft.loginLoading = false;
        break;
    }
  });

export default loginPageReducer;
