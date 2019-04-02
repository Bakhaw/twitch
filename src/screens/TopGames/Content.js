import React from 'react';
import PropTypes from 'prop-types';
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

Content.propTypes = {
  games: PropTypes.array
};

export default Content;
