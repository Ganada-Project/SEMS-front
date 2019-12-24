/*
 *
 * ChapterListPage actions
 *
 */

import { GET_CHAPTER, GET_COURSE, POST_CHAPTER } from './constants';

export function getCourseAction() {
  return {
    type: GET_COURSE.REQUEST,
  };
}

export function getChapterAction({ courseId }) {
  return {
    type: GET_CHAPTER.REQUEST,
    courseId,
  };
}

export function postChapterAction({ courseId, name }) {
  return {
    type: POST_CHAPTER.REQUEST,
    courseId,
    name,
  };
}
