import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LeftArrowIcon from '../../assets/left-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
`;

const Icon = styled.img`
  height: 18px;
`;

function PrevButton({ to }) {
  return (
    <Wrapper className='PrevButton'>
      <Link to={to}>
        <Icon alt='Go back button' src={LeftArrowIcon} />
      </Link>
    </Wrapper>
  );
}

export default PrevButton;
