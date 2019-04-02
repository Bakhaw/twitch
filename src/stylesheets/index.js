import { useContext } from 'react';
import { StateContext } from '../Context';

import layout from './layout';
import palette from './palette';
import theme from './theme';

export function usePalette() {
  const { currentTheme } = useContext(StateContext);
  return theme[currentTheme];
}

export { palette, layout };
