/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import { Form } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input({ placeholder, type }) {
  return <Form placeholder={placeholder} type={type} />;
}

Input.propTypes = {};

export default memo(Input);
