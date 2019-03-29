import React from 'react';
import styled from 'styled-components';
import { colors, layout } from '../../stylesheets';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.purple.dark};
  margin-top: ${layout.NavBar.height};
  height: calc(100vh - ${layout.NavBar.height});
  width: ${layout.LeftMenu.width};
`;

function LeftMenu() {
  return (
    <Wrapper>
      <p>Left menu</p>
    </Wrapper>
  );
}

export default LeftMenu;
