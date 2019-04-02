import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import Media from './Media';

const StreamCard = ({ stream }) => (
  <>
    <Media stream={stream} />
    <Description stream={stream} />
  </>
);

StreamCard.propTypes = {
  stream: PropTypes.object
};

export default StreamCard;
