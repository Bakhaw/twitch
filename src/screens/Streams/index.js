import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../../api';
import PageWrapper from '../../components/PageWrapper';
import StreamCard from '../../components/StreamCard';
import { layout } from '../../stylesheets';

const StreamsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${layout.StreamCard.width}px);
  justify-content: center;
  gap: 40px;
`;

export default function Streams({ match }) {
  const { gameId } = match.params;
  const [streams, setStreams] = useState([]);

  const getData = async () => {
    const { data } = await API.getStreamsByGameId(gameId);
    await getStreamerImages(data);
  };

  const getStreamerImages = async data => {
    let streamersIds = '';
    data.forEach(({ user_id }, index) => {
      streamersIds += index === 0 ? `${user_id}` : `&id=${user_id}`;
    });

    const request = await API.getMultipleUsersById(streamersIds);
    const newStreams = [...data];
    request.data.forEach(({ profile_image_url }, index) => {
      newStreams[index] = {
        ...newStreams[index],
        img: profile_image_url
      };
    });

    await setStreams(newStreams);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageWrapper isLoading={streams.length === 0}>
      <StreamsList>
        {streams.map(stream => (
          <li key={stream.id}>
            <StreamCard stream={stream} />
          </li>
        ))}
      </StreamsList>
    </PageWrapper>
  );
}
