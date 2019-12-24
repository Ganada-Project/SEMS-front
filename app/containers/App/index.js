/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Switch, Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';

import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import GradePage from 'containers/GradePage/Loadable';
import ExamListPage from 'containers/ExamListPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AddRouter from 'containers/Routers/AddRouter';
import { TopNavigation, LeftNavigation } from 'components';
import { localStorageData } from '../../constants';

import GlobalStyle from '../../global-styles';

import saga from './saga';
import { theme } from './constants';
import { Content } from './styles';
import { makeSelectUserData } from './selectors';

/* eslint-disable react/prop-types */

function App({ user }) {
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
            <LeftNavigation />
          </Fragment>
        ) : null}
        <Content authed={isAuthed}>
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPage} />
            <PrivateRoute path="/grade" component={GradePage} />
            <PrivateRoute path="/history" component={HistoryPage} />
            <PrivateRoute path="/add" component={AddRouter} />
            <PublicRoute path="/login" component={LoginPage} />
            <PublicRoute path="/register" component={RegisterPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
