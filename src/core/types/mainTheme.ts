import { ThemesEnum } from '../enum/themeEnum';
import { Theme } from './theme';

const mainTheme: Theme = {
  name: ThemesEnum.main,
  isDark: false,
  primary: '#3959D9',
  secondary: '#FC4665',
  primaryLight: '#C4CDF4',
  secondaryLight: '#f4bDe4',
  error: '#F31B1F',
  secondaryOpacity50: '#FC466550',
  secondaryOpacity10: '#FC466510',
  warn: '#FDB43C',
  warnOpacity50: '#FDB43C50',
  warnOpacity10: '#FDB43C10',
  success: '#2EBA4D',
  successOpacity50: '#2EBA4D50',
  successOpacity10: '#2EBA4D10',
  background: '#F3F3F6',
  backgroundSecondary: '#FFFFFF',
  textPrimary: '#3F4250',
  textPrimaryOpacity30: '#3F425030',
  textPrimaryContrast: '#FFFFFF',
  textSecondary: '#9FA0A8',
  textSecondaryOpacity50: '#9FA0A850',
  borderFrame: '#ECEDEF',
  gradientPrimary: ['#FC4665', '#3959D9'],
  gradientSecondary: ['#F4BDE4', '#C4CDF4'],
  imagedCard: '#FFFFFF',
};

export default mainTheme;
