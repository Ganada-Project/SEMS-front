import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gradePage state domain
 */

const selectGradePageDomain = state => state.gradePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GradePage
 */

const makeSelectGradePage = () =>
  createSelector(
    selectGradePageDomain,
    substate => substate,
  );

export default makeSelectGradePage;
export { selectGradePageDomain };
