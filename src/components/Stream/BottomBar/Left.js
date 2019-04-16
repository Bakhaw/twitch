import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { layout, usePalette } from '../../../stylesheets';

const Wrapper = styled.div`
  display: flex;
  h2,
  h3 {
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(
      100vw - (290px + ${layout.Chat.width}px)
    ); /* 290px is an addition of all widths/paddings/margins related to BottomBar */
    @media (max-width: 1000px) {
      width: calc(100vw - 60px); /* 60px is left and right total padding */
    }
  }
`;

const Image = styled.img`
  height: 80px;
  width: 60px;
  margin-right: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.h2`
  color: ${props => props.colors.StreamCard.title};
  font-size: 18px;
  margin: 0;
`;

const Subtitle = styled.h3`
  color: ${props => props.colors.StreamCard.subtitle};
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
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
