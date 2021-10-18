import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import paddings from '../core/constants/paddings';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';
import Icon from './icon/Icon';
import IconNames from './icon/iconNames';

interface IItemOperation {
  iconName: IconNames;
  title: string;
  amount: number;
  tagName?: string;
  tagNameColor?: string;
  styles?: ViewStyle;
}

const ItemOperation: FunctionComponent<IItemOperation> = memo(function ItemOperation({
  iconName,
  title,
  amount,
  tagName,
  styles,
}) {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();

  return (
    <View style={{ ...appStyles.mainFrame, ...styles }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={IconNames[iconName]} color={theme.textPrimary} />
        <Text style={appStyles.title}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {tagName && <Text style={appStyles.tagName}>{tagName}</Text>}
        <Text style={appStyles.amount}>{amount}</Text>
      </View>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 2,
    },
    title: {
      marginLeft: paddings.default,
      color: theme.textPrimary,
    },
    tagName: {
      color: theme.warn,
      marginRight: paddings.default,
    },
    amount: {
      color: theme.textPrimary,
    },
  });

export default ItemOperation;
