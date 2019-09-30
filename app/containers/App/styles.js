import styled from 'styled-components';

export const Content = styled.div`
  --topNaviHeight: ${props => props.theme.navigation.topNaviHeight};
  --leftNaviWidth: ${props => props.theme.navigation.leftNaviWidth};
  position: absolute;
  background-color: ${props => props.theme.backgroundColor};
  width: ${props =>
    props.authed ? 'calc(100% - var(--leftNaviWidth));' : '100%'};
  height: ${props =>
    props.authed ? 'calc(100% - var(--topNaviHeight));' : '100%'};
  top: ${props => (props.authed ? 'var(--topNaviHeight)' : 0)};
  left: ${props => (props.authed ? 'var(--leftNaviWidth)' : 0)};
`;
