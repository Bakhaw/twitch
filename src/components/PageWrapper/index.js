import React from 'react';
import styled from 'styled-components';

import { layout } from '../../stylesheets';

const Wrapper = styled.main`
  overflow: scroll;
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${`calc(100vh - ${layout.NavBar.height})`};
  width: ${`calc(100vw - ${layout.LeftMenu.width})`};
`;

function PageWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PageWrapper;
