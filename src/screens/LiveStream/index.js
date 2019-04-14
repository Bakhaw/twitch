import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import PrevButton from '../../components/PrevButton';
import Stream from '../../components/Stream';
import { useFetch } from '../../api/hooks';

function LiveStream({ match }) {
  const { gameId, userId } = match.params;
  const { data: channel } = useFetch('getUserById', [userId]);
  return (
    <PageWrapper isLoading={channel.length === 0}>
      <PrevButton to={`/directory/game/${gameId}`} />
      <Stream channel={channel[0]} />
    </PageWrapper>
  );
}

export default LiveStream;
