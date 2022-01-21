import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '../../components/button';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';
import useTheme from '../../hooks/useTheme';
import initialSettingsAtom from '../../store/settings/initialSettingsAtom';

const WIDTH_SUBMIT = 180;
const WIDTH_TEXT_INPUT = 220;

const RegistrationScreen: FunctionComponent = memo(function RegistrationScreen() {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();
  const { navigate } = useNavigation();
  const isInitialSettings = useRecoilValue(initialSettingsAtom);

  const onSubmit = useCallback(() => {
    if (isInitialSettings.isInitialSetup === true) {
      return navigate('MainScreen');
    }
    return navigate('InitialSettings'); // TODO решить ошибку
  }, []);

  const skipRegistration = useCallback(() => {
    return navigate('InitialSettings');
  }, []);

  const [loginTextValue, onChangeLoginTextValue] = useState('');
  const [passwordTextValue, onChangePasswordTextValue] = useState('');

  return (
    <View style={{ ...appStyles.mainFrame }}>
      <Text style={appStyles.title}>Registration</Text>
      <TextInput
        placeholder='Login'
        placeholderTextColor={theme.textPrimary}
        style={appStyles.textInput}
        defaultValue={loginTextValue}
        onChangeText={onChangeLoginTextValue}
      />
      <TextInput
        placeholder='Password'
        placeholderTextColor={theme.textPrimary}
        style={appStyles.textInput}
        defaultValue={passwordTextValue}
        onChangeText={onChangePasswordTextValue}
      />
      <Button width={WIDTH_SUBMIT} text='Sibmit' onPress={onSubmit} />
      <TouchableOpacity onPress={skipRegistration}>
        <Text style={{ textAlign: 'center', color: theme.textPrimary }}>Войти без регистрации</Text>
      </TouchableOpacity>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
      height: '100%',
    },
    title: {
      fontSize: 34,
      fontWeight: '600',
      color: theme.textPrimary,
    },
    textInput: {
      marginVertical: 7,
      paddingVertical: 2,
      paddingHorizontal: 10,
      width: WIDTH_TEXT_INPUT,
      height: 40,
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 8,
      color: 'white',
    },
    buttonSubmit: {
      width: WIDTH_SUBMIT,
    },
  });

export default RegistrationScreen;
