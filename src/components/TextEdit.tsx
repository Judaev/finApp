import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Theme } from '../core/types/theme';
import useStyles from '../hooks/useStyles';
import useTheme from '../hooks/useTheme';

interface ITextEdit {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}

const TextEdit: FunctionComponent<ITextEdit> = memo(function TextEdit({
  value,
  onChangeText,
  placeholder,
}) {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();

  return (
    <TouchableOpacity>
      <View style={appStyles.mainFrame}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.textPrimary}
          style={{
            color: theme.textPrimary,
            backgroundColor: theme.backgroundSecondary,
            borderRadius: 8,
            height: 38,
            paddingHorizontal: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      justifyContent: 'center',
      marginVertical: 7,
      height: 40,
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 12,
    },
  });

export default TextEdit;
