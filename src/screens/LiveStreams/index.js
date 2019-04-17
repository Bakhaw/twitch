import React, { useEffect, useState } from 'react';

import Banner from './Banner';
import ChangeLanguage from './ChangeLanguage';
import Collection from '../../components/Collection';
import PageWrapper from '../../components/PageWrapper';
import API from '../../api';
import { useFetch } from '../../api/hooks';

function LiveStreams({ match }) {
  const [streams, setStreams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { gameId } = match.params;
  const { data: dataStreams } = useFetch('getStreamsByParam', [
    'game_id',
    gameId,
    100
  ]);

  const getData = async data => {
    await setIsLoading(true);
    if (data.length > 0 && !isLoading) {
      let streamersIds = '';
      data.forEach(({ user_id }, index) => {
        streamersIds += index === 0 ? `${user_id}` : `&id=${user_id}`;
      });

      const { data: dataUsers } = await API.getMultipleUsersById(streamersIds);
      const newStreams = [...data];

      dataUsers.forEach(({ profile_image_url }, index) => {
        newStreams[index] = {
          ...newStreams[index],
          img: profile_image_url
        };
      });
      await setStreams(newStreams);
    }
    await setIsLoading(false);
  };

  useEffect(() => {
    getData(dataStreams);
  }, [dataStreams]);

  return (
    <>
      <Banner gameId={gameId} />
      <PageWrapper isLoading={streams.length === 0}>
        <ChangeLanguage gameId={gameId} getData={getData} maxObjects={100} />
        <Collection data={streams} type='StreamCard' />
      </PageWrapper>
    </>
  );
}

export default LiveStreams;
