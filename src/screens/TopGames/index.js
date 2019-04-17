import React from 'react';

import Collection from '../../components/Collection';
import PageWrapper from '../../components/PageWrapper';
import { useFetch } from '../../api/hooks';

function TopGames() {
  const { data: topGames } = useFetch('getTopGames');

  return (
    <PageWrapper isLoading={topGames.length === 0}>
      <Collection data={topGames} type='GameCard' />
    </PageWrapper>
  );
}

export default TopGames;
