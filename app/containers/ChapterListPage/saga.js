import { call, put, all, takeLatest } from 'redux-saga/effects';
import { GET_CHAPTER, GET_COURSE, POST_CHAPTER } from './constants';
import { API_URL } from '../../constants';
import { getRequest, postRequest } from '../../utils/request';

function* getCourseSaga() {
  const url = `${API_URL}/manage/course`;
  try {
    const { result } = yield call(getRequest, { url });
    yield put({ type: GET_COURSE.SUCCESS, payload: { courseList: result } });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_COURSE.FAIL, error });
  }
  // See example in containers/HomePage/saga.js
}
function* getChapterSaga(action) {
  const { courseId } = action;
  const url = `${API_URL}/manage/chapter?course_id=${courseId}`;
  try {
    const { result } = yield call(getRequest, { url });
    yield put({ type: GET_CHAPTER.SUCCESS, payload: { chapterList: result } });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_CHAPTER.FAIL, error });
  }
}
function* postChapterSaga(action) {
  const { courseId, name } = action;
  const payload = {
    course_id: courseId,
    name,
  };
  const url = `${API_URL}/manage/chapter`;
  try {
    const { result } = yield call(postRequest, { url, payload });
    yield put({ type: POST_CHAPTER.SUCCESS, result });
    yield put({ type: GET_CHAPTER.REQUEST, courseId });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_CHAPTER.FAIL, error });
  }
}

export default function* chapterListPageSaga() {
  yield all([
    takeLatest(GET_COURSE.REQUEST, getCourseSaga),
    takeLatest(GET_CHAPTER.REQUEST, getChapterSaga),
    takeLatest(POST_CHAPTER.REQUEST, postChapterSaga),
  ]);
}
