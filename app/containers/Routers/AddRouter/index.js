import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Wrapper,
  AddNaviWrapper,
  ContentWrapper,
  AddNavi,
  Header,
  Body,
} from './styles';
import { ExamListPage } from '../../ExamListPage';
import { ChapterListPage } from '../../ChapterListPage';

function AddRouter({ match }) {
  const current = location.pathname.split('/');
  const currentUrl = current[2];

  return (
    <Wrapper>
      <Body>
        <AddNaviWrapper>
          <Header>
            <Header.Title>Create</Header.Title>
          </Header>
          <AddNavi>
            <AddNavi.Item
              to={`${match.url}/exam`}
              value="exam"
              currenturl={currentUrl}
            >
              {currentUrl === 'exam' ? <AddNavi.ItemIndicator /> : null}
              시험지
            </AddNavi.Item>
            <AddNavi.Item
              to={`${match.url}/chapter`}
              value="chapter"
              currenturl={currentUrl}
            >
              {currentUrl === 'chapter' ? <AddNavi.ItemIndicator /> : null}
              단원
            </AddNavi.Item>
            <AddNavi.Item
              to={`${match.url}/detail`}
              value="detail"
              currenturl={currentUrl}
            >
              {currentUrl === 'detail' ? <AddNavi.ItemIndicator /> : null}
              항목
            </AddNavi.Item>
          </AddNavi>
        </AddNaviWrapper>
        <ContentWrapper>
          <Switch>
            <Route path={`${match.url}/exam`} component={ExamListPage} />
            <Route path={`${match.url}/chapter`} component={ChapterListPage} />
          </Switch>
        </ContentWrapper>
      </Body>
    </Wrapper>
  );
}

export default AddRouter;
