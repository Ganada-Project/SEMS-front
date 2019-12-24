/**
 *
 * SemanticInput
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SemanticInput(props) {
  const { inputRef } = props;
  return <StyledInput {...props} ref={inputRef} />;
}

SemanticInput.propTypes = {
  inputRef: PropTypes.element,
};

export default memo(SemanticInput);
