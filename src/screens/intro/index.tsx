import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';

const slides = [
  {
    key: 'one',
    title: 'Finance App',
    text: '',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Control your finances',
    text: 'Control, plan and analyze your cash flow',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Get Started Now',
    text: "",
    backgroundColor: '#22bcb5',
  },
];

const IntroScreen: FunctionComponent = memo(function IntroScreen() {
  const appStyles = useStyles(styleSheet);

  const { navigate } = useNavigation();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={appStyles.mainFrame}>
        <Text style={appStyles.title}>{item.title}</Text>
        <Text style={appStyles.text}>{item.text}</Text>
      </View>
    );
  }, []);

  const onDone = useCallback(() => {
    return navigate('Registration'); // TODO решить ошибку
  }, []);

  return (
    <>
      <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} showSkipButton />
    </>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    mainFrame: {
      height: '100%',
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 34,
      fontWeight: '700',
      color: theme.primary,
    },
    text: {
      color: theme.textPrimary,
    },
  });

export default IntroScreen;
