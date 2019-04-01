import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.main`
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${`calc(100vh - ${layout.NavBar.height})`};
  width: 100vw;
  background: ${props => props.colors.PageWrapper.background};
`;

const ChildrenWrapper = styled.div`
  padding: 50px 20px;
  min-height: calc(100% - 100px); /* 100px === padding just before: 50px */
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