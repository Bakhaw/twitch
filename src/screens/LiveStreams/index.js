import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Banner from './Banner';
import ChangeLanguage from './ChangeLanguage';
import List from '../../components/List';
import Loader from '../../components/Loader';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import API from '../../api';
import { useFetch } from '../../api/hooks';
import { layout } from '../../stylesheets';

function LiveStreams({ match }) {
  const [streams, setStreams] = useState([]);
  const [maxObjects, setMaxObjects] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const { gameId } = match.params;
  const { data: dataStreams } = useFetch('getStreamsByParam', [
    'game_id',
    gameId,
    maxObjects
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

  const onBottomReached = () => {
    // ? this ternary is checking if we already got 100 objects, which is the max
    // ? we can fetch using Twitch API
    setMaxObjects(prevState => (prevState < 100 ? prevState + 20 : prevState));
  };

  return (
    <>
      <Banner gameId={gameId} />
      <PageWrapper isLoading={streams.length === 0}>
        <ChangeLanguage
          gameId={gameId}
          getData={getData}
          maxObjects={maxObjects}
        />
        <List
          columnWidth={layout.StreamCard.width}
          onBottomReached={onBottomReached}
        >
          {streams.map(stream => (
            <li key={stream.id}>
              <Link
                to={`/directory/game/${stream.game_id}/channel/${
                  stream.user_id
                }`}
              >
                <StreamCard stream={stream} />
              </Link>
            </li>
          ))}
        </List>
        {isLoading && <Loader />}
      </PageWrapper>
    </>
  );
}

export default LiveStreams;
