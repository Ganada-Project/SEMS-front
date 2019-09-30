import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.content.paddingTop};
`;

Header.Title = styled.h1`
  font-size: 30px;
  font-family: 'Raleway', sans-serif !important;
`;

export const Body = styled.div`
  --contentPadding: ${props => props.theme.content.paddingTop};
  width: 100%;
  height: calc(100% - var(--contentPadding));
`;
