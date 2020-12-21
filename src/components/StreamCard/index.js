import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Description from './Description';
import Media from './Media';

const StreamCard = ({ linkTo, stream }) => {
  if (!stream) return null;

  return (
    <Link to={linkTo}>
      <Media stream={stream} />
      <Description stream={stream} />
    </Link>
  );
};

StreamCard.propTypes = {
  stream: PropTypes.object,
};

export default StreamCard;
