import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressBar from '../../../components/ProgressBar';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';
import HistoryOperations from './HistoryOperations';

const InfoSection: FunctionComponent = memo(function InfoSection() {
  const appStyles = useStyles(styleSheet);

  return (
    <View style={appStyles.container}>
      <ProgressBar totalBudget={1000} progress={300} titleProgress='Бюджет на месяц' />
      <HistoryOperations styles={{ marginTop: paddings.large }} />
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: paddings.large * 2,
      paddingVertical: paddings.default,
      paddingHorizontal: paddings.default,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%',

      backgroundColor: theme.backgroundSecondary,
    },
    text: {
      color: theme.textPrimary,
      height: 50,
    },
  });

export default InfoSection;
