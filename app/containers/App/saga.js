import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO,
} from './constants';
import { API_URL, localStorageData } from '../../constants';
import { getRequest } from '../../utils/request';

export function* fetchUserFlow({ token }) {
  let user;
  const url = `${API_URL}/user/me`;
  const idToken = localStorage.getItem(localStorageData.idToken) || token;
  if (!idToken || idToken === null || idToken === undefined) {
    user = { result: null };
    yield put({ type: GET_USER_INFO_ERROR });
    yield replace('/login');
  } else {
    try {
      user = yield call(getRequest, { url });
      yield put({
        type: GET_USER_INFO_SUCCESS,
        payload: { user, idToken },
      });
      yield replace('/');
    } catch (error) {
      user = { result: null };
      yield replace('/login');
      yield put({ type: GET_USER_INFO_ERROR, error });
    }
  }
  return user.result;
}

// Individual exports for testing
export default function* rootSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(GET_USER_INFO, fetchUserFlow)]);
}
