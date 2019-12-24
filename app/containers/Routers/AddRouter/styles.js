import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.theme.content.paddingTop};
`;

Header.Title = styled.h1`
  font-size: 30px;
  font-family: 'Raleway', sans-serif !important;
`;
export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
`;

export const AddNaviWrapper = styled.div`
  flex: 1;
`;

export const AddNavi = styled.div`
  --contentPadding: ${props => props.theme.content.paddingTop};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.textColor};
  height: calc(100% - var(--contentPadding));
`;

AddNavi.Item = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 70px;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px 10px 10px 20px;
  margin-bottom: 25px;
  color: ${props =>
    props.value === props.currenturl
      ? props.theme.mainColor
      : props.theme.textColor} !important;
  font-weight: ${props =>
    props.value === props.currenturl ? 'bold' : 'normal'};

  cursor: pointer;
`;

AddNavi.ItemIndicator = styled.div`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 0px;
  z-index: 10;
  width: 5px;
  border-radius: 2px;
  background-color: ${props => props.theme.mainColor};
`;

export const ContentWrapper = styled.div`
  flex: 8;
`;
