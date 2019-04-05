import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EyeIcon from '../../../assets/eye.svg';
import PersonIcon from '../../../assets/person.svg';
import { palette } from '../../../stylesheets';

const ViewsWrapper = styled.div`
  display: flex;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
`;

const LiveViewers = styled.span`
  color: ${palette.red.default};
  font-size: 16px;
`;

const ChannelViews = styled.span`
  color: ${palette.grey.dark};
  font-size: 16px;
`;

const Icon = styled.img`
  margin-right: 5px;
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
