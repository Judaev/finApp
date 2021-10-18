import React, { FunctionComponent, memo, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';

interface IButton {
  text: string;
  onPress: () => void;
  height?: number;
  width?: number;
  style?: ViewStyle;
  isActiveBorder?: boolean;
}

const Button: FunctionComponent<IButton> = memo(function Button({
  text,
  onPress,
  height = 55,
  width,
  style,
  isActiveBorder,
}) {
  const appStyle = useStyles(styleSheet);
  const theme = useTheme();

  const borderColorCurrent = useMemo(() => {
    return isActiveBorder ? theme.primary : theme.background;
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...appStyle.buttonFrame,
          ...style,
          height,
          width,
          borderColor: borderColorCurrent,
        }}
      >
        <Text style={appStyle.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    buttonFrame: {
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor: theme.primary,
    },
    text: {
      textAlign: 'center',
      paddingVertical: 5,
      color: theme.textPrimary,
      fontWeight: '600',
    },
  });

export default Button;
