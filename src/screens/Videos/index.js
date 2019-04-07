import React from 'react';
import { withRouter } from 'react-router-dom';

import List from '../../components/List';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import { layout } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

function Videos({ match }) {
  const { userId } = match.params;
  const { data: videos } = useFetch('getVideosByParam', ['user_id', userId]);

  return (
    <PageWrapper isLoading={videos.length === 0}>
      <List columnWidth={layout.StreamCard.width}>
        {videos.map(video => (
          <li key={video.id}>
            <StreamCard stream={video} />
          </li>
        ))}
      </List>
    </PageWrapper>
  );
}

export default withRouter(Videos);
