import React from 'react';
import styled from 'styled-components';
import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.colors.purple.dark};
  margin-top: ${layout.NavBar.height};
  height: calc(100vh - ${layout.NavBar.height});
  width: ${layout.LeftMenu.width};
`;

function LeftMenu() {
  const colors = usePalette();
  return <Wrapper colors={colors} />;
}

export default LeftMenu;
