/**
 *
 * Logo
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Images/analytics.png';
import { Wrapper, LogoImg, LogoText } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Logo() {
  return (
    <Link to="/">
      <Wrapper>
        <LogoImg>
          <LogoImg.Icon src={Icon} />
        </LogoImg>
        <LogoText>
          <LogoText.Main>SEMS</LogoText.Main>
          <LogoText.Sub>Sumisa Exam Management System</LogoText.Sub>
        </LogoText>
      </Wrapper>
    </Link>
  );
}

Logo.propTypes = {};

export default Logo;
