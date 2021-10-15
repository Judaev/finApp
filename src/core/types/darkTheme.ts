import { ThemesEnum } from '../enum/themeEnum';
import { Theme } from './theme';

const darkTheme: Theme = {
  name: ThemesEnum.dark,
  isDark: true,
  primary: '#7269FF',
  secondary: '#EDBF63',
  primaryLight: '#D9BA3A',
  secondaryLight: '#ECDD9D',
  error: '#F22217',
  secondaryOpacity50: '#EDBF6350',
  secondaryOpacity10: '#EDBF6310',
  warn: '#FDB43C',
  warnOpacity50: '#FDB43C50',
  warnOpacity10: '#FDB43C10',
  success: '#2EBA4D',
  successOpacity50: '#2EBA4D50',
  successOpacity10: '#2EBA4D10',
  background: '#0F0B21',
  backgroundSecondary: '#221C44',
  textPrimary: '#F3F3F6',
  textPrimaryOpacity30: '#F3F3F630',
  textPrimaryContrast: '#3F4250',
  textSecondary: '#C1C1C1',
  textSecondaryOpacity50: '#C1C1C150',
  borderFrame: '#6C706E',
  gradientPrimary: ['#EDBF63', '#E5A930'],
  gradientSecondary: ['#ECDD9D', '#D9BA3A'],
  imagedCard: '#E5A930',
};
export default darkTheme;
