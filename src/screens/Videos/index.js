import React from 'react';
import { withRouter } from 'react-router-dom';

import Collection from '../../components/Collection';
import PageWrapper from '../../components/PageWrapper';
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
      <Collection cellCount={videos.length} data={videos} type='StreamCard' />
    </PageWrapper>
  );
}

export default withRouter(Videos);
