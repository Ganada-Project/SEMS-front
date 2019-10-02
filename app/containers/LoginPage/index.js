/**
 *
 * LoginPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RoundButton, Logo, Input } from 'components';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postLoginRequestAction } from './actions';
import {
  Wrapper,
  Header,
  Body,
  Footer,
  MainWrapper,
  ImageWrapper,
  RightContent,
  LoginBox,
} from './styles';

export function LoginPage({ pushUrl }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const routeToRegister = () => {
    pushUrl('/register');
  };

  const useEmailInput = () => {
    const [email, setEmail] = useState('');
    function onChangeInput(e) {
      setEmail(e.target.value);
    }
    return {
      value: email,
      onChange: onChangeInput,
    };
  };

  return (
    <Wrapper>
      <MainWrapper>
        <Header>
          <Logo />
          <RoundButton title="가입하기" onClick={routeToRegister} />
        </Header>
        <Body>
          <LoginBox>
            <LoginBox.Header>Login to SEMS</LoginBox.Header>
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

LoginPage.propTypes = {
  pushUrl: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushUrl: url => dispatch(push(url)),
    postLogin: ({ email, password }) =>
      dispatch(postLoginRequestAction({ email, password })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
