import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
LogoImg.Icon = styled.img`
  width: 50px;
  height: 50px;
`;
export const LogoText = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;
LogoText.Main = styled.h1`
  font-family: 'Raleway', sans-serif !important;
  line-height: 1em;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;
LogoText.Sub = styled.h4`
  margin: 0;
  font-family: 'Raleway', sans-serif !important;
  font-size: 16px;
  color: ${props => props.theme.textColor};
`;
