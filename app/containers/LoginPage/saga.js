import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { API_URL, localStorageData } from '../../constants';
import { fetchUserFlow } from '../App/saga';
import { postRequest } from '../../utils/request';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_FAIL,
  POST_LOGIN_SUCCESS,
} from './constants';
import { GET_USER_INFO } from '../App/constants';

// Individual exports for testing

function* postLoginSaga(action) {
  const { email, password } = action;
  const url = `${API_URL}/auth/login`;
  const payload = {
    email,
    password,
  };
  try {
    const result = yield call(postRequest, { url, payload });
    yield put({ type: POST_LOGIN_SUCCESS });
    yield localStorage.setItem(localStorageData.idToken, result.token);
    yield put({ type: GET_USER_INFO });
    yield fetchUserFlow({ token: result.token });
  } catch ({ error, response }) {
    let failed = false;
    if (response.data.message === 'login failed') {
      failed = true;
    }
    yield put({ type: POST_LOGIN_FAIL, failed });
  }
}
export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(POST_LOGIN_REQUEST, postLoginSaga)]);
}
