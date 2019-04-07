import React from 'react';

import Content from './Content';
import PageWrapper from '../../components/PageWrapper';
import { useFetch } from '../../api/hooks';

function TopGames() {
  const { data: topGames } = useFetch('getTopGames');

  return (
    <PageWrapper isLoading={topGames.length === 0}>
      <Content games={topGames} />
    </PageWrapper>
  );
}

export default TopGames;
