import { useContext } from 'react';
import { StateContext } from '../Context';

import colors from './colors';
import layout from './layout';

export function usePalette() {
  const context = useContext(StateContext);
  return colors[context.theme];
}

export { colors, layout };
