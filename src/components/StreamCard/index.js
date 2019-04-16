import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Description from './Description';
import Media from './Media';

const StreamCard = ({ stream }) => (
  <Link to={`/directory/game/${stream.game_id}/channel/${stream.user_id}`}>
    <Media stream={stream} />
    <Description stream={stream} />
  </Link>
);

StreamCard.propTypes = {
  stream: PropTypes.object
};

export default StreamCard;
