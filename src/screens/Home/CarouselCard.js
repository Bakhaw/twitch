import React from 'react';
import styled from 'styled-components';

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
    overflow: hidden;
    /* border: 3px solid #000; */
    -webkit-border-radius: 6px 0 0 6px !important;
    -ms-border-radius: 6px 0 0 6px !important;
    -o-border-radius: 6px 0 0 6px !important;
    border-radius: 6px 0 0 6px !important;
    width: 100%;
  }
`;

const LiveDescription = styled.div`
  background: #fff;
  border-radius: 0 6px 6px 0;
  padding: 10px 20px;
  height: calc(100% - 20px);
  width: 210px;
  img {
    border-radius: 6px;
    margin-right: 5px;
    width: 50px;
  }
  p {
    font-size: 14px;
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
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
        <LiveDescription>
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
          <p>{channel.description}</p>
        </LiveDescription>
      )}
    </Wrapper>
  );
}

export default CarouselCard;
