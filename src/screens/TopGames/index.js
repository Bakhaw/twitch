import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import API from '../../api';
import GameCard from '../../components/GameCard';
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

  return (
    <PageWrapper isLoading={games.length === 0}>
      <GamesList>
        {games.map(game => (
          <li key={game.id}>
            <Link to={`/directory/game/${game.id}`}>
              <GameCard game={game} />
            </Link>
          </li>
        ))}
      </GamesList>
    </PageWrapper>
  );
}

export default TopGames;
