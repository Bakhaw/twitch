import React from 'react';
import { Link } from 'react-router-dom';

import GameCard from '../../components/GameCard';
import List from '../../components/List';
import PageWrapper from '../../components/PageWrapper';
import { layout } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

function TopGames() {
  const { data: topGames } = useFetch('getTopGames');

  return (
    <PageWrapper isLoading={topGames.length === 0}>
      <List columnWidth={layout.GameCard.width}>
        {topGames.map(game => (
          <li key={game.id}>
            <Link to={`/directory/game/${game.id}`}>
              <GameCard game={game} />
            </Link>
          </li>
        ))}
      </List>
    </PageWrapper>
  );
}

export default TopGames;
