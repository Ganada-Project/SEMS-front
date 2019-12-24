import styled from 'styled-components';
import { Icon, Tab } from 'semantic-ui-react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
`;

Header.Title = styled.p`
  font-size: 18px;
  color: ${props => props.theme.textColor};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 80px);
`;

export const ChapterWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  height: 90%;
  padding: 3%;
`;

Chapter.HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  height: 40px;
`;

Chapter.HeaderTitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme.textColor};
  font-weight: bold;
  margin-left: 2px;
  margin-bottom: 0;
`;

Chapter.MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  /* background-color: gainsboro; */
`;

Chapter.Tab = styled(Tab)`
  /* background-color: goldenrod; */
  width: 100%;
`;

Chapter.TabPane = styled(Tab.Pane)`
  width: 100%;
  /* box-shadow: 0px 0px 0px 0px !important; */
  .item {
    color: ${props => props.theme.textColor} !important;
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 80px;
`;

Chapter.Content = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding-top: 10px;
`;

Course.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 65px; */
  height: 30px;
  border: 1px
    ${props =>
    props.selected ? props.theme.mainColor : props.theme.borderColor}
    solid;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 1px 3px 1px 3px;
  color: ${props => (props.selected ? 'white' : props.theme.textColor)};
  &:hover {
    color: ${props => (props.selected ? 'white' : props.theme.textColor)};
    border: 1px ${props => props.theme.mainColor} solid;
  }
  cursor: pointer;
  background-color: ${props =>
    props.selected ? props.theme.mainColor : 'white'};
`;

Chapter.Icon = styled(Icon)`
  color: ${props => props.theme};
  font-size: 18px;
  cursor: pointer;
`;

Chapter.Index = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.mainColor};
`;

Chapter.ItemName = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
  margin-left: 20px;
`;

Chapter.InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Chapter.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 55px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const SectionWrapper = styled.div`
  flex: 1.5;
  background-color: khaki;
`;
