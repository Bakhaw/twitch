import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../Context';
import MoonIcon from '../../assets/moon.svg';

const ChangeThemeButton = styled.button`
  cursor: pointer;
  height: 30px;
  border: none;
  background: none;
  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  width: 22px;
`;

export default function ToggleThemeButton() {
  const { toggleTheme } = useContext(StateContext);

  return (
    <ChangeThemeButton onClick={toggleTheme}>
      <Icon src={MoonIcon} />
    </ChangeThemeButton>
  );
}
