import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Title = styled.h3`
  width: ${layout.GameCard.width}px;
  color: ${props => props.colors.GameCard.title};
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function Description({ game: { name } }) {
  const colors = usePalette();
  return (
    <Title className='GameCard__Title' colors={colors}>
      {name}
    </Title>
  );
}

export default Description;
