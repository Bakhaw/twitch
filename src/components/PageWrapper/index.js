import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.main`
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${`calc(100vh - ${layout.NavBar.height})`};
  width: ${`calc(100vw - ${layout.LeftMenu.width})`};
  background: ${props => props.colors.wrapper.background};
`;

const ChildrenWrapper = styled.div`
  padding: 50px 20px;
`;

function PageWrapper({ children }) {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}

export default PageWrapper;
