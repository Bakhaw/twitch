import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Image = styled.img`
  height: ${layout.GameCard.height}px;
  width: ${layout.GameCard.width}px;
  border-radius: 6px;
  background: ${props => props.colors.GameCard.subtitle};
  box-shadow: 0 5px 5px 0 rgba(42, 51, 83, 0.3), 0 5px 5px rgba(0, 0, 0, 0.26);
`;

function Media({ game: { box_art_url, name } }) {
  const colors = usePalette();
  const gameImg = `${box_art_url.slice(0, -21)}-1920x1080.jpg`;

  return (
    <Image
      alt={`${name} poster`}
      className='GameCard__Image'
      colors={colors}
      src={gameImg}
    />
  );
}

Media.propTypes = {
  game: PropTypes.object
};

export default Media;
