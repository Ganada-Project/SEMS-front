/**
 *
 * RoundButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './styles';
// import styled from 'styled-components';

function RoundButton({ title, invert, onClick }) {
  return (
    <Wrapper invert={invert} onClick={onClick}>
      <Title invert={invert}>{title}</Title>
    </Wrapper>
  );
}

RoundButton.propTypes = {
  title: PropTypes.string,
  invert: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(RoundButton);
