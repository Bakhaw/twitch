import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  /* background-color: ${props => props.colors.Loader.background}; */
  div  {
    color: ${props => props.colors.Loader.color};
  }
`;

function Loader({ fullscreen, size = 30, wrapperHeight = '150px' }) {
  const colors = usePalette();
  const height = fullscreen
    ? `calc(
    100vh - (50px + ${layout.NavBar.height})
  )` /* 50px is <PageWrapper /> padding */
    : wrapperHeight;
  return (
    <Wrapper colors={colors} height={height}>
      <CircularProgress size={size} />
    </Wrapper>
  );
}

Loader.propTypes = {
  fullscreen: PropTypes.bool
};

export default Loader;
