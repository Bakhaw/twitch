import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import List from '../../components/List';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import { layout } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

function Videos({ match }) {
  const [maxObjects, setMaxObjects] = useState(20);

  const { userId } = match.params;
  const { data: videos } = useFetch('getVideosByParam', [
    'user_id',
    userId,
    maxObjects
  ]);

  const onBottomReached = () => {
    // ? this ternary is checking if we already got 100 objects, which is the max
    // ? we can fetch using Twitch API
    setMaxObjects(prev => (prev < 100 ? prev + 20 : prev));
  };

  return (
    <PageWrapper isLoading={videos.length === 0}>
      <List
        columnWidth={layout.StreamCard.width}
        onBottomReached={onBottomReached}
      >
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
