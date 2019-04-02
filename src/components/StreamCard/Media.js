import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Image = styled.img`
  background: ${props => props.colors.StreamCard.background};
  height: ${layout.StreamCard.height}px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(42, 51, 83, 0.3), 0 5px 5px rgba(0, 0, 0, 0.26);
`;

const Viewers = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  padding: 3px 6px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  &:hover {
    ${Image} {
      box-shadow: 0 8px 8px 0 rgba(42, 51, 83, 0.3),
        0 8px 8px rgba(0, 0, 0, 0.26);
    }
  }
`;

function Media({ stream: { thumbnail_url, user_name, viewer_count } }) {
  const colors = usePalette();
  const formatViews = views => {
    // ty https://stackoverflow.com/a/40724354
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(views) / 3) | 0;

    if (tier === 0) return views;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = views / scale;

    return scaled.toFixed(1) + suffix;
  };

  return (
    <Wrapper>
      <Image
        alt={`${user_name} stream preview`}
        colors={colors}
        src={`${thumbnail_url.slice(0, -21)}-1920x1080.jpg`}
      />
      <Viewers>{formatViews(viewer_count)} viewers</Viewers>
    </Wrapper>
  );
}

Media.propTypes = {
  stream: PropTypes.object
};

export default Media;
