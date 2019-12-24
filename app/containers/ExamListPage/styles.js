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

export const Folder = styled.div`
  width: 300px;
  height: 250px;
  display: inline-block;
  margin: auto;
  position: relative;
  background-color: #708090;
  border-radius: 0 3px 3px 3px;
  /*box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.59);*/
  margin-bottom: -8px;
  margin-top: 12px;

  :before {
    content: '';
    width: 50%;
    height: 1em;
    border-radius: 10px 20px 0 0;
    background-color: #708090;
    position: absolute;
    top: -0.9em;
    left: 0px;
  }
`;
