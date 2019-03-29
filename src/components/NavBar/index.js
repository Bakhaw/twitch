import React from 'react';
import styled from 'styled-components';
import { colors, layout } from '../../stylesheets';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${layout.NavBar.height};
  background: ${colors.purple.default};
`;

function NavBar() {
  return (
    <Wrapper>
      <p>NavBar</p>
    </Wrapper>
  );
}

export default NavBar;
