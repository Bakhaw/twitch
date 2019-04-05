import React from 'react';
import styled from 'styled-components';

import { layout } from '../../stylesheets';

const Wrapper = styled.div`
  border: 2px solid red;
  position: fixed;
  left: 0;
  top: ${layout.NavBar.height};
  right: ${layout.Chat.width}px;
  h1 {
    margin: 0;
  }
`;

function TopBar() {
  return (
    <Wrapper>
      <h1>Top bar hehe</h1>
    </Wrapper>
  );
}

export default TopBar;
