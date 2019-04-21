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
  width: 120px;
  span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 0;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    width: 100%;
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

// TODO refactor using functional component and make it work with React.memo();
class Right extends React.Component {
  // if viewer_count is the same, don't re-render()
  shouldComponentUpdate = nextProps =>
    this.props.streamDetail[0].viewer_count !==
    nextProps.streamDetail[0].viewer_count;

  render() {
    const { channel, streamDetail } = this.props;
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
}

Right.propTypes = {
  channel: PropTypes.object,
  streamDetail: PropTypes.array
};

export default Right;
