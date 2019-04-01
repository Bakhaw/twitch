import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Image = styled.img`
  height: auto; /* height is defined in const gameImg (...url-{width}x{height}.jpg)*/
  width: ${layout.GameCard.width}px;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(42, 51, 83, 0.3), 0 5px 5px rgba(0, 0, 0, 0.26);
`;

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

const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    ${Image} {
      box-shadow: 0 8px 8px 0 rgba(42, 51, 83, 0.3),
        0 8px 8px rgba(0, 0, 0, 0.26);
    }
    ${Title} {
      text-decoration: underline;
    }
  }
`;

function GameCard({ game }) {
  const colors = usePalette();
  const gameImg = `${game.box_art_url.slice(0, -21)}-${layout.GameCard.width}x${
    layout.GameCard.height
  }.jpg`;

  return (
    <Wrapper>
      <Image alt={`${game.name} poster`} src={gameImg} />
      <Title colors={colors}>{game.name}</Title>
    </Wrapper>
  );
}
export default GameCard;
