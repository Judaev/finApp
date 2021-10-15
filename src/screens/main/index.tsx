import React, { FunctionComponent, memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';
import useTheme from '../../hooks/useTheme';
import BankingCard from './components/BankingCard';
import InfoSection from './components/InfoSection';
import ProfileHeader from './components/ProfileHeader';

const MainScreen: FunctionComponent = memo(function MainScreen() {
  const theme = useTheme();
  const appStyles = useStyles(styleSheet);

  return (
    <ScrollView style={appStyles.container}>
      <ProfileHeader />
      <BankingCard />
      <InfoSection />
    </ScrollView>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
  });

export default MainScreen;
