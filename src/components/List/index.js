import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fill, ${props.columnWidth}px)`};
  justify-content: center;
  gap: 40px;
  padding: 50px 20px;
  @media (max-width: 1000px) {
    gap: 40px 15px;
    padding: 20px 0;
  }
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

List.defaultProps = {
  onBottomReached: null
};

List.propTypes = {
  columnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBottomReached: PropTypes.func
};

export default List;
