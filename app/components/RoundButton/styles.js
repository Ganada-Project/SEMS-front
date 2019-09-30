import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props =>
    props.invert ? props.theme.mainColor : 'transparent'};

  &:hover {
    transition: all 0.3s ease;
    background-color: ${props =>
      props.invert ? props.theme.mainColorDark : 'transparent'};
    span {
      color: ${props => (props.invert ? 'white' : 'black')};
    }
  }
  border-radius: 10px;
  cursor: pointer;
`;
export const Title = styled.span`
  color: ${props => (props.invert ? 'white' : props.theme.textColor)};
`;
