import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 5%;
  width: 100vw;
  height: ${props => props.theme.navigation.topNaviHeight};
  background-color: white;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.4);
`;
