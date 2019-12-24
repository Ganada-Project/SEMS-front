/**
 *
 * ExamListPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectExamListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Wrapper, Header, Body, Folder } from './styles';

export function ExamListPage() {
  useInjectReducer({ key: 'examListPage', reducer });
  useInjectSaga({ key: 'examListPage', saga });

  return (
    <Wrapper>
      <Header>
        <Header.Title />
      </Header>
      <Body>
        <Folder />
      </Body>
    </Wrapper>
  );
}

ExamListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  examListPage: makeSelectExamListPage(),
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
)(ExamListPage);
