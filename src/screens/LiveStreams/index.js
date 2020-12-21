import React, { useEffect, useState } from 'react';

import Banner from './Banner';
import ChangeLanguage from './ChangeLanguage';
import Collection from '../../components/Collection';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import API from '../../api';
import { useFetch } from '../../api/hooks';

function LiveStreams({ match }) {
  const { gameId } = match.params;
  const [currentLanguage, setCurrentLanguage] = useState(''); // '' means no language specified
  const [isLoading, setIsLoading] = useState(false);
  const [streams, setStreams] = useState([]);

  const { data: dataStreams } = useFetch('getStreamsByParam', [
    'game_id',
    gameId,
    100,
    `&language=${currentLanguage}`,
  ]);

  const getData = async () => {
    if (dataStreams.length > 0) {
      await setIsLoading(true);
      let streamersIds = '';
      dataStreams.forEach(({ user_id }, index) => {
        streamersIds += index === 0 ? `${user_id}` : `&id=${user_id}`;
      });

      // TODO try to get dataUsers using useFetch();
      const { data: dataUsers } = await API.getMultipleUsersById(streamersIds);
      const newStreams = [...dataStreams];

      dataUsers.forEach(({ profile_image_url }, index) => {
        newStreams[index] = {
          ...newStreams[index],
          img: profile_image_url,
        };
      });
      await setStreams(newStreams);
      await setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [dataStreams]);

  return (
    <>
      <Banner gameId={gameId} />
      <ChangeLanguage
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <PageWrapper isLoading={isLoading}>
        <Collection data={streams} type='StreamCard'>
          {(data) => (
            <StreamCard
              linkTo={`/directory/game/${data.game_id}/channel/${data.user_id}`}
              stream={data}
            />
          )}
        </Collection>
      </PageWrapper>
    </>
  );
}

export default LiveStreams;
