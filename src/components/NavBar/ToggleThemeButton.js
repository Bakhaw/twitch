import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

import MoonIcon from '../../assets/moon.svg';
import SunIcon from '../../assets/sun.svg';
import { StateContext } from '../../Context';

const Icon = styled.img`
  width: 18px;
`;

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(StateContext);
  return (
    <>
      <Icon src={theme === 'Dark' ? MoonIcon : SunIcon} />
      <Switch
        checked={theme === 'Dark'}
        color='default'
        onChange={toggleTheme}
      />
    </>
  );
}

export default ToggleThemeButton;
