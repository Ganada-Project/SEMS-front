import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledInput = styled(Input)`
  input {
    :focus {
      border: 1px solid ${props => props.theme.mainColor} !important;
    }
  }
`;
