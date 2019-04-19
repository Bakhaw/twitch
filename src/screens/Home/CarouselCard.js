import React from 'react';
import styled from 'styled-components';

import { usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  img {
    border-radius: 6px;
    height: 100%;
    width: 100%;
  }
  iframe,
  object,
  embed {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const LiveDescription = styled.div`
  color: ${props => props.colors.StreamCard.title};
  background: ${props => props.colors.LiveStream.background};
  border-radius: 0 6px 6px 0;
  box-shadow: ${props => props.colors.LiveStream.boxShadow};
  padding: 10px 20px;
  height: calc(100% - 20px);
  width: 210px;
  overflow: hidden;
  img {
    border-radius: 50%;
    margin-right: 5px;
    height: 50px;
    width: 50px;
  }
  p {
    font-size: 14px;
    word-break: break-word;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    border-radius: 6px 6px 0 0;
    height: auto;
    width: auto;
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px;
    width: 100px;
  }
`;

const DescriptionDetail = styled.p`
  margin-top: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;

function CarouselCard({ channel, isCardActive = false, index, stream }) {
  const formatImgUrl = imgUrl => {
    const formattedUrl = imgUrl
      .replace('%{width}', 500)
      .replace('%{height}', 500)
      .replace('{width}', 500)
      .replace('{height}', 500);

    return formattedUrl;
  };

  const colors = usePalette();
  return (
    <Wrapper className={`CarouselCard CarouselCard-${index}`}>
      {isCardActive ? (
        <iframe
          allowFullScreen
          frameBorder={0}
          scrolling='no'
          src={`https://player.twitch.tv/?channel=${
            channel.login
          }&autoplay=${isCardActive}`}
          title={`${channel.login} live stream video`}
        />
      ) : (
        <img
          alt={`${stream.user_name} stream preview`}
          src={formatImgUrl(stream.thumbnail_url)}
        />
      )}
      {isCardActive && (
        <LiveDescription colors={colors}>
          <Row>
            <img
              alt={`${channel.login} avatar`}
              src={channel.profile_image_url}
            />
            <div>
              <p>{channel.display_name}</p>
              <p>{stream.viewer_count.toLocaleString()} viewers</p>
            </div>
          </Row>
          <DescriptionDetail>{channel.description}</DescriptionDetail>
        </LiveDescription>
      )}
    </Wrapper>
  );
}

export default CarouselCard;
