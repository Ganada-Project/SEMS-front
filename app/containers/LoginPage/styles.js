import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: ${props => props.theme.mainColor};
  flex: 1.5;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20% 10%;
`;

RightContent.Title = styled.h1`
  font-size: 40px;
  color: white;
`;

RightContent.Sub = styled.p`
  font-size: 20px;
  margin-bottom: 0;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 3% 5%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 10;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 50%;
`;

LoginBox.Header = styled.p`
  font-family: 'Raleway', sans-serif !important;
  color: ${props => props.theme.textColor};
  margin-bottom: 0;
  font-size: 26px;
`;

LoginBox.Footer = styled.div`
  align-items: center;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 3% 5%;
`;
