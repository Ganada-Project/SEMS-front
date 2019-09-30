/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Switch, Route, Redirect } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import GradePage from 'containers/GradePage/Loadable';
import ExamListPage from 'containers/ExamListPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { TopNavigation, LeftNavigation } from 'components';
import { localStorageData } from '../../constants';

import GlobalStyle from '../../global-styles';

import saga from './saga';
import { theme } from './constants';
import { Content } from './styles';


/* eslint-disable react/prop-types */

export default function App({ location }) {
  const isAuthed = localStorage.getItem(localStorageData.idToken);
  useInjectSaga({ key: 'app', saga });
  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthed ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          !isAuthed ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {isAuthed ? (
          <Fragment>
            <TopNavigation />
            <LeftNavigation  />
          </Fragment>
        ) : null}
        <Content authed={isAuthed}>
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage} />
            <PrivateRoute path="/grade" component={GradePage} />
            <PrivateRoute path="/history" component={HistoryPage} />
            <PrivateRoute path="/exam" component={ExamListPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}
