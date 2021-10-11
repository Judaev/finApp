import { Appearance } from 'react-native';
import { atom } from 'recoil';
import darkTheme from '../../../core/types/darkTheme';
import { Theme } from '../../../core/types/theme';
import mainTheme from '../../../core/types/mainTheme';

const themeAtom = atom<Theme>({
  key: 'theme',
  default: Appearance.getColorScheme() === 'dark' ? darkTheme : mainTheme,
});

export default themeAtom;
