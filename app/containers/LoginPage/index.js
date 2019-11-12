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
import { RoundButton, Logo, Input, Toast } from 'components';
import makeSelectLoginPage, { makeSelectFailed } from './selectors';
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

export function LoginPage({ pushUrl, postLogin, failed }) {
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
      placeholder: '이메일',
    };
  };

  const usePasswordInput = () => {
    const [password, setPassword] = useState('');
    function onChangeInput(e) {
      setPassword(e.target.value);
    }
    return {
      value: password,
      type: 'password',
      onChange: onChangeInput,
      placeholder: '비밀번호',
    };
  };

  const emailProps = useEmailInput();
  const passwordProps = usePasswordInput();

  const onClickLogin = () => {
    postLogin({ email: emailProps.value, password: passwordProps.value });
  };

  return (
    <Wrapper>
      <Toast activate={failed} />
      <MainWrapper>
        <Header>
          <Logo />
          <RoundButton title="가입하기" onClick={routeToRegister} />
        </Header>
        <Body>
          <LoginBox>
            <LoginBox.Header>Login to SEMS</LoginBox.Header>
            <Input {...emailProps} />
            <Input {...passwordProps} />
            <LoginBox.Footer>
              <RoundButton invert title="로그인" onClick={onClickLogin} />
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
  failed: PropTypes.bool,
  pushUrl: PropTypes.func,
  postLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  failed: makeSelectFailed(),
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
