import React, { FunctionComponent, memo, useMemo } from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import useStyles from '../../hooks/useStyles';
import useTheme from '../../hooks/useTheme';
import { buttonStylesSheet } from './styles';

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
  const appStyle = useStyles(buttonStylesSheet);
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

export default Button;
