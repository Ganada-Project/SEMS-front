import styled from 'styled-components';

export const Form = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
  padding: 3px 20px;
  color: ${props => props.theme.textColor};
  :focus {
    outline: none !important;
    box-shadow: 0 0 10px ${props => props.theme.subColor};
  }
`;
