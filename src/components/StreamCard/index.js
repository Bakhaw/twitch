import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Image = styled.img`
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

const ImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  &:hover {
    ${Image} {
      box-shadow: 0 8px 8px 0 rgba(42, 51, 83, 0.3),
        0 8px 8px rgba(0, 0, 0, 0.26);
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const StreamerImg = styled.img`
  height: 38px;
  width: 38px;
  margin: 10px 10px 0 0;
  border-radius: 50%;
`;

const Title = styled.h3`
  cursor: pointer;
  width: calc(
    ${layout.StreamCard.width}px - 50px
  ); /* 53px is StreamerImg almost total width */
  color: ${props => props.colors.StreamCard.title};
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover  {
    text-decoration: underline;
  }
`;

const Subtitle = styled.p`
  margin: 3px 0;
  font-size: 12px;
  color: ${props => props.colors.StreamCard.subtitle};
`;

export default function StreamCard({ stream }) {
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
    <>
      <ImageWrapper>
        <Image
          alt={`${stream.user_name} stream preview`}
          src={`${stream.thumbnail_url.slice(0, -21)}-${
            layout.StreamCard.width
          }x${layout.StreamCard.height}.jpg`}
        />
        <Viewers>{formatViews(stream.viewer_count)} viewers</Viewers>
      </ImageWrapper>
      <TitleWrapper>
        <StreamerImg alt={`${stream.user_name} avatar`} src={stream.img} />
        <div>
          <Title colors={colors}>{stream.title}</Title>
          <Subtitle colors={colors}>{stream.user_name}</Subtitle>
        </div>
      </TitleWrapper>
    </>
  );
}
