import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Media from './Media';

const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    .GameCard__Image {
      box-shadow: 0 8px 8px 0 rgba(42, 51, 83, 0.3),
        0 8px 8px rgba(0, 0, 0, 0.26);
    }
    .GameCard__Title {
      text-decoration: underline;
    }
  }
`;

const GameCard = ({ game }) => (
  <Wrapper className='GameCard'>
    <Media game={game} />
    <Description game={game} />
  </Wrapper>
);

export default GameCard;
