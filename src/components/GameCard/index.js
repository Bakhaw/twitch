import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    <Link to={`/directory/game/${game.id}`}>
      <Media game={game} />
      <Description game={game} />
    </Link>
  </Wrapper>
);

GameCard.propTypes = {
  game: PropTypes.object
};

export default GameCard;
