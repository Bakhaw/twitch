import React from 'react';
import { Link } from 'react-router-dom';

import GameCard from '../../components/GameCard';
import List from '../../components/List';
import { layout } from '../../stylesheets';

function Content({ games }) {
  return (
    <List columnWidth={layout.GameCard.width}>
      {games.map(game => (
        <li key={game.id}>
          <Link to={`/directory/game/${game.id}`}>
            <GameCard game={game} />
          </Link>
        </li>
      ))}
    </List>
  );
}

export default Content;
