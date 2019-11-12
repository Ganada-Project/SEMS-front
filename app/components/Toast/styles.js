import styled from 'styled-components';

export const ToastWrapper = styled.div`
  position: fixed;
  visibility: ${props => (!props.activate ? 'hidden' : 'visible')};
  bottom: 3%;
  left: 50%;
  width: 30vw;
  height: 60px;
  background-color: red;
  transform: translate(-50%, -50%);
  -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
    fadeout 0.5s 2.5s;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.5s 4.5s;
`;
