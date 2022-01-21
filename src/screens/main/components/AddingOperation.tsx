import React, { FunctionComponent, memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ViewStyle } from 'react-native';
import Icon from '../../../components/icon/Icon';
import IconNames from '../../../components/icon/iconNames';
import OperationButton from '../../../components/OperationButton';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';
import useTheme from '../../../hooks/useTheme';

interface IAddingOperation {
  styles?: ViewStyle;
}

const AddingOperation: FunctionComponent<IAddingOperation> = memo(function AddingOperation({
  styles,
}) {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();

  const onHandler = useCallback(() => {
    return;
  }, []);

  return (
    <View style={{ ...appStyles.container, ...styles }}>
      <OperationButton
        onPress={onHandler}
        iconName={IconNames.accountCard}
        iconColor={theme.success}
        text='income'
      />
      <OperationButton
        onPress={onHandler}
        iconName={IconNames.analytics}
        iconColor={theme.error}
        text='consumption'
      />
      <OperationButton onPress={onHandler} iconName={IconNames.plus} text='new card' />
      <OperationButton onPress={onHandler} iconName={IconNames.plus} text='new goal' />
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.backgroundSecondary,
    },
    text: {
      color: theme.textPrimary,
    },
  });

export default AddingOperation;
