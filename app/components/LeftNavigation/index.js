/**
 *
 * LeftNavigation
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { theme } from 'containers/App/constants';
import { Wrapper, LeftNavi, NaviWrapper } from './styles';
import { menu } from './confing';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LeftNavigation({ location }) {
  const target = location.pathname.split('/')[1];
  return (
    <Wrapper>
      <LeftNavi>
        <NaviWrapper>
          {menu.map(x => (
            <Link to={`/${x.value}`} key={x.id}>
              <LeftNavi.Item selected={target === x.value} title={x.name}>
                <LeftNavi.ItemWrapper>
                  <Icon name={x.icon} size="big" />
                </LeftNavi.ItemWrapper>
                {/* <LeftNavi.Text selected={target === x.value}>
                {x.name}
              </LeftNavi.Text> */}
              </LeftNavi.Item>
            </Link>
          ))}
        </NaviWrapper>
      </LeftNavi>
    </Wrapper>
  );
}

LeftNavigation.propTypes = {
  location: PropTypes.object,
};

export default compose(
  memo,
  withRouter,
)(LeftNavigation);
