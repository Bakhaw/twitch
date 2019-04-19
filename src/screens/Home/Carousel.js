import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';

import CarouselCard from './CarouselCard';
import { layout } from '../../stylesheets';

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
    cursor: pointer;
    outline: none;
    position: absolute;
    height: 55vh;
    width: 71vw;
    transition: all 450ms ease 0s;
    @media (max-width: 1000px) {
      height: 50vh;
      width: 70vw;
    }
  }
  #CarouselCard-${props => props.currentSlideIndex - 4} {
    right: 11.2vw;
    transform: translateX(27.5vw) translateX(-25%) scale(0.85);
    z-index: 2;
    &:hover {
      transform: translateX(29vw) translateX(-25%) scale(0.85);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex - 3} {
    right: 5.6vw;
    transform: translateX(48vw) translateX(-50%) scale(0.7);
    z-index: 1;
    &:hover {
      transform: translateX(49.5vw) translateX(-50%) scale(0.7);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex - 2} {
    left: 5.6vw;
    transform: translateX(-48vw) translateX(50%) scale(0.7);
    z-index: 1;
    &:hover {
      transform: translateX(-49.5vw) translateX(50%) scale(0.7);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex - 1} {
    left: 11.2vw;
    transform: translateX(-27.5vw) translateX(25%) scale(0.85);
    z-index: 2;
    &:hover {
      transform: translateX(-29vw) translateX(25%) scale(0.85);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex} {
    z-index: 3;
  }
  #CarouselCard-${props => props.currentSlideIndex + 1} {
    right: 11.2vw;
    transform: translateX(27.5vw) translateX(-25%) scale(0.85);
    z-index: 2;
    &:hover {
      transform: translateX(29vw) translateX(-25%) scale(0.85);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex + 2} {
    right: 5.6vw;
    transform: translateX(48vw) translateX(-50%) scale(0.7);
    z-index: 1;
    &:hover {
      transform: translateX(49.5vw) translateX(-50%) scale(0.7);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex + 3} {
    left: 5.6vw;
    transform: translateX(-48vw) translateX(50%) scale(0.7);
    z-index: 1;
    &:hover {
      transform: translateX(-49.5vw) translateX(50%) scale(0.7);
    }
  }
  #CarouselCard-${props => props.currentSlideIndex + 4} {
    left: 11.2vw;
    transform: translateX(-27.5vw) translateX(25%) scale(0.85);
    z-index: 2;
    &:hover {
      transform: translateX(-29vw) translateX(25%) scale(0.85);
    }
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case 'PREV_SLIDE':
      // does nothing if we are at the first slide and we click prev button
      return state === 0 ? 4 : state - 1;
    case 'NEXT_SLIDE':
      // does nothing if we are at the last slide and we click next button
      return state === 4 ? 0 : state + 1;
    case 'GOTO':
      return action.payload;
    default:
      return state;
  }
}

function Carousel({ channels, streams }) {
  const [currentSlideIndex, dispatch] = useReducer(reducer, 2);
  const carouselRef = useRef(null);

  const focusHandler = {
    init: function() {
      const firstSlide = document.getElementById(
        `CarouselCard-${currentSlideIndex}`
      );
      firstSlide.focus();
      carouselRef.current.addEventListener('keydown', this.subscribe);
    },
    subscribe: function({ keyCode }) {
      const { nextSibling, previousSibling } = document.activeElement;
      if (keyCode === 37 && previousSibling) {
        dispatch({ type: 'PREV_SLIDE' });
      }
      if (keyCode === 39 && nextSibling) {
        dispatch({ type: 'NEXT_SLIDE' });
      }
    },
    unsubscribe: function() {
      carouselRef.current.removeEventListener('keydown', this.subscribe);
    }
  };

  const desktop = window.screen.width >= 800;

  useEffect(() => {
    if (desktop) {
      focusHandler.init();
      return () => focusHandler.unsubscribe();
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Fab onClick={() => dispatch({ type: 'PREV_SLIDE' })} size='small'>
          <ChevronLeftIcon />
        </Fab>
        <StreamsWrapper currentSlideIndex={currentSlideIndex} ref={carouselRef}>
          {streams.map((stream, index) => (
            <CarouselCard
              key={index}
              channel={channels[index]}
              handleCardClick={() => dispatch({ type: 'GOTO', payload: index })}
              isCardActive={index === currentSlideIndex}
              index={index}
              stream={stream}
            />
          ))}
        </StreamsWrapper>
        <Fab onClick={() => dispatch({ type: 'NEXT_SLIDE' })} size='small'>
          <ChevronRightIcon />
        </Fab>
      </Wrapper>
    </>
  );
}

export default Carousel;
