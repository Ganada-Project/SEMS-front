/*
 *
 * LoginPage actions
 *
 */

import { POST_LOGIN_REQUEST } from './constants';

export function postLoginRequestAction() {
  return {
    type: POST_LOGIN_REQUEST,
  };
}
