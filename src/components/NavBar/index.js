import React from 'react';
import styled from 'styled-components';

import Links from './Links';
import ToggleThemeButton from './ToggleThemeButton';
import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: ${layout.NavBar.height};
  background: ${props => props.colors.NavBar.background};
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
`;

function NavBar() {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <Links />
      <ToggleThemeButton />
    </Wrapper>
  );
}

export default NavBar;
