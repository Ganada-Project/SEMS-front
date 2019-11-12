/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Form } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input({ placeholder, type, onChange }) {
  return <Form placeholder={placeholder} type={type} onChange={onChange} />;
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Input);
