/**
 *
 * Toast
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ToastWrapper } from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Toast({ activate }) {
  return !activate ? null : (
    <ToastWrapper activate={activate}>올바르지 않습니다</ToastWrapper>
  );
}

Toast.propTypes = {
  activate: PropTypes.bool,
};

export default memo(Toast);
