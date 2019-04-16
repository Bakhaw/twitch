import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GameCard from '../../components/GameCard';
import PrevButton from '../../components/PrevButton';
import { useFetch } from '../../api/hooks';
import { usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.colors.PageWrapper.background};
  background-image: ${props => props.colors.StreamsBanner.background},
    url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  padding: 25px;
  height: 200px;
  & .GameCard {
    cursor: unset;
    display: flex;
    .GameCard__Image  {
      margin: 0 15px 0 40px;
    }
    &:hover .GameCard__Title {
      text-decoration: unset;
    }
    .GameCard__Title {
      color: ${props => props.colors.StreamsBanner.title};
      font-size: 40px;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      width: 100%;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      .GameCard__Title {
        margin: 15px 0 0 0;
        text-align: center;
        font-size: 26px;
      }
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
        <PrevButton to='/directory' />
        <GameCard game={game[0]} />
      </Wrapper>
    );
  } else return null;
}

Banner.propTypes = {
  gameId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Banner;
