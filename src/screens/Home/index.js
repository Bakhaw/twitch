import React from 'react';

import Carousel from './Carousel';
import PageWrapper from '../../components/PageWrapper';
import { useFetch } from '../../api/hooks';

function Home() {
  const { data: streams } = useFetch('getStreamsByParam', ['', '', 5]);
  let streamersIds = '';
  streams.forEach(({ user_id }, index) => {
    streamersIds += index === 0 ? `${user_id}` : `&id=${user_id}`;
  });

  const { data: channels } = useFetch('getUserById', [streamersIds]);

  return (
    <PageWrapper isLoading={streams.length === 0 || channels.length === 0}>
      <Carousel channels={channels} streams={streams} />
    </PageWrapper>
  );
}

export default Home;
