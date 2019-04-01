import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../../api';
import GameCard from '../../components/GameCard';
import Loader from '../../components/Loader';
import PageWrapper from '../../components/PageWrapper';

import { layout } from '../../stylesheets';

const GamesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${layout.GameCard.width}px);
  justify-content: center;
  gap: 40px;
`;

function TopGames() {
  const [games, setGames] = useState([]);

  const getData = async () => {
    const { data } = await API.getTopGames();
    await setGames(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (games.length === 0)
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <GamesList>
        {games.map(game => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </GamesList>
    </PageWrapper>
  );
}

export default TopGames;
