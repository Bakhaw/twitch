import React from 'react';
import { withRouter } from 'react-router-dom';

import Collection from '../../components/Collection';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import { useFetch } from '../../api/hooks';

function Videos({ match }) {
  const { userId } = match.params;
  const { data: videos } = useFetch('getVideosByParam', [
    'user_id',
    userId,
    100
  ]);

  return (
    <PageWrapper isLoading={videos.length === 0}>
      <Collection data={videos} type='StreamCard'>
        {data => (
          <StreamCard
            linkTo={`/videos/${data.user_id}/${data.id}`}
            stream={data}
          />
        )}
      </Collection>
    </PageWrapper>
  );
}

export default withRouter(Videos);
