/**
 *
 * GradePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGradePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Wrapper, Header, Body } from './styles';

export function GradePage() {
  useInjectReducer({ key: 'gradePage', reducer });
  useInjectSaga({ key: 'gradePage', saga });

  return (
    <Wrapper>
      <Header>
        <Header.Title>Grading</Header.Title>
      </Header>
      <Body />
    </Wrapper>
  );
}

GradePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gradePage: makeSelectGradePage(),
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
)(GradePage);
