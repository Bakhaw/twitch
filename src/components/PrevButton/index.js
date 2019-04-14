import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LeftArrowIcon from '../../assets/left-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

function PrevButton({ to }) {
  return (
    <Wrapper>
      <Link to={to}>
        <Icon alt='Go back button' src={LeftArrowIcon} />
      </Link>
    </Wrapper>
  );
}

export default PrevButton;
