import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Image = styled.img`
  background: ${(props) => props.colors.StreamCard.background};
  min-height: ${layout.StreamCard.height}px;
  min-width: 100%;
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
  border-radius: 6px;
  &:hover {
    ${Image} {
      box-shadow: 0 8px 8px 0 rgba(42, 51, 83, 0.3),
        0 8px 8px rgba(0, 0, 0, 0.26);
    }
  }
`;

function Media({
  stream: { thumbnail_url, user_name, view_count, viewer_count },
}) {
  const colors = usePalette();
  const formatViews = (views) => {
    // ty https://stackoverflow.com/a/40724354
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(views) / 3) | 0;

    if (tier === 0) return views;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = views / scale;

    return scaled.toFixed(1) + suffix;
  };

  const formatImgUrl = (imgUrl) => {
    const formattedUrl = imgUrl
      .replace('%{width}', 1920)
      .replace('%{height}', 1080)
      .replace('{width}', 1920)
      .replace('{height}', 1080);

    return formattedUrl;
  };

  const views = viewer_count
    ? `${formatViews(viewer_count)} viewers`
    : `${formatViews(view_count)} views`;

  return (
    <Wrapper colors={colors}>
      <Image
        alt={`${user_name} stream preview`}
        colors={colors}
        src={formatImgUrl(thumbnail_url)}
      />
      <Viewers>{views}</Viewers>
    </Wrapper>
  );
}

Media.propTypes = {
  stream: PropTypes.object,
};

export default Media;
