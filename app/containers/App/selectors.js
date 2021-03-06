import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectApp = state => state.appReducer || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectUserData = () =>
  createSelector(
    selectApp,
    appState => appState.userData,
  );

export { makeSelectLocation, makeSelectUserData };
