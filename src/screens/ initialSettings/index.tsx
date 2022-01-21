import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useRecoilState } from 'recoil';
import Button from '../../components/button';
import TextEdit from '../../components/TextEdit';
import paddings from '../../core/constants/paddings';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';
import useTheme from '../../hooks/useTheme';
import profileAtom, { ProfileStatus } from '../../store/recoil/profile/profileAtom';

const InitialSettingsScreen: FunctionComponent = memo(function InitialSettingsScreen() {
  const appStyles = useStyles(styleSheet);
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [profileData, setProfile] = useRecoilState(profileAtom);

  const [userNameText, setUserNameText] = useState('');
  const [currency, setCurrency] = useState('');

  const onDoneSetup = useCallback(() => {
    setProfile({
      userName: userNameText,
      userPhoto: null,
      status: null,
      currency: 'ruble',
    });
    return navigate('MainScreen');
  }, []);

  return (
    <View style={appStyles.mainFrame}>
      <Text style={appStyles.title}>Settings</Text>
      <View>
        <Text style={appStyles.subTitle}>Настройка пользователя</Text>
        <TextEdit value={userNameText} onChangeText={setUserNameText} placeholder='Your Name' />
        <TextEdit value={userNameText} onChangeText={setUserNameText} placeholder='Currency' />
      </View>
      <View>
        <Text style={appStyles.subTitle}>Регистрация карты</Text>
        <View>
          <Text style={{ color: theme.textSecondary }}>Initial value</Text>
          <TextEdit value={'0'} onChangeText={() => {}} placeholder='Value' />
        </View>
      </View>
      <Text style={appStyles.subTitle}>Глобальные настройки</Text>
      <Button style={appStyles.buttonDone} text='Done' onPress={onDoneSetup} />
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      paddingHorizontal: paddings.large,
      height: '100%',
      backgroundColor: theme.background,
    },
    title: {
      textAlign: 'center',
      marginVertical: paddings.default,
      fontSize: 22,
      fontWeight: '700',
      color: theme.textSecondary,
    },
    subTitle: {
      marginTop: paddings.default,
      fontSize: 18,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    text: {
      color: theme.textPrimary,
    },
    buttonDone: {
      marginTop: paddings.large,
    },
  });

export default InitialSettingsScreen;
