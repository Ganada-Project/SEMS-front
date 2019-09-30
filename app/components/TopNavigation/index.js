/**
 *
 * TopNavigation
 *
 */

import React, { memo } from 'react';
import { Wrapper } from './styles';
import Logo from '../Logo';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TopNavigation() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

TopNavigation.propTypes = {};

export default memo(TopNavigation);
