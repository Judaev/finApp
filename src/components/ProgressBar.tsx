import React, { FunctionComponent, memo, useMemo } from 'react';
import { ColorValue, StyleSheet, Text, View } from 'react-native';
import { SCREEN_WIDTH } from '../core/constants/constants';
import paddings from '../core/constants/paddings';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';

interface IProgressBar {
  titleProgress?: string;
  totalBudget: number;
  progress: number;
  progressColor?: ColorValue;
  height?: number;
}

const ProgressBar: FunctionComponent<IProgressBar> = memo(function ProgressBar({
  titleProgress,
  totalBudget,
  progress,
  progressColor,
  height = 15,
}) {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();

  const progressCurrent = useMemo(() => {
    return (
      ((SCREEN_WIDTH - paddings.large * 2 - paddings.default * 2) / 100) *
      (progress / (totalBudget / 100))
    );
  }, [progress, totalBudget]);

  const progressColorCurrent = useMemo(() => {
    if (progress > totalBudget) {
      return theme.error;
    }
    return progressColor || theme.primary;
  }, [progress, totalBudget, progressColor, theme]);

  return (
    <View>
      <Text style={appStyles.titleProgress}>{titleProgress}</Text>
      <View style={appStyles.mainFrame}>
        <View
          style={{
            ...appStyles.line,
            width: progressCurrent,
            height,
            backgroundColor: progressColorCurrent,
          }}
        />
      </View>
      <View style={appStyles.textFrame}>
        <Text style={appStyles.amountStart}>{progress}</Text>
        <Text style={appStyles.amountEnd}>{totalBudget}</Text>
      </View>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      backgroundColor: theme.background,
      borderRadius: 15,
      overflow: 'hidden',
    },
    titleProgress: {
      marginBottom: paddings.small,
      fontSize: 16,
      fontWeight: '700',
      color: 'white',
    },
    line: {
      width: 60,
      borderRadius: 15,
    },
    textFrame: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: paddings.small,
    },
    amountStart: {
      color: theme.borderFrame,
    },
    amountEnd: {
      color: theme.error,
    },
  });

export default ProgressBar;
