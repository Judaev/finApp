import React, { FunctionComponent, memo, useMemo } from 'react';
import { ColorValue, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import paddings from '../core/constants/paddings';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';
import Icon from './icon/Icon';
import IconNames from './icon/iconNames';

interface IOperationButton {
  onPress: () => void;
  iconName: IconNames;
  iconColor?: ColorValue;
  text: string;
  textStyles?: TextStyle;
}

const OperationButton: FunctionComponent<IOperationButton> = memo(function OperationButton({
  onPress,
  iconName,
  iconColor,
  text,
  textStyles,
}) {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();

  const iconColorCurrent = useMemo(() => {
    return iconColor || theme.primary;
  }, [iconColor, theme]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={appStyles.container}>
        <View style={appStyles.iconFrame}>
          <Icon name={IconNames[iconName]} color={iconColorCurrent} />
        </View>
        <Text style={{ ...appStyles.text, ...textStyles }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      alignItems: 'center',
    },
    text: {
      fontWeight: '600',
      color: theme.textPrimary,
    },
    iconFrame: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: paddings.small,
      height: 50,
      width: 50,
      borderRadius: 50,
      backgroundColor: theme.backgroundSecondary,
    },
  });

export default OperationButton;
