import React, { FunctionComponent, memo, useCallback } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import IconNames from '../../../components/icon/iconNames';
import ItemOperation from '../../../components/ItemOperation';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';

interface IHistoryOperations {
  styles?: ViewStyle;
}

const data = [
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30 },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30 },
  {
    icon: IconNames.accountCard,
    title: 'Buy milk',
    amount: 30,
    tagName: 'home',
  },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
  { icon: IconNames.accountCard, title: 'Buy milk', amount: 30, tagName: 'home' },
];

const HistoryOperations: FunctionComponent<IHistoryOperations> = memo(function HistoryOperations({
  styles,
}) {
  const appStyles = useStyles(styleSheet);

  const renderItemOperation = useCallback(
    (item, index) => {
      return (
        <ItemOperation
          key={index}
          iconName={item.icon}
          title={item.title}
          amount={item.amount}
          tagName={item.tagName}
        />
      );
    },
    [data]
  );

  return (
    <View style={{ ...appStyles.mainFrame, ...styles }}>
      <Text style={appStyles.title}>History</Text>
      {data.map(renderItemOperation)}
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      paddingBottom: paddings.large * 4,
    },
    title: {
      marginBottom: paddings.small,
      fontSize: 18,
      fontWeight: '700',
      color: theme.textPrimary,
    },
  });

export default HistoryOperations;
