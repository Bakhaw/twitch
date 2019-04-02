import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  background-color: ${props => props.colors.Loader.background};
  div  {
    color: ${props => props.colors.Loader.color};
  }
`;

function Loader({ fullscreen }) {
  const colors = usePalette();
  const height = fullscreen
    ? `calc(
    100vh - (50px + ${layout.NavBar.height})
  )`
    : '150px'; /* 50px is <PageWrapper /> padding */
  return (
    <Wrapper colors={colors} height={height}>
      <CircularProgress size={30} />
    </Wrapper>
  );
}

export default Loader;
