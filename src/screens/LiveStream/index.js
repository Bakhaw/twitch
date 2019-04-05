import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import Stream from '../../components/Stream';
import { useFetch } from '../../api/hooks';

function LiveStream({ match }) {
  const { userId } = match.params;
  const { data: channel } = useFetch('getUserById', [userId]);

  return (
    <PageWrapper isLoading={channel.length === 0}>
      <Stream channel={channel[0]} />
    </PageWrapper>
  );
}

export default LiveStream;
