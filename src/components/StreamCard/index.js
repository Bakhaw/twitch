import React from 'react';

import Description from './Description';
import Media from './Media';

const StreamCard = ({ stream }) => (
  <>
    <Media stream={stream} />
    <Description stream={stream} />
  </>
);

export default StreamCard;
