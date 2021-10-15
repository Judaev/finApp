import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { ThemesEnum } from '../../core/enum/themeEnum';
import useTheme from '../../hooks/useTheme';

const StatusBarWrapper = memo(() => {
  const theme = useTheme();

  return <StatusBar barStyle={theme.name === ThemesEnum.dark ? 'light-content' : 'dark-content'} />;
});

export default StatusBarWrapper;
