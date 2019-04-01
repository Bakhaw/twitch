import React from 'react';
import styled from 'styled-components';

import LoaderGIF from '../../assets/loader.gif';
import { usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 3px;
  border: ${props => `5px solid ${props.colors.purple.light}`};
`;

function Loader() {
  const colors = usePalette();
  return (
    <Wrapper>
      <Image alt='Loader GIF' colors={colors} src={LoaderGIF} />
    </Wrapper>
  );
}

export default Loader;
