/**
 *
 * RegisterPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RoundButton, Logo, Input } from 'components';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  Wrapper,
  Header,
  Body,
  Footer,
  MainWrapper,
  ImageWrapper,
  RightContent,
  LoginBox,
} from '../LoginPage/styles';

export function RegisterPage() {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  return (
    <Wrapper>
      <MainWrapper>
        <Header>
          <Logo />
          <RoundButton title="가입하기" />
        </Header>
        <Body>
          <LoginBox>
            <LoginBox.Header>Register to SEMS</LoginBox.Header>
            <Input placeholder="관 코드" />
            <Input placeholder="비밀번호" type="password" />
            <LoginBox.Footer>
              <RoundButton invert title="로그인" />
            </LoginBox.Footer>
          </LoginBox>
        </Body>
        <Footer>Terms and Policy</Footer>
      </MainWrapper>
      <ImageWrapper>
        <RightContent>
          <RightContent.Title>환영합니다.</RightContent.Title>
          <br />
          <RightContent.Sub>
            SEMS - Sumisa Exam Management System는
          </RightContent.Sub>
          <RightContent.Sub>
            수학에 미친 사람들 전용 시험관리 시스템입니다.
          </RightContent.Sub>
        </RightContent>
      </ImageWrapper>
    </Wrapper>
  );
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
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
)(RegisterPage);
