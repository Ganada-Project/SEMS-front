/**
 *
 * HistoryPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHistoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Wrapper, Header, Body } from './styles';

export function HistoryPage() {
  useInjectReducer({ key: 'historyPage', reducer });
  useInjectSaga({ key: 'historyPage', saga });

  return (
    <Wrapper>
      <Header>
        <Header.Title>History</Header.Title>
      </Header>
      <Body />
    </Wrapper>
  );
}

HistoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  historyPage: makeSelectHistoryPage(),
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
)(HistoryPage);
