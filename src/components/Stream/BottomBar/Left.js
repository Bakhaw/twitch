import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { usePalette } from '../../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  h2,
  h3 {
    font-weight: normal;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Image = styled.img`
  height: 85px;
  width: 70px;
  border-radius: 6px;
  margin-right: 10px;
`;

const Title = styled.h2`
  color: ${props => props.colors.StreamCard.title};
  font-size: 18px;
  margin: 0;
`;

const Subtitle = styled.h3`
  color: ${props => props.colors.StreamCard.subtitle};
  font-size: 16px;
  text-decoration: underline;
`;

function Left({ gameDetail, streamDetail }) {
  const colors = usePalette();
  const { title } = streamDetail[0];
  const { box_art_url, id, name } = gameDetail[0];
  const gamePoster = `${box_art_url.slice(0, -21)}-1920x1080.jpg`;

  return (
    <Wrapper>
      <Link to={`/directory/game/${id}`}>
        <Image alt={`${name} poster`} src={gamePoster} />
      </Link>
      <div>
        <Title colors={colors}>{title}</Title>
        <Link to={`/directory/game/${id}`}>
          <Subtitle colors={colors}>{name}</Subtitle>
        </Link>
      </div>
    </Wrapper>
  );
}

Left.propTypes = {
  gameDetail: PropTypes.array,
  streamDetail: PropTypes.array
};

export default Left;
