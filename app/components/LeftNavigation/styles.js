import styled from 'styled-components';
export const Wrapper = styled.div`
  --topNaviHeight: ${props => props.theme.navigation.topNaviHeight};
  position: absolute;
  display: flex;
  justify-content: center;
  top: ${props => props.theme.navigation.topNaviHeight};
  width: ${props => props.theme.navigation.leftNaviWidth};
  height: calc(100% - var(--topNaviHeight));
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props => props.theme.content.paddingTop};
  padding-bottom: 10%;
`;

export const LeftNavi = styled.div`
  display: flex;
  /* align-items: center; */
  width: 60%;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
`;

export const NaviWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

LeftNavi.ItemWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  margin-left: 30px;
`;

LeftNavi.Item = styled.div`
  cursor: pointer;
  align-self: center;
  width: 90px;
  position: absolute;
  text-align: center;
  left: 80px;
  height: 70px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  background-color: ${props =>
    props.selected ? props.theme.mainColor : 'transparent'};
  -webkit-transition-property: width; /* Safari */
  -webkit-transition-duration: 0.4s; /* Safari */
  -webkit-transform-style: ease-in;
  transition: 0.2s ease-in width;
  i {
    color: ${props => (!props.selected ? props.theme.mainColor : 'white')};
    text-align: center;
  }
  :after {
      content: '';
      margin-left: 4px;
      color: white;
      transition: 0.2s ease-in all;
  }

  :hover {
    width: 150px;
    left: 80px;
    position: absolute;
      background-color: ${props => props.theme.pointColor};
      color: ${props => (!props.selected ? props.theme.mainColor : 'white')};
    i {
      color: white;
    }
    transition: 0.2s ease-in-out all;
    z-index: 40;
      -webkit-box-shadow: 0px 2px 4px 0px rgba(238,120,96, 0.7);
  -moz-box-shadow: 0px 2px 4px 0px rgba(238,120,96, 0.7);
  box-shadow: 0px 2px 4px 0px rgba(238,120,96, 0.7);
    :after {
      content: '${props => props.title}';
      margin-left: 4px;
      color: white;
      transition: 0.2s ease-in all;
    }
  }
`;
LeftNavi.Text = styled.p`
  margin-top: 2px;
  color: ${props => (!props.selected ? props.theme.mainColor : 'white')};
`;
