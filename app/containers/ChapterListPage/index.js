/**
 *
 * ChapterListPage
 *
 */

import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Icon, Modal, Button } from 'semantic-ui-react';
import { theme } from '../App/constants';
import reducer, { initialState } from './reducer';
import saga from './saga';
import {
  Wrapper,
  Header,
  Body,
  ChapterWrapper,
  Chapter,
  SectionWrapper,
  Course,
} from './styles';
import {
  getChapterAction,
  getCourseAction,
  postChapterAction,
} from './actions';
import { SemanticInput } from '../../components';
import { usePrevious } from '../../utils/hooks';

const courseInitialState = {
  id: null,
  grade: null,
  semester: null,
};

export function ChapterListPage() {
  useInjectReducer({ key: 'chapterListPage', reducer });
  useInjectSaga({ key: 'chapterListPage', saga });

  const dispatch = useDispatch();
  const chapterState = useSelector(
    state => state.chapterListPage || initialState,
  );
  const { courseList, chapterList, addChapterLoading } = chapterState;

  const [courseState, setCourseState] = useState(courseInitialState);
  const [chapterModalOpen, setChapterModalOpen] = useState(false);
  const [chapterDeleteModalOpen, setChapterDeleteModalOpen] = useState(false);

  const [chapterValue, setChapterValue] = useState('');
  const chapterInput = {
    value: chapterValue,
    onChange: e => setChapterValue(e.target.value),
  };

  useEffect(() => {
    dispatch(getCourseAction());
    return () => {
      console.log('cleaned');
    };
  }, []);

  useEffect(() => {
    if (!courseList[0].id) return;
    setCourseState(courseList[0]);
    dispatch(getChapterAction({ courseId: courseList[0].id }));
  }, [courseList]);

  const previousAddChatperLoading = usePrevious(addChapterLoading);

  useEffect(() => {
    if (previousAddChatperLoading && !addChapterLoading) {
      handleChapterModal();
    }
  }, [addChapterLoading]);

  const handleChapterModal = () => {
    setChapterModalOpen(!chapterModalOpen);
    setChapterValue('');
  };

  const onClickCourse = course => {
    setCourseState(course);
    dispatch(getChapterAction({ courseId: course.id }));
  };

  const onClickAddChapter = () => {
    dispatch(
      postChapterAction({ courseId: courseState.id, name: chapterValue }),
    );
  };

  const handleTabChange = (e, data) => {
    const { activeIndex } = data;
    let target;
    if (activeIndex === 0) {
      target = courseList.filter(x => x.grade[0] === '초');
      setCourseState(target[0]);
    } else if (activeIndex === 1) {
      target = courseList.filter(x => x.grade[0] === '중');
      setCourseState(target[0]);
    } else {
      target = courseList.filter(x => x.grade[0] === '고');
      setCourseState(target[0]);
    }
    dispatch(getChapterAction({ courseId: target[0].id }));
  };

  const panes = [
    {
      menuItem: '초등',
      render: () => (
        <Chapter.TabPane attached={false}>
          <Course>
            {courseList
              .filter(x => x.grade[0] === '초')
              .map(x => (
                <Course.Item
                  key={`tab-ele-${x.id}`}
                  selected={x.id === courseState.id}
                  onClick={() => onClickCourse(x)}
                >{`${x.grade} ${x.semester}학기`}</Course.Item>
              ))}
          </Course>
        </Chapter.TabPane>
      ),
    },
    {
      menuItem: '중등',
      render: () => (
        <Chapter.TabPane attached={false}>
          <Course>
            {courseList
              .filter(x => x.grade[0] === '중')
              .map(x => (
                <Course.Item
                  key={`tab-mid-${x.id}`}
                  selected={x.id === courseState.id}
                  onClick={() => onClickCourse(x)}
                >{`${x.grade} ${x.semester}학기`}</Course.Item>
              ))}
          </Course>
        </Chapter.TabPane>
      ),
    },
    {
      menuItem: '고등',
      render: () => (
        <Chapter.TabPane attached={false}>
          <Course>
            {courseList
              .filter(x => x.grade[0] === '고')
              .map(x => (
                <Course.Item
                  key={`tab-high-${x.id}`}
                  selected={x.id === courseState.id}
                  onClick={() => onClickCourse(x)}
                >{`${x.grade} ${x.semester}학기`}</Course.Item>
              ))}
          </Course>
        </Chapter.TabPane>
      ),
    },
  ];

  return (
    <Wrapper>
      <Modal size="tiny" open={chapterModalOpen} onClose={handleChapterModal}>
        <Modal.Header>{`${courseState.grade} ${
          courseState.semester
        }학기 대단원 추가`}</Modal.Header>
        <Modal.Content>
          <SemanticInput
            {...chapterInput}
            size="small"
            fluid
            placeholder="대단원 명을 입력해주세요"
            autoFocus
          />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={handleChapterModal}>
            취소
          </Button>
          <Button
            loading={addChapterLoading}
            onClick={onClickAddChapter}
            positive
            icon="checkmark"
            labelPosition="right"
            content="추가"
          />
        </Modal.Actions>
      </Modal>
      <Header>
        <Header.Title />
      </Header>
      <Body>
        <ChapterWrapper>
          <Chapter>
            <Chapter.HeaderWrapper>
              <Chapter.HeaderTitle>대단원</Chapter.HeaderTitle>
              <Chapter.Icon
                name="plus"
                size="large"
                theme={theme.mainColor}
                onClick={handleChapterModal}
              />
            </Chapter.HeaderWrapper>
            <Chapter.MainWrapper>
              <Chapter.Tab
                menu={{ secondary: true, pointing: true }}
                onTabChange={handleTabChange}
                panes={panes}
              />
              <Chapter.Content>
                {chapterList.map((x, index) => (
                  <Chapter.Item key={`chapter-high-${x.id}`}>
                    <Chapter.InfoWrapper>
                      <Chapter.Index>{index + 1}</Chapter.Index>
                      <Chapter.ItemName>{x.name}</Chapter.ItemName>
                    </Chapter.InfoWrapper>
                    <Chapter.Icon
                      name="trash alternate outline"
                      size="large"
                      theme={theme.pointColor}
                      onClick={handleChapterModal}
                    />
                  </Chapter.Item>
                ))}
              </Chapter.Content>
            </Chapter.MainWrapper>
          </Chapter>
        </ChapterWrapper>
        <SectionWrapper />
      </Body>
    </Wrapper>
  );
}

ChapterListPage.propTypes = {};

export default ChapterListPage;
