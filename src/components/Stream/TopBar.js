import React from 'react';
import styled from 'styled-components';

import { usePalette } from '../../stylesheets';

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
        <span>Videos</span>
        <span>Followers</span>
      </div>
    </Wrapper>
  );
}

export default TopBar;
