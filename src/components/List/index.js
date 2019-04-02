import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, ${props.columnWidth}px)`};
  justify-content: center;
  gap: 40px;
`;

function List({ children, columnWidth, onBottomReached }) {
  if (onBottomReached) {
    const handleScroll = async () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        await onBottomReached();
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  }

  return <Wrapper columnWidth={columnWidth}>{children}</Wrapper>;
}

export default List;
