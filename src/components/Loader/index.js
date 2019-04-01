import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(
    100vh - (50px + ${layout.NavBar.height})
  ); /* 50px is <PageWrapper /> padding */
  div  {
    color: ${props => props.colors.Loader.icon};
  }
`;

function Loader() {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <CircularProgress size={30} />
    </Wrapper>
  );
}

export default Loader;
