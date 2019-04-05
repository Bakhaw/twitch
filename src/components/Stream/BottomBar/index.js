import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Left from './Left';
import Right from './Right';
import { useFetch } from '../../../api/hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 20px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26), 0 5px 5px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
`;

function BottomBar({ channel, match }) {
  const { data: streamDetail } = useFetch('getStreamsByParam', [
    'user_id',
    channel.id,
    1
  ]);
  const { data: gameDetail } = useFetch('getGameById', [match.params.gameId]);

  if (streamDetail.length === 0 || gameDetail.length === 0) return null;

  return (
    <Wrapper>
      <Left gameDetail={gameDetail} streamDetail={streamDetail} />
      <Right channel={channel} streamDetail={streamDetail} />
    </Wrapper>
  );
}

BottomBar.propTypes = {
  channel: PropTypes.object
};

export default withRouter(BottomBar);
