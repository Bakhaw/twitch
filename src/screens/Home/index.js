import React, { useReducer } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';

import CarouselCard from './CarouselCard';
import PageWrapper from '../../components/PageWrapper';
import { layout } from '../../stylesheets';
import { useFetch } from '../../api/hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StreamsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${layout.NavBar.height});
  width: 100vw;
  position: relative;
  .CarouselCard {
    position: absolute;
    height: 450px;
    width: 950px;
    transition: all 0.4s ease-out;
  }
  .CarouselCard-${props => props.currentSlideIndex - 2} {
    left: 75px;
    transform: translateX(-48vw) translateX(50%) scale(0.7);
    z-index: 1;
  }
  .CarouselCard-${props => props.currentSlideIndex - 1} {
    left: 150px;
    transform: translateX(-26vw) translateX(25%) scale(0.85);
    z-index: 2;
  }
  .CarouselCard-${props => props.currentSlideIndex} {
    z-index: 3;
  }
  .CarouselCard-${props => props.currentSlideIndex + 1} {
    right: 150px;
    transform: translateX(26vw) translateX(-25%) scale(0.85);
    z-index: 2;
  }
  .CarouselCard-${props => props.currentSlideIndex + 2} {
    right: 75px;
    transform: translateX(48vw) translateX(-50%) scale(0.7);
    z-index: 1;
  }
`;

function reducer(state, action) {
  switch (action) {
    case 'PREV_SLIDE':
      // does nothing if we are at the first slide and we click prev button
      return state === 0 ? state : state - 1;
    case 'NEXT_SLIDE':
      // does nothing if we are at the last slide and we click next button
      return state === 4 ? state : state + 1;
    default:
      return state;
  }
}

function Home() {
  const [currentSlideIndex, dispatch] = useReducer(reducer, 2);

  const { data: streams } = useFetch('getStreamsByParam', ['', '', 5]);
  let streamersIds = '';
  streams.forEach(({ user_id }, index) => {
    streamersIds += index === 0 ? `${user_id}` : `&id=${user_id}`;
  });

  const { data: channels } = useFetch('getUserById', [streamersIds]);

  return (
    <PageWrapper isLoading={streams.length === 0 || channels.length === 0}>
      <Wrapper>
        <Fab onClick={() => dispatch('PREV_SLIDE')} size='small'>
          <ChevronLeftIcon />
        </Fab>
        <StreamsWrapper currentSlideIndex={currentSlideIndex}>
          {streams.map((stream, index) => (
            <CarouselCard
              key={index}
              index={index}
              channel={channels[index]}
              isCardActive={index === currentSlideIndex}
              stream={stream}
            />
          ))}
        </StreamsWrapper>
        <Fab onClick={() => dispatch('NEXT_SLIDE')} size='small'>
          <ChevronRightIcon />
        </Fab>
      </Wrapper>
    </PageWrapper>
  );
}

export default Home;
