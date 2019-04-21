import React from 'react';

import PageWrapper from '../../components/PageWrapper';
import Stream from '../../components/Stream';
import { useFetch } from '../../api/hooks';

function Video({ match }) {
  const { userId, videoId } = match.params;
  const { data: videoData } = useFetch('getVideosByParam', ['id', videoId, 1]);
  const { data: userData } = useFetch('getUserById', [userId]);

  if (!videoData[0] || !userData[0]) return null;

  let channel = {};
  Object.assign(channel, videoData[0]);
  Object.assign(channel, userData[0]);

  return (
    <PageWrapper isLoading={videoData.length === 0 || userData.length === 0}>
      <Stream
        channel={channel}
        query={videoData[0] && `video=v${videoData[0].id}`}
      />
    </PageWrapper>
  );
}

export default Video;
