import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the examListPage state domain
 */

const selectExamListPageDomain = state => state.examListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExamListPage
 */

const makeSelectExamListPage = () =>
  createSelector(
    selectExamListPageDomain,
    substate => substate,
  );

export default makeSelectExamListPage;
export { selectExamListPageDomain };
