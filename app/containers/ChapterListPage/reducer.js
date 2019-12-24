/*
 *
 * ChapterListPage reducer
 *
 */
import produce from 'immer';
import { GET_CHAPTER, GET_COURSE, POST_CHAPTER } from './constants';

export const initialState = {
  courseList: [{ id: null, grade: '' }],
  chapterList: [{ id: null, name: '' }],
  addChapterLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const chapterListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_COURSE.SUCCESS:
        draft.courseList = action.payload.courseList;
        break;
      case GET_CHAPTER.SUCCESS:
        draft.chapterList = action.payload.chapterList;
        break;
      case POST_CHAPTER.REQUEST:
        draft.addChapterLoading = true;
        break;
      case POST_CHAPTER.SUCCESS:
        draft.addChapterLoading = false;
        break;
    }
  });

export default chapterListPageReducer;
