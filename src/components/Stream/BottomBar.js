import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../components/Loader';
import EyeIcon from '../../assets/eye.svg';
import PersonIcon from '../../assets/person.svg';
import { useFetch } from '../../api/hooks';
import { palette, usePalette } from '../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 20px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26), 0 5px 5px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
`;

const Title = styled.h2`
  color: ${props => props.colors.StreamCard.title};
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

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

function BottomBar({ channel }) {
  const colors = usePalette();
  const { data: streamDetail } = useFetch('getStreamsByParam', [
    'user_id',
    channel.id,
    1
  ]);

  // if (streamDetail.length === 0) return <Loader />;
  if (streamDetail.length > 0) {
    const { title, viewer_count } = streamDetail[0];

    return (
      <Wrapper>
        <Title colors={colors}>{title}</Title>
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
      </Wrapper>
    );
  } else return null;
}

BottomBar.propTypes = {
  channel: PropTypes.object
};

export default BottomBar;
