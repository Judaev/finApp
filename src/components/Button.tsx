import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';

interface IButton {
  text: string;
  onPress: () => void;
  height?: number;
  width?: number;
}

const Button: FunctionComponent<IButton> = memo(function Button({
  text,
  onPress,
  height = 55,
  width,
}) {
  const appStyle = useStyles(styleSheet);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...appStyle.buttonFrame, height, width }}>
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
      borderColor: theme.primary,
      borderRadius: 15,
    },
    text: {
      textAlign: 'center',
      paddingVertical: 5,
      color: theme.textPrimary,
      fontWeight: '600',
    },
  });

export default Button;
