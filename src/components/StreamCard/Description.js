import React from 'react';
import styled from 'styled-components';

import { layout, usePalette } from '../../stylesheets';

const Avatar = styled.img`
  height: 38px;
  width: 38px;
  margin: 10px 10px 0 0;
  border-radius: 50%;
  border: 4px solid transparent;
`;

const Title = styled.h3`
  width: calc(
    ${layout.StreamCard.width}px - 50px
  ); /* 53px is Avatar almost total width */
  color: ${props => props.colors.StreamCard.title};
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Subtitle = styled.p`
  margin: 3px 0;
  font-size: 12px;
  color: ${props => props.colors.StreamCard.subtitle};
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  &:hover {
    ${Title} {
      text-decoration: underline;
    }
    ${Avatar} {
      border: 4px solid ${props => props.colors.StreamCard.subtitle};
    }
  }
`;

function Description({ stream: { img, user_name, title } }) {
  const colors = usePalette();
  return (
    <Wrapper colors={colors}>
      <Avatar alt={`${user_name} avatar`} src={img} />
      <div>
        <Title colors={colors}>{title}</Title>
        <Subtitle colors={colors}>{user_name}</Subtitle>
      </div>
    </Wrapper>
  );
}

export default Description;
