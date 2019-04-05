import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameCard from '../../components/GameCard';
import { useFetch } from '../../api/hooks';
import { usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  background-color: ${props => props.colors.PageWrapper.background};
  background-image: ${props => props.colors.StreamsBanner.background},
    url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  padding: 35px 25px;
  height: 200px;
  & .GameCard {
    cursor: unset;
    display: flex;
    &:hover .GameCard__Title {
      text-decoration: unset;
    }
    .GameCard__Title {
      color: ${props => props.colors.StreamsBanner.title};
      font-size: 40px;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      margin-left: 10px;
      width: 100%;
    }
  }
`;

function Banner({ gameId }) {
  const colors = usePalette();
  const { data: game } = useFetch('getGameById', [gameId]);

  if (game.length > 0) {
    const backgroundImage = `${game[0].box_art_url.slice(
      0,
      -21
    )}-1920x1080.jpg`;
    return (
      <Wrapper backgroundImage={backgroundImage} colors={colors}>
        <GameCard game={game[0]} />
      </Wrapper>
    );
  } else return null;
}

Banner.propTypes = {
  gameId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Banner;
