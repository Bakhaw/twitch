import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { usePalette } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.colors.LiveStream.background};
  box-shadow: ${props => props.colors.LiveStream.boxShadow};
  border-radius: 6px;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
  }
  h5,
  span {
    color: ${props => props.colors.StreamCard.title};
    margin: 0 10px;
  }
  h5 {
    font-size: 18px;
  }
  span {
    font-size: 16px;
  }
`;

const Image = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 5px;
`;

function TopBar({ channel }) {
  const colors = usePalette();
  const { data: followersCount } = useFetch('getUserFollowersCount', [
    channel.id
  ]);

  return (
    <Wrapper colors={colors}>
      <div>
        <Image
          alt={`${channel.display_name} avatar`}
          src={channel.profile_image_url}
        />
        <h5>{channel.display_name}</h5>
      </div>
      <div>
        <Link to={`/videos/${channel.id}`}>
          <span>Videos</span>
        </Link>
        <span>Followers {followersCount.toLocaleString()}</span>
      </div>
    </Wrapper>
  );
}

export default TopBar;
