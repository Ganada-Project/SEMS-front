/*
 *
 * LoginPage actions
 *
 */

import { POST_LOGIN_REQUEST } from './constants';

export function postLoginRequestAction({ email, password }) {
  return {
    type: POST_LOGIN_REQUEST,
    email,
    password,
  };
}
