import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../Loader';
import { layout, usePalette } from '../../stylesheets';

const Wrapper = styled.main`
  min-height: ${`calc(100vh - ${layout.NavBar.height})`};
  width: 100vw;
  background: ${props => props.colors.PageWrapper.background};
`;

function PageWrapper({ children, isLoading }) {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      {isLoading ? <Loader fullscreen /> : children}
    </Wrapper>
  );
}

PageWrapper.propTypes = {
  isLoading: PropTypes.bool
};

export default PageWrapper;
