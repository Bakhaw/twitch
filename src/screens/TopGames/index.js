import React from 'react';

import Content from './Content';
import PageWrapper from '../../components/PageWrapper';
import { useFetch } from '../../api/hooks';

function TopGames() {
  const { data: topGames, isLoading } = useFetch('getTopGames');

  return (
    <PageWrapper isLoading={isLoading}>
      <Content games={topGames} />
    </PageWrapper>
  );
}

export default TopGames;
