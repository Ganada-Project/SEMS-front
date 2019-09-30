/**
 *
 * RoundButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RoundButton({ title, invert }) {
  return (
    <Wrapper invert={invert}>
      <Title invert={invert}>{title}</Title>
    </Wrapper>
  );
}

RoundButton.propTypes = {
  title: PropTypes.string,
  invert: PropTypes.bool,
};

export default memo(RoundButton);
