import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EyeIcon from '../../../assets/eye.svg';
import PersonIcon from '../../../assets/person.svg';
import { palette } from '../../../stylesheets';

const ViewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: flex-end;
    span:last-child {
      display: none;
    }
  }
`;

const LiveViewers = styled.span`
  color: ${palette.red.default};
`;

const ChannelViews = styled.span`
  color: ${palette.grey.dark};
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 18px;
`;

function Right({ channel, streamDetail }) {
  const { viewer_count } = streamDetail[0];
  return (
    <ViewsWrapper>
      <LiveViewers>
        <Icon src={PersonIcon} />
        <p>{viewer_count.toLocaleString()}</p>
      </LiveViewers>
      <ChannelViews>
        <Icon src={EyeIcon} />
        <p>{channel.view_count.toLocaleString()}</p>
      </ChannelViews>
    </ViewsWrapper>
  );
}

Right.propTypes = {
  channel: PropTypes.object,
  streamDetail: PropTypes.array
};

export default Right;
