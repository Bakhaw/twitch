import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Left from './Left';
import Right from './Right';
import { usePalette } from '../../../stylesheets';
import { useFetch } from '../../../api/hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${props => props.colors.LiveStream.background};
  box-shadow: ${props => props.colors.LiveStream.boxShadow};
  border-radius: 6px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

function BottomBar({ channel, match }) {
  const colors = usePalette();
  const { data: streamDetail } = useFetch('getStreamsByParam', [
    'user_id',
    channel.id,
    1
  ]);
  const { data: gameDetail } = useFetch('getGameById', [match.params.gameId]);

  // TODO try to find how to get gameDetail on <Video /> screen/
  if (streamDetail.length === 0 || gameDetail.length === 0) return null;

  return (
    <Wrapper colors={colors}>
      <Left gameDetail={gameDetail} streamDetail={streamDetail} />
      <Right channel={channel} streamDetail={streamDetail} />
    </Wrapper>
  );
}

BottomBar.propTypes = {
  channel: PropTypes.object
};

export default withRouter(BottomBar);
