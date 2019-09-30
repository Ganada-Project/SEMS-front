/**
 *
 * DashboardPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Wrapper, Header, Body } from './styles';

export function DashboardPage() {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  return (
    <Wrapper>
      <Header>
        <Header.Title>Dashboard</Header.Title>
      </Header>
      <Body />
    </Wrapper>
  );
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
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
)(DashboardPage);
